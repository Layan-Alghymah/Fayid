import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateDiscount(price: number, originalPrice: number) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round((1 - price / originalPrice) * 100);
}

export function translateDiscountReason(reason?: string | null) {
  switch (reason) {
    case 'overstock': return 'فائض مخزون';
    case 'minor_defect': return 'عيب بسيط';
    case 'end_of_season': return 'نهاية الموسم';
    default: return reason || 'خصم خاص';
  }
}

export function translateOrderStatus(status: string) {
  switch (status) {
    case 'pending': return 'قيد الانتظار';
    case 'confirmed': return 'مؤكد';
    case 'shipped': return 'تم الشحن';
    case 'delivered': return 'تم التوصيل';
    case 'cancelled': return 'ملغي';
    default: return status;
  }
}
