import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { productsTable, suppliersTable, ordersTable, orderItemsTable } from "@workspace/db";
import { eq, inArray } from "drizzle-orm";
import { requireAuth, requireRole } from "../middleware/requireAuth";
import { CreateProductBody, UpdateProductParams, UpdateProductBody, DeleteProductParams } from "@workspace/api-zod";

const router: IRouter = Router();

async function getSupplierForUser(userId: number) {
  const [supplier] = await db
    .select()
    .from(suppliersTable)
    .where(eq(suppliersTable.userId, userId));
  return supplier;
}

router.get("/supplier/products", requireAuth, requireRole("supplier"), async (req, res): Promise<void> => {
  const supplier = await getSupplierForUser(req.user!.userId);
  if (!supplier) {
    res.status(404).json({ error: "Supplier profile not found" });
    return;
  }

  const products = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.supplierId, supplier.id))
    .orderBy(productsTable.createdAt);

  res.json(products.map((p) => ({
    ...p,
    supplierName: supplier.businessName,
    sizes: p.sizes ?? [],
    createdAt: p.createdAt?.toISOString() ?? new Date().toISOString(),
  })));
});

router.post("/supplier/products", requireAuth, requireRole("supplier"), async (req, res): Promise<void> => {
  const parsed = CreateProductBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const supplier = await getSupplierForUser(req.user!.userId);
  if (!supplier) {
    res.status(404).json({ error: "Supplier profile not found" });
    return;
  }

  if (supplier.verificationStatus !== "approved") {
    res.status(403).json({ error: "Supplier not yet approved" });
    return;
  }

  const [product] = await db.insert(productsTable).values({
    supplierId: supplier.id,
    name: parsed.data.name,
    category: parsed.data.category,
    description: parsed.data.description ?? null,
    price: parsed.data.price,
    originalPrice: parsed.data.originalPrice,
    quantity: parsed.data.quantity,
    imageUrl: parsed.data.imageUrl ?? null,
    discountReason: parsed.data.discountReason ?? null,
    sizes: parsed.data.sizes ?? [],
    brand: parsed.data.brand ?? null,
    isActive: true,
  }).returning();

  res.status(201).json({
    ...product,
    supplierName: supplier.businessName,
    sizes: product.sizes ?? [],
    createdAt: product.createdAt?.toISOString() ?? new Date().toISOString(),
  });
});

router.patch("/supplier/products/:id", requireAuth, requireRole("supplier"), async (req, res): Promise<void> => {
  const paramsParsed = UpdateProductParams.safeParse(req.params);
  if (!paramsParsed.success) {
    res.status(400).json({ error: paramsParsed.error.message });
    return;
  }

  const bodyParsed = UpdateProductBody.safeParse(req.body);
  if (!bodyParsed.success) {
    res.status(400).json({ error: bodyParsed.error.message });
    return;
  }

  const supplier = await getSupplierForUser(req.user!.userId);
  if (!supplier) {
    res.status(404).json({ error: "Supplier not found" });
    return;
  }

  const [existing] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, paramsParsed.data.id));

  if (!existing || existing.supplierId !== supplier.id) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  const data = bodyParsed.data;
  const [updated] = await db
    .update(productsTable)
    .set({
      name: data.name,
      category: data.category,
      description: data.description ?? null,
      price: data.price,
      originalPrice: data.originalPrice,
      quantity: data.quantity,
      imageUrl: data.imageUrl ?? null,
      discountReason: data.discountReason ?? null,
      sizes: data.sizes ?? [],
      brand: data.brand ?? null,
    })
    .where(eq(productsTable.id, paramsParsed.data.id))
    .returning();

  res.json({
    ...updated,
    supplierName: supplier.businessName,
    sizes: updated.sizes ?? [],
    createdAt: updated.createdAt?.toISOString() ?? new Date().toISOString(),
  });
});

router.delete("/supplier/products/:id", requireAuth, requireRole("supplier"), async (req, res): Promise<void> => {
  const parsed = DeleteProductParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const supplier = await getSupplierForUser(req.user!.userId);
  if (!supplier) {
    res.status(404).json({ error: "Supplier not found" });
    return;
  }

  const [existing] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, parsed.data.id));

  if (!existing || existing.supplierId !== supplier.id) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  await db.delete(productsTable).where(eq(productsTable.id, parsed.data.id));
  res.json({ success: true });
});

router.get("/supplier/orders", requireAuth, requireRole("supplier"), async (req, res): Promise<void> => {
  const supplier = await getSupplierForUser(req.user!.userId);
  if (!supplier) {
    res.status(404).json({ error: "Supplier not found" });
    return;
  }

  const supplierProducts = await db
    .select({ id: productsTable.id })
    .from(productsTable)
    .where(eq(productsTable.supplierId, supplier.id));

  const productIds = supplierProducts.map((p) => p.id);
  if (productIds.length === 0) {
    res.json([]);
    return;
  }

  const orderItems = await db
    .select()
    .from(orderItemsTable)
    .where(inArray(orderItemsTable.productId, productIds));

  const orderIds = [...new Set(orderItems.map((i) => i.orderId))];
  if (orderIds.length === 0) {
    res.json([]);
    return;
  }

  const orders = await db
    .select()
    .from(ordersTable)
    .where(inArray(ordersTable.id, orderIds));

  const result = orders.map((order) => ({
    ...order,
    customerName: order.shippingName ?? "",
    createdAt: order.createdAt?.toISOString() ?? new Date().toISOString(),
    items: orderItems
      .filter((i) => i.orderId === order.id)
      .map((i) => ({
        id: i.id,
        productId: i.productId,
        productName: i.productName,
        quantity: i.quantity,
        price: i.price,
        imageUrl: i.imageUrl,
      })),
  }));

  res.json(result);
});

router.get("/supplier/stats", requireAuth, requireRole("supplier"), async (req, res): Promise<void> => {
  const supplier = await getSupplierForUser(req.user!.userId);
  if (!supplier) {
    res.status(404).json({ error: "Supplier not found" });
    return;
  }

  const products = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.supplierId, supplier.id));

  const productIds = products.map((p) => p.id);

  if (productIds.length === 0) {
    res.json({ totalProducts: 0, totalOrders: 0, totalRevenue: 0, pendingOrders: 0 });
    return;
  }

  const orderItems = await db
    .select()
    .from(orderItemsTable)
    .where(inArray(orderItemsTable.productId, productIds));

  const orderIds = [...new Set(orderItems.map((i) => i.orderId))];
  const orders = orderIds.length > 0
    ? await db.select().from(ordersTable).where(inArray(ordersTable.id, orderIds))
    : [];

  const totalRevenue = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  res.json({
    totalProducts: products.length,
    totalOrders: orders.length,
    totalRevenue,
    pendingOrders,
  });
});

export default router;
