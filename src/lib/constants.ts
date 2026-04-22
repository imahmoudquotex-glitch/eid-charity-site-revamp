// src/lib/constants.ts — مصدر واحد لكل ثوابت المشروع

export const ORG = {
  NAME: "مؤسسة قلب الحياة للتنمية",
  NAME_EN: "Heart Of Life Development",
  TAGLINE: "معاً نبني مستقبلاً أكثر إشراقاً لأطفالنا",
  HOURS: "السبت - الخميس: ٩ ص - ٥ م",
} as const;

export const WHATSAPP = {
  BOOKING: "201080036532",      // رقم الحجز الرئيسي
  COMPLAINTS: "201080036533",   // رقم الشكاوى والاقتراحات
} as const;

export const SOCIAL = {
  FACEBOOK_1: "https://www.facebook.com/share/1Eeu73bpWN/",
  FACEBOOK_2: "https://www.facebook.com/share/1DZJGJgJby/",
} as const;

/**
 * يُنشئ رابط واتساب مع تشفير النص العربي تلقائياً
 */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
