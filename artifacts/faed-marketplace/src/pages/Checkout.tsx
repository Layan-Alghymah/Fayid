import { Layout } from "@/components/Layout";
import { useGetCart, useCreateOrder } from "@workspace/api-client-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Truck, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const checkoutSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(10, "رقم الجوال غير صحيح"),
  address: z.string().min(10, "العنوان التفصيلي مطلوب"),
  paymentMethod: z.enum(["mada", "stcpay", "tabby", "cod"]),
  notes: z.string().optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const { data: cart } = useGetCart();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { paymentMethod: 'mada' }
  });

  const paymentMethod = watch("paymentMethod");

  const orderMutation = useCreateOrder({
    mutation: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: [`/api/cart`] });
        toast({ title: "تم تأكيد الطلب", description: `رقم طلبك هو #${data.id}` });
        setLocation(`/`);
      },
      onError: () => {
        toast({ variant: "destructive", title: "خطأ", description: "حدث خطأ أثناء إرسال الطلب." });
      }
    }
  });

  const onSubmit = (data: CheckoutForm) => {
    orderMutation.mutate({ data });
  };

  if (!cart?.items || cart.items.length === 0) {
    setLocation("/cart");
    return null;
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">إتمام الطلب</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" /> تفاصيل التوصيل
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">الاسم الكامل</label>
                    <Input {...register("name")} placeholder="الاسم" />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">رقم الجوال</label>
                    <Input {...register("phone")} placeholder="05xxxxxxxx" dir="ltr" className="text-right" />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-muted-foreground mb-1">العنوان التفصيلي</label>
                    <Input {...register("address")} placeholder="المدينة، الحي، الشارع، المبنى" />
                    {errors.address && <p className="text-destructive text-xs mt-1">{errors.address.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-muted-foreground mb-1">ملاحظات التوصيل (اختياري)</label>
                    <Input {...register("notes")} placeholder="أي ملاحظات إضافية للمندوب..." />
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" /> طريقة الدفع
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'mada', name: 'مدى / بطاقة ائتمانية', icon: <CreditCard className="w-5 h-5" /> },
                    { id: 'stcpay', name: 'STC Pay', icon: <Wallet className="w-5 h-5" /> },
                    { id: 'tabby', name: 'تابي (تقسيط)', icon: <span className="font-bold">Tabby</span> },
                    { id: 'cod', name: 'الدفع عند الاستلام', icon: <Truck className="w-5 h-5" /> },
                  ].map(method => (
                    <div 
                      key={method.id}
                      onClick={() => setValue('paymentMethod', method.id as any)}
                      className={`cursor-pointer border-2 rounded-xl p-4 flex items-center gap-3 transition-all ${
                        paymentMethod === method.id 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-white/10 hover:border-white/30 text-muted-foreground'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === method.id ? 'border-primary' : 'border-muted-foreground'}`}>
                        {paymentMethod === method.id && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                      <div className="flex-1">{method.name}</div>
                      <div className={paymentMethod === method.id ? 'text-primary' : 'text-foreground'}>{method.icon}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg" isLoading={orderMutation.isPending}>
                تأكيد الطلب ودفع {formatPrice(cart.total * 1.1)}
              </Button>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="glass-panel p-6 rounded-3xl sticky top-28">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">ملخص السلة</h3>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.items.map(item => (
                  <div key={item.productId} className="flex items-center gap-3 text-sm">
                    <img src={item.product.imageUrl || "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100&h=100&fit=crop"} className="w-12 h-12 rounded object-cover" />
                    <div className="flex-1">
                      <p className="truncate font-semibold text-foreground">{item.product.name}</p>
                      <p className="text-muted-foreground text-xs">{item.quantity} × {formatPrice(item.product.price)}</p>
                    </div>
                    <div className="font-bold text-primary">{formatPrice(item.product.price * item.quantity)}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>المجموع الفرعي</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>رسوم المنصة (10%)</span>
                  <span>{formatPrice(cart.total * 0.1)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>التوصيل</span>
                  <span className="text-green-500">مجاني</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-xl text-foreground">
                  <span>الإجمالي</span>
                  <span className="text-primary">{formatPrice(cart.total * 1.1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
