import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  type?: "reveal" | "reveal-scale" | "reveal-right" | "reveal-left";
  threshold?: number;
}

/**
 * مكوّن مشترك لتأثيرات الظهور عند التمرير — استخدمه بدلاً من تعريفه في كل ملف
 */
export function RevealSection({
  children,
  className = "",
  type = "reveal",
  threshold,
}: RevealProps) {
  const { ref, visible } = useScrollReveal(threshold);
  return (
    <div ref={ref} className={`${type} ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function StaggerGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`stagger-children ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
