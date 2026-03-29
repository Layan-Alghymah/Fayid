import { useCreateProduct } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/hooks/use-toast";
import { Package, ChevronLeft } from "lucide-react";

const schema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  category: z.string().min(1),
  price: z.coerce.number().min(1, "السعر مطلوب"),
  originalPrice: z.coerce.number().min(1, "السعر الأصلي مطلوب"),
  quantity: z.coerce.number().min(1, "الكمية مطلوبة"),
  discountReason: z.string().optional(),
  imageUrl: z.string().url("رابط الصورة غير صحيح").optional().or(z.literal("")),
  description: z.string().optional(),
  brand: z.string().optional(),
});

interface AddProductTabProps {
  onSuccess: () => void;
  onBack: () => void;
}

const CATEGORIES = ["عباءات", "حجابات", "فساتين", "بدلات", "قمصان", "أقمشة"];

export function AddProductTab({ onSuccess, onBack }: AddProductTabProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { category: "عباءات", discountReason: "overstock", name: "", description: "", brand: "", imageUrl: "" },
  });

  const price = Number(watch("price")) || 0;
  const originalPrice = Number(watch("originalPrice")) || 0;
  const discount = originalPrice > 0 && price > 0 ? Math.round((1 - price / originalPrice) * 100) : 0;

  const createMut = useCreateProduct({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["/api/supplier/products"] });
        queryClient.invalidateQueries({ queryKey: ["/api/supplier/stats"] });
        toast({ title: "تم النشر", description: "تم إضافة المنتج بنجاح" });
        reset();
        onSuccess();
      },
      onError: (e: any) => {
        toast({ title: "خطأ", description: e.message || "حدث خطأ", variant: "destructive" });
      },
    },
  });

  const onSubmit = (data: any) => {
    const payload: any = { ...data };
    if (!payload.imageUrl) delete payload.imageUrl;
    createMut.mutate({ data: payload });
  };

  return (
    <div className="animate-in fade-in duration-300 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-white/10 text-muted-foreground transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-black">إضافة منتج جديد</h2>
          <p className="text-sm text-muted-foreground">انشر منتجاتك الفائضة للبيع</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-6">
        <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-5">
          <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Package className="w-4 h-4" /> معلومات المنتج
          </h3>

          <div>
            <label className="block text-sm font-bold mb-2">اسم المنتج <span className="text-destructive">*</span></label>
            <Input {...register("name")} placeholder="مثال: عباءة حرير فاخرة" />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message as string}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">القسم</label>
              <select {...register("category")} className="w-full bg-background/50 border border-border rounded-xl px-4 h-11 text-sm focus:outline-none focus:border-primary">
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">الماركة (اختياري)</label>
              <Input {...register("brand")} placeholder="اسم الماركة" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">الوصف</label>
            <textarea
              {...register("description")}
              className="w-full bg-background/50 border border-border rounded-xl p-4 h-24 text-sm focus:outline-none focus:border-primary resize-none"
              placeholder="وصف مختصر للمنتج..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">رابط الصورة (اختياري)</label>
            <Input {...register("imageUrl")} placeholder="https://..." dir="ltr" />
            {errors.imageUrl && <p className="text-xs text-destructive mt-1">{errors.imageUrl.message as string}</p>}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-5">
          <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-widest">التسعير والمخزون</h3>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">السعر الأصلي (ريال) <span className="text-destructive">*</span></label>
              <Input type="number" {...register("originalPrice")} placeholder="500" />
              {errors.originalPrice && <p className="text-xs text-destructive mt-1">{errors.originalPrice.message as string}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">سعر البيع (ريال) <span className="text-destructive">*</span></label>
              <Input type="number" {...register("price")} placeholder="350" />
              {errors.price && <p className="text-xs text-destructive mt-1">{errors.price.message as string}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">الكمية <span className="text-destructive">*</span></label>
              <Input type="number" {...register("quantity")} placeholder="50" />
              {errors.quantity && <p className="text-xs text-destructive mt-1">{errors.quantity.message as string}</p>}
            </div>
          </div>

          {discount > 0 && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20">
              <span className="text-[#c9a84c] text-sm font-bold">نسبة الخصم: {discount}%</span>
              <span className="text-xs text-muted-foreground">سيظهر هذا للمشترين</span>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2">سبب الخصم</label>
            <select {...register("discountReason")} className="w-full bg-background/50 border border-border rounded-xl px-4 h-11 text-sm focus:outline-none focus:border-primary">
              <option value="overstock">فائض مخزون</option>
              <option value="end_of_season">نهاية الموسم</option>
              <option value="minor_defect">عيب مصنعي بسيط</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" size="lg" className="flex-1" isLoading={createMut.isPending}>
            نشر المنتج
          </Button>
          <Button type="button" variant="ghost" size="lg" onClick={onBack}>
            إلغاء
          </Button>
        </div>
      </form>
    </div>
  );
}
