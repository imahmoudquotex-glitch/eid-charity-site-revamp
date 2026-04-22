import { useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

/**
 * يضبط عنوان الصفحة والوصف لكل صفحة ديناميكياً — مهم لـ SEO
 */
export function usePageMeta(title: string, description?: string) {
  const { t } = useLang();
  const BASE_TITLE = t.baseTitle;

  useEffect(() => {
    document.title = `${title} | ${BASE_TITLE}`;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    // استعادة العنوان الأصلي عند الخروج من الصفحة
    return () => {
      document.title = BASE_TITLE;
    };
  }, [title, description, BASE_TITLE]);
}
