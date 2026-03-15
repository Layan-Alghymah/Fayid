import { Layout } from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useGetSupplierStats, useListSupplierProducts, useListSupplierOrders, useCreateProduct, useDeleteProduct } from "@workspace/api-client-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { formatPrice, translateOrderStatus, translateDiscountReason } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Package, TrendingUp, ShoppingBag, Plus, Trash2, LayoutDashboard, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const productSchema = z.object({
  name: z.string().min(3),
  category: z.string().min(1),
  price: z.coerce.number().min(1),
  originalPrice: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
  discountReason: z.string().optional(),
  imageUrl: z.string().url().optional().or(z.literal('')),
  description: z.string().optional(),
});

export default function SupplierDashboard() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'add' | 'orders'>('overview');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  if (!user || user.role !== 'supplier') {
    setLocation("/");
    return null;
  }

  const { data: stats } = useGetSupplierStats();
  const { data: products } = useListSupplierProducts();
  const { data: orders } = useListSupplierOrders();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema)
  });

  const createMut = useCreateProduct({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/supplier/products`] });
        queryClient.invalidateQueries({ queryKey: [`/api/supplier/stats`] });
        toast({ title: "نجاح", description: "تم إضافة المنتج بنجاح." });
        reset();
        setActiveTab('products');
      }
    }
  });

  const deleteMut = useDeleteProduct({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/supplier/products`] });
        toast({ title: "نجاح", description: "تم الحذف." });
      }
    }
  });

  const onSubmit = (data: any) => {
    createMut.mutate({ data });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 min-h-[80vh]">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex flex-col gap-2">
          <div className="glass-panel p-6 rounded-2xl mb-4">
            <h2 className="font-bold text-lg mb-1">{user.name}</h2>
            <div className="text-xs px-2 py-1 bg-primary/20 text-primary rounded inline-block">
              {user.supplierStatus === 'approved' ? 'مورد معتمد' : 'بانتظار الاعتماد'}
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {[
              { id: 'overview', name: 'نظرة عامة', icon: <LayoutDashboard className="w-4 h-4" /> },
              { id: 'products', name: 'منتجاتي', icon: <Package className="w-4 h-4" /> },
              { id: 'add', name: 'إضافة منتج', icon: <Plus className="w-4 h-4" /> },
              { id: 'orders', name: 'الطلبات', icon: <ShoppingBag className="w-4 h-4" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                <span className="font-bold text-sm">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in">
              <h2 className="text-2xl font-bold">لوحة التحكم</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'إجمالي الإيرادات', val: formatPrice(stats?.totalRevenue || 0), icon: <TrendingUp /> },
                  { title: 'المنتجات النشطة', val: stats?.totalProducts || 0, icon: <Package /> },
                  { title: 'الطلبات المكتملة', val: stats?.totalOrders || 0, icon: <ShoppingBag /> },
                  { title: 'طلبات قيد الانتظار', val: stats?.pendingOrders || 0, icon: <Clock /> },
                ].map((s, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border-white/5">
                    <div className="text-primary mb-4 opacity-80">{s.icon}</div>
                    <div className="text-3xl font-black text-foreground">{s.val}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="animate-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">منتجاتي</h2>
                <Button onClick={() => setActiveTab('add')} size="sm"><Plus className="w-4 h-4 mr-2" /> منتج جديد</Button>
              </div>
              <div className="glass-panel rounded-2xl overflow-hidden border-white/5">
                <table className="w-full text-sm text-right">
                  <thead className="bg-black/20 text-muted-foreground uppercase">
                    <tr>
                      <th className="px-6 py-4 font-bold">المنتج</th>
                      <th className="px-6 py-4 font-bold">السعر</th>
                      <th className="px-6 py-4 font-bold">الكمية</th>
                      <th className="px-6 py-4 font-bold">القسم</th>
                      <th className="px-6 py-4 font-bold">إجراء</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map(p => (
                      <tr key={p.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                        <td className="px-6 py-4 font-semibold">{p.name}</td>
                        <td className="px-6 py-4 text-primary">{formatPrice(p.price)}</td>
                        <td className="px-6 py-4">{p.quantity}</td>
                        <td className="px-6 py-4">{p.category === 'textiles' ? 'أقمشة' : 'ملابس'}</td>
                        <td className="px-6 py-4">
                          <button onClick={() => deleteMut.mutate({ id: p.id })} className="text-destructive hover:text-red-400 p-2">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <div className="animate-in max-w-2xl">
              <h2 className="text-2xl font-bold mb-6">إضافة منتج جديد</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 rounded-3xl space-y-6 border-white/5">
                
                <div>
                  <label className="block text-sm mb-2">اسم المنتج</label>
                  <Input {...register("name")} placeholder="مثال: قماش حرير طبيعي" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message as string}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">القسم</label>
                    <select {...register("category")} className="w-full bg-background/50 border border-border rounded-xl px-4 h-12 text-sm focus:outline-none focus:border-primary">
                      <option value="عباءات">عباءات</option>
                      <option value="حجابات">حجابات</option>
                      <option value="فساتين">فساتين</option>
                      <option value="بدلات">بدلات</option>
                      <option value="قمصان">قمصان</option>
                      <option value="أقمشة">أقمشة</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">سبب الخصم (الفائض)</label>
                    <select {...register("discountReason")} className="w-full bg-background/50 border border-border rounded-xl px-4 h-12 text-sm focus:outline-none focus:border-primary">
                      <option value="overstock">فائض مخزون</option>
                      <option value="end_of_season">نهاية الموسم</option>
                      <option value="minor_defect">عيب مصنعي بسيط</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-2">السعر الأصلي</label>
                    <Input type="number" {...register("originalPrice")} />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">السعر المخفض</label>
                    <Input type="number" {...register("price")} />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">الكمية المتاحة</label>
                    <Input type="number" {...register("quantity")} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">رابط الصورة (اختياري)</label>
                  <Input {...register("imageUrl")} placeholder="https://..." dir="ltr" />
                </div>

                <div>
                  <label className="block text-sm mb-2">الوصف</label>
                  <textarea {...register("description")} className="w-full bg-background/50 border border-border rounded-xl p-4 h-24 text-sm focus:outline-none focus:border-primary resize-none"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full" isLoading={createMut.isPending}>
                  نشر المنتج
                </Button>
              </form>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="animate-in">
              <h2 className="text-2xl font-bold mb-6">الطلبات الواردة</h2>
              <div className="space-y-4">
                {orders?.map(o => (
                  <div key={o.id} className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4 border-white/5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">طلب #{o.id}</span>
                        <span className={`text-xs px-2 py-1 rounded font-bold ${
                          o.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'
                        }`}>
                          {translateOrderStatus(o.status)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">العميل: {o.customerName}</p>
                      <p className="text-sm text-muted-foreground mt-1">{new Date(o.createdAt).toLocaleDateString('ar-SA')}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-primary">{formatPrice(o.totalPrice)}</div>
                      <p className="text-xs text-muted-foreground">{o.items?.length || 0} منتجات</p>
                    </div>
                  </div>
                ))}
                {orders?.length === 0 && <p className="text-muted-foreground">لا توجد طلبات بعد.</p>}
              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}
