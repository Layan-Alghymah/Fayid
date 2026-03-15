import { db } from "@workspace/db";
import { usersTable, suppliersTable, productsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

async function seed() {
  console.log("Seeding database...");

  const adminEmail = "admin@faed.sa";
  const [existingAdmin] = await db.select().from(usersTable).where(eq(usersTable.email, adminEmail));

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash("admin123", 10);
    await db.insert(usersTable).values({
      name: "مدير النظام",
      email: adminEmail,
      passwordHash,
      role: "admin",
    });
    console.log("Created admin user: admin@faed.sa / admin123");
  }

  const supplierEmail = "supplier@faed.sa";
  let supplierId: number | null = null;
  const [existingSupplier] = await db.select().from(usersTable).where(eq(usersTable.email, supplierEmail));

  if (!existingSupplier) {
    const passwordHash = await bcrypt.hash("supplier123", 10);
    const [supplierUser] = await db.insert(usersTable).values({
      name: "مورد تجريبي",
      email: supplierEmail,
      passwordHash,
      role: "supplier",
    }).returning();

    const [supplier] = await db.insert(suppliersTable).values({
      userId: supplierUser.id,
      businessName: "دار الأناقة للأزياء",
      verificationStatus: "approved",
    }).returning();
    supplierId = supplier.id;
    console.log("Created supplier: supplier@faed.sa / supplier123");
  } else {
    const [s] = await db.select().from(suppliersTable).where(eq(suppliersTable.userId, existingSupplier.id));
    supplierId = s?.id ?? null;
  }

  const buyerEmail = "buyer@faed.sa";
  const [existingBuyer] = await db.select().from(usersTable).where(eq(usersTable.email, buyerEmail));
  if (!existingBuyer) {
    const passwordHash = await bcrypt.hash("buyer123", 10);
    await db.insert(usersTable).values({
      name: "أحمد العلي",
      email: buyerEmail,
      passwordHash,
      role: "buyer",
    });
    console.log("Created buyer: buyer@faed.sa / buyer123");
  }

  if (supplierId) {
    const existing = await db.select().from(productsTable).where(eq(productsTable.supplierId, supplierId));
    if (existing.length === 0) {
      await db.insert(productsTable).values([
        {
          supplierId,
          name: "عباءة كلاسيكية بتصميم أنيق",
          description: "عباءة نسائية فاخرة من قماش الجورجيت، تصميم عصري يجمع بين الأناقة والراحة",
          category: "عباءات",
          price: 180,
          originalPrice: 350,
          quantity: 45,
          imageUrl: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&h=600&fit=crop",
          discountReason: "overstock",
          sizes: ["S", "M", "L", "XL"],
          brand: "دار الأناقة",
          isActive: true,
        },
        {
          supplierId,
          name: "حجاب شيفون متعدد الألوان",
          description: "حجاب من قماش الشيفون الخفيف، متوفر بألوان متعددة تناسب جميع الأذواق",
          category: "حجابات",
          price: 35,
          originalPrice: 75,
          quantity: 120,
          imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&h=600&fit=crop",
          discountReason: "end_of_season",
          sizes: ["One Size"],
          brand: "دار الأناقة",
          isActive: true,
        },
        {
          supplierId,
          name: "بدلة رجالية رسمية",
          description: "بدلة رجالية كلاسيكية من الصوف الإيطالي، مثالية للمناسبات الرسمية والأعمال",
          category: "بدلات",
          price: 420,
          originalPrice: 850,
          quantity: 15,
          imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
          discountReason: "minor_defect",
          sizes: ["46", "48", "50", "52", "54"],
          brand: "دار الأناقة",
          isActive: true,
        },
        {
          supplierId,
          name: "فستان سهرة فاخر",
          description: "فستان سهرة راقٍ مع تطريز يدوي، مثالي للحفلات والمناسبات الخاصة",
          category: "فساتين",
          price: 290,
          originalPrice: 650,
          quantity: 8,
          imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
          discountReason: "overstock",
          sizes: ["XS", "S", "M", "L"],
          brand: "دار الأناقة",
          isActive: true,
        },
        {
          supplierId,
          name: "قميص قطن كلاسيكي",
          description: "قميص رجالي من القطن المصري الخالص، تصميم كلاسيكي يناسب الإطلالات اليومية",
          category: "قمصان",
          price: 65,
          originalPrice: 120,
          quantity: 60,
          imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop",
          discountReason: "end_of_season",
          sizes: ["S", "M", "L", "XL", "XXL"],
          brand: "دار الأناقة",
          isActive: true,
        },
        {
          supplierId,
          name: "قماش كشمير فاخر",
          description: "قماش كشمير خالص ناعم الملمس لتفصيل الملابس الراقية، متوفر بألوان متعددة",
          category: "أقمشة",
          price: 150,
          originalPrice: 320,
          quantity: 30,
          imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=600&fit=crop",
          discountReason: "overstock",
          sizes: ["One Size"],
          brand: "دار الأناقة",
          isActive: true,
        },
      ]);
      console.log("Created 6 sample products");
    }
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch(console.error);
