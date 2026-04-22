import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionTitle from "./SectionTitle";
import { useLang } from "@/contexts/LanguageContext";

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}

function StaggerGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal(0.1);
  return <div ref={ref} className={`stagger-children ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}

// Maps static data to translated keys
const branchStatic = [
  {
    icon: "🏛️",
    mapUrl: "https://maps.google.com/?q=30.0444,31.2357",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sar!2seg!4v1!5m2!1sar!2seg",
    phone: "01080036532",
  },
  {
    icon: "🏥",
    mapUrl: "https://maps.google.com/?q=29.9875,31.2095",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5!2d31.2095!3d29.9875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzE1LjAiTiAzMcKwMTInMzQuMiJF!5e0!3m2!1sar!2seg!4v1!5m2!1sar!2seg",
    phone: "01080036532",
  },
  {
    icon: "💙",
    mapUrl: "https://maps.google.com/?q=30.0131,31.2089",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d31.2089!3d30.0131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzQ3LjIiTiAzMcKwMTInMzIuMCJF!5e0!3m2!1sar!2seg!4v1!5m2!1sar!2seg",
    phone: "01080036532",
  },
];

export default function Branches() {
  const { t, lang } = useLang();
  const [loadedMaps, setLoadedMaps] = useState<Record<string, boolean>>({});
  
  // Combine static data with localized text
  const branches = branchStatic.map((bs, i) => ({
    ...bs,
    ...t.branches.items[i]
  }));

  const loadMap = (branchName: string) => {
    setLoadedMaps((prev) => ({ ...prev, [branchName]: true }));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <RevealSection>
          <SectionTitle title={t.branches.title} subtitle={t.branches.sub} />
        </RevealSection>

        <StaggerGrid className="grid md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-card card-3d border border-border shadow-md rounded-3xl overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                {loadedMaps[branch.name] ? (
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={lang === "ar" ? `خريطة ${branch.name}` : `Map of ${branch.name}`}
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => loadMap(branch.name)}
                    className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-royal/10 via-background to-primary/10 hover:from-royal/20 hover:to-primary/20 transition-colors duration-300"
                    aria-label={lang === "ar" ? `تحميل خريطة ${branch.name}` : `Load map for ${branch.name}`}
                  >
                    <span className="text-3xl">🗺️</span>
                    <span className="text-sm font-bold text-foreground">
                      {lang === "ar" ? "اضغط لعرض الخريطة" : "Tap to load map"}
                    </span>
                  </button>
                )}
                <div className="absolute top-3 right-3 w-12 h-12 rounded-2xl glass-dark flex items-center justify-center text-2xl shadow-lg border border-white/10">
                  {branch.icon}
                </div>
              </div>

              <div className={`p-6 space-y-4 card-3d-content ${lang === "ar" ? "text-right" : "text-left"}`}>
                <h3 className="text-xl font-bold text-foreground group-hover:text-royal transition-colors">
                  {branch.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">📍</span>
                  {branch.address}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span>⏰</span>
                  {branch.hours}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span>📱</span>
                  <a href={`tel:${branch.phone}`} className="hover:text-foreground transition-colors" dir="ltr">{branch.phone}</a>
                </div>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl gradient-red-blue text-primary-foreground font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 btn-glow mt-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t.branches.btn}
                </a>
              </div>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
