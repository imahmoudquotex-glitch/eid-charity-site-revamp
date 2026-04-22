import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/main-hero.png";
import servicesImg from "@/assets/services-banner.jpg";
import SectionTitle from "@/components/SectionTitle";
import Branches from "@/components/Branches";
import { RevealSection, StaggerGrid } from "@/components/RevealSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

// Animated Counter with K-format support
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  isK = false,
  locale = "ar-EG",
}: {
  end: number;
  suffix?: string;
  duration?: number;
  isK?: boolean;
  locale?: string;
}) {
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

  const display = isK ? `${count}K` : count.toLocaleString(locale);
  return (
    <div ref={ref} className="text-3xl md:text-4xl font-black text-royal counter-glow">
      {display}{suffix}
    </div>
  );
}

const partners = [
  { name: "وزارة التضامن الاجتماعي", nameEn: "Ministry of Social Solidarity", icon: "🏛️" },
  { name: "الهلال الأحمر المصري", nameEn: "Egyptian Red Crescent", icon: "🏥" },
  { name: "جمعية رسالة", nameEn: "Resala Association", icon: "🤝" },
  { name: "مؤسسة مصر الخير", nameEn: "Misr El Kheir Foundation", icon: "💛" },
  { name: "يونيسف مصر", nameEn: "UNICEF Egypt", icon: "🌍" },
  { name: "بنك الطعام المصري", nameEn: "Egyptian Food Bank", icon: "🍞" },
];

export default function Index() {
  const { lang, t } = useLang();
  const locale = lang === "ar" ? "ar-EG" : "en-US";

  usePageMeta(t.home.metaTitle, t.home.metaDesc);

  const heroRef = useRef<HTMLDivElement>(null);
  const tickerItems = t.home.ticker;

  useEffect(() => {
    const preloadId = "hero-preload-main";
    if (document.getElementById(preloadId)) return;

    const link = document.createElement("link");
    link.id = preloadId;
    link.rel = "preload";
    link.as = "image";
    link.href = heroImg;
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, []);



  const stats = [
    { value: 6879, suffix: "", label: t.stats.beneficiaries, isK: false },
    { value: 1000, suffix: "", label: t.stats.services, isK: false },
    { value: 3456, suffix: "", label: t.stats.education, isK: false },
    { value: 7000, suffix: "", label: t.stats.health, isK: false },
    { value: 6879, suffix: "", label: t.stats.solidarity, isK: false },
  ];

  const aboutCards = [
    { title: t.about.vision, desc: t.about.visionDesc, icon: "🌟", color: "primary" },
    { title: t.about.mission, desc: t.about.missionDesc, icon: "💡", color: "royal" },
    { title: t.about.values, desc: t.about.valuesDesc, icon: "❤️", color: "primary" },
  ];

  return (
    <>
      {/* Hero with Parallax */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 bg-navy">
          <img
            src={heroImg}
            alt={lang === "ar" ? "مجتمع مصري متنوع" : "Diverse Egyptian Community"}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Animated Magic Blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/40 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/40 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-hope/40 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm mb-8 border border-white/10 text-primary-foreground/90">
              <span className="w-2 h-2 rounded-full bg-royal animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl leading-[1.1] mb-6 tracking-tight text-primary-foreground">
              {t.hero.title1}
              <br />
              <span className="text-glow-blue">{t.hero.title2}</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-2 font-display text-primary-foreground/95">
              {t.hero.subtitle}
            </p>
            <p className="text-sm mb-10 max-w-lg text-primary-foreground/50 leading-relaxed">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/services#booking"
                className="inline-flex items-center gap-2 gradient-red-blue text-primary-foreground px-7 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-[1.04] transition-all duration-300 btn-glow btn-ripple"
              >
                {t.hero.book}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 glass-dark border border-white/20 text-primary-foreground px-7 py-3.5 rounded-full text-base hover:bg-white/20 hover:scale-[1.04] transition-all duration-300"
              >
                {t.hero.explore}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background" preserveAspectRatio="none">
            <path d="M0,60 L0,20 Q720,0 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="py-4 -mt-1 overflow-hidden bg-card border-y border-border/50">
        <div>
          <div className="flex w-max" style={{ animation: "tickerScroll 50s linear infinite" }}>
            {[...Array(2)].map((_, repeat) => (
              <div key={repeat} className="flex items-center shrink-0">
                {tickerItems.map((item, i) => (
                  <div key={`${repeat}-${i}`} className="flex items-center gap-2 px-6 whitespace-nowrap">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-bold text-foreground">{item.text}</span>
                    <span className="mx-4 w-1.5 h-1.5 rounded-full bg-royal/40" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 section-pattern">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection>
            <SectionTitle title={t.about.title} subtitle={t.about.sub} />
          </RevealSection>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {aboutCards.map((item) => (
              <div key={item.title} className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-border/60 card-hover group shimmer-border tilt-card">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ${item.color === "primary" ? "gradient-primary" : "gradient-royal"} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4 font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 section-blue-tint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-royal/10 rounded-full blur-3xl animate-blob" />
        </div>
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <RevealSection>
            <SectionTitle title={t.stats.title} subtitle={t.stats.sub} />
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="space-y-4 bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-border/60 card-hover float-shadow"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} isK={stat.isK} locale={locale} />
                <div className="text-base font-bold text-muted-foreground leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fields */}
      <section className="py-20 section-red-tint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-royal/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <RevealSection>
            <SectionTitle title={t.fields.title} subtitle={t.fields.sub} />
          </RevealSection>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {t.fields.items.map((field, i) => (
              <Link
                key={field.label}
                to="/goals"
                className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-7 text-center shadow-sm border border-border/60 shimmer-border group block overflow-hidden transition-all duration-500 hover:shadow-xl tilt-card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal/0 via-royal/0 to-royal/0 group-hover:from-royal/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:bg-royal/10 transition-all duration-500 ease-out">
                    {field.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-snug mb-1.5 group-hover:text-royal transition-colors duration-300">{field.label}</h3>
                  <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{field.desc}</p>
                </div>
              </Link>
            ))}
          </StaggerGrid>
          <RevealSection className="text-center mt-12">
            <Link to="/goals" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 btn-glow group">
              {t.fields.btn}
              <svg className={`w-4 h-4 ${lang === "ar" ? "rotate-180" : ""} group-hover:${lang === "ar" ? "-translate-x-1" : "translate-x-1"} transition-transform duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Foundation / Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection>
            <SectionTitle title={t.foundation.title} subtitle={t.foundation.sub} />
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-8">
            <RevealSection type="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-xl card-hover border border-border/50 shimmer-border bg-card/60 backdrop-blur-sm">
                <div className="relative group overflow-hidden">
                  <img src={servicesImg} alt={t.foundation.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={640} height={224} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 glass-dark text-xs font-bold px-4 py-2 rounded-full text-primary-foreground shadow-lg border border-white/20">
                    {t.foundation.badge}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-royal mb-4">{t.foundation.name}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">{t.foundation.desc1}</p>
                  <p className="text-muted-foreground/80 text-sm mb-6">{t.foundation.desc2}</p>
                  <Link to="/services#booking" className="inline-flex items-center gap-2 gradient-red-blue text-primary-foreground px-8 py-3 rounded-full text-base font-bold shadow-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-300 btn-glow btn-ripple">
                    {t.foundation.book}
                  </Link>
                </div>
              </div>
            </RevealSection>
            <RevealSection type="reveal-left">
              <div className="space-y-4">
                {t.foundation.items.map((s) => (
                  <div key={s.title} className="flex gap-4 items-center bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-border/60 shadow-sm shimmer-border card-hover tilt-card group">
                    <div className="w-12 h-12 rounded-xl gradient-royal flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm group-hover:text-royal transition-colors">{s.title}</h4>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 section-warm-tint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <RevealSection>
            <SectionTitle title={t.partners.title} subtitle={t.partners.sub} />
          </RevealSection>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-card/70 backdrop-blur-md rounded-3xl p-6 text-center shadow-sm border border-border/50 card-hover group shimmer-border tilt-card">
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">{partner.icon}</div>
                <p className="text-sm font-bold text-muted-foreground group-hover:text-royal transition-colors">
                  {lang === "ar" ? partner.name : partner.nameEn}
                </p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Branches */}
      <Branches />

      {/* FAQ Section */}
      <section className="py-20 section-blue-tint">
        <div className="mx-auto max-w-3xl px-6">
          <RevealSection>
            <SectionTitle title={t.faq.title} subtitle={t.faq.sub} />
          </RevealSection>
          <RevealSection>
            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} lang={lang} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

    </>
  );
}

function FAQItem({ question, answer, lang }: { question: string; answer: string; lang: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-card/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${open ? "border-royal/40 shadow-lg" : "border-border/60 shadow-sm shimmer-border hover:shadow-md hover:border-royal/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-6 ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        <span className="font-bold text-sm" dir="auto">{question}</span>
        <svg className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 animate-fade-in">
          <div className="border-t border-border pt-4">
            <p className="text-muted-foreground text-sm leading-relaxed" dir="auto">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
