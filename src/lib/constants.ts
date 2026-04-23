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

function normalizePhoneNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  // E.164 allows up to 15 digits. Keep a sane lower bound.
  if (digits.length >= 8 && digits.length <= 15) {
    return digits;
  }
  return WHATSAPP.BOOKING;
}

/**
 * يُنشئ رابط واتساب مع تشفير النص العربي تلقائياً
 */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const safeNumber = normalizePhoneNumber(number);
  const base = `https://wa.me/${safeNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function isSafeExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:" ||
      parsed.protocol === "mailto:" ||
      parsed.protocol === "tel:"
    );
  } catch {
    return false;
  }
}
