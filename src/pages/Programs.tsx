import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import programsHeroImg from "@/assets/programs-banner.jpg";
import { useState, useEffect, useRef } from "react";
import { RevealSection, StaggerGrid } from "@/components/RevealSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

function AnimatedCounter({ end, suffix = "", duration = 2000, locale = "ar-EG" }: { end: number; suffix?: string; duration?: number; locale?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) { setCount(end); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, prefersReduced]);

  return <div ref={ref} className="text-4xl md:text-5xl font-black text-royal counter-glow" dir="ltr">{count.toLocaleString(locale)}{suffix}</div>;
}

export default function ProgramsPage() {
  const { t, lang } = useLang();
  const locale = lang === "ar" ? "ar-EG" : "en-US";
  usePageMeta(t.programs.metaTitle, t.programs.metaDesc);

  const impactStats = [
    { value: 10000, suffix: "+", label: t.programs.impact.beneficiary },
    { value: 250, suffix: "+", label: t.programs.impact.volunteer },
    { value: 3, suffix: "", label: t.programs.impact.programs },
    { value: 8, suffix: "", label: t.programs.impact.fields },
  ];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <img
            src={programsHeroImg}
            alt={t.programs.title}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 py-24">
          <div className={`max-w-xl animate-fade-up ${lang === "ar" ? "mr-auto" : "ml-0"}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm mb-6 border border-white/10 text-primary-foreground/90`}>
              <span className={`w-2 h-2 rounded-full bg-royal animate-pulse`} />
              {t.programs.heroBadge}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-4 tracking-tight text-primary-foreground font-black ${lang === "ar" ? "text-right" : "text-left"}`}>
              {t.programs.title}
              <br />
              <span className="text-glow-blue">{t.programs.titleGlow}</span>
            </h1>
            <p className={`text-lg max-w-md text-primary-foreground/70 ${lang === "ar" ? "text-right" : "text-left"}`}>{t.programs.slogan}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background" preserveAspectRatio="none">
            <path d="M0,60 L0,20 Q720,0 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </section>

      <section className="py-16 -mt-1">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} locale={locale} />
                <div className="text-sm font-bold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection><SectionTitle title={t.programs.sectionTitle} subtitle={t.programs.sectionSub} /></RevealSection>
          <div className="space-y-16">
            {t.programs.items.map((p, i) => (
              <RevealSection key={p.title} type={i % 2 ? "reveal-left" : "reveal-right"}>
                <div className={`flex flex-col ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-0 items-stretch bg-card rounded-3xl overflow-hidden shadow-lg border border-border group hover:shadow-2xl transition-all duration-500 hover:border-royal/20`}>
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-black text-lg shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className={`md:w-1/2 p-8 md:p-10 flex flex-col justify-center ${lang === "ar" ? "text-right" : "text-left"}`}>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-royal transition-colors duration-300">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                    <div className={`flex flex-wrap gap-3 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                      {p.stats.map((stat) => (
                        <div key={stat.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                          <span className="text-royal font-black">{stat.value}</span>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-blue-tint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 bg-royal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <RevealSection><SectionTitle title={t.programs.storiesTitle} subtitle={t.programs.storiesSub} /></RevealSection>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {t.programs.stories.map((story) => (
              <div key={story.name} className={`bg-card rounded-2xl p-8 border border-border shadow-sm card-hover shimmer-border tilt-card ${lang === "ar" ? "text-right" : "text-left"}`}>
                <div className="text-4xl mb-4">{story.emoji}</div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-sm italic">"{story.quote}"</blockquote>
                <div>
                  <div className="font-bold text-royal">{story.name}</div>
                  <div className="text-xs text-muted-foreground">{story.role}</div>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <RevealSection>
            <h2 className="text-2xl font-bold mb-4">{t.programs.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8">{t.programs.ctaSub}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services#booking" className="gradient-red-blue text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg hover:scale-[1.05] transition-all btn-glow btn-ripple">{t.programs.ctaBtn1}</Link>
              <Link to="/contact" className="border-2 border-royal text-royal px-8 py-3 rounded-full font-bold hover:bg-royal hover:text-primary-foreground transition-all">{t.programs.ctaBtn2}</Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
