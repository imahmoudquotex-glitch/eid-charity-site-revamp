import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import heroImg from "@/assets/hero-bg.webp";
import servicesImg from "@/assets/services-hero.webp";
import donationBanner from "@/assets/donation-banner.png";
import SectionTitle from "@/components/SectionTitle";
import Branches from "@/components/Branches";
import { RevealSection, StaggerGrid } from "@/components/RevealSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

/* ── Scroll Progress Bar ─────────────────────────────── */
function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}

/* ── Animated Counter ────────────────────────────────── */
function AnimatedCounter({
  end, suffix = "", duration = 2000, isK = false, locale = "ar-EG",
}: { end: number; suffix?: string; duration?: number; isK?: boolean; locale?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

/* ── Partners data ───────────────────────────────────── */
const partners = [
  { name: "وزارة التضامن الاجتماعي", nameEn: "Ministry of Social Solidarity", icon: "🏛️" },
  { name: "الهلال الأحمر المصري", nameEn: "Egyptian Red Crescent", icon: "🏥" },
  { name: "جمعية رسالة", nameEn: "Resala Association", icon: "🤝" },
  { name: "مؤسسة مصر الخير", nameEn: "Misr El Kheir Foundation", icon: "💛" },
  { name: "يونيسف مصر", nameEn: "UNICEF Egypt", icon: "🌍" },
  { name: "بنك الطعام المصري", nameEn: "Egyptian Food Bank", icon: "🍞" },
];

/* ── Main Page ───────────────────────────────────────── */
export default function Index() {
  const { lang, t } = useLang();
  const locale = lang === "ar" ? "ar-EG" : "en-US";
  usePageMeta(t.home.metaTitle, t.home.metaDesc);

  const heroRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const tickerItems = t.home.ticker;

  /* Preload hero */
  useEffect(() => {
    const id = "hero-preload-main";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id; link.rel = "preload"; link.as = "image"; link.href = heroImg;
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  /* Mouse parallax on hero blobs */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    if (blob1Ref.current)
      blob1Ref.current.style.transform = `translate(${cx * 40}px, ${cy * 30}px) scale(1.05)`;
    if (blob2Ref.current)
      blob2Ref.current.style.transform = `translate(${cx * -30}px, ${cy * -20}px) scale(1.05)`;
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

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
      <ScrollProgress />

      {/* ── Hero ── */}
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

          {/* Blobs with mouse parallax */}
          <div
            ref={blob1Ref}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/40 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"
            style={{ transition: "transform 0.3s ease-out" }}
          />
          <div
            ref={blob2Ref}
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-hope/40 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000"
            style={{ transition: "transform 0.3s ease-out" }}
          />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-royal/22 rounded-full mix-blend-overlay filter blur-3xl opacity-35 animate-blob animation-delay-2000" />

          {/* Floating particles */}
          <div className="particle particle-1 w-3 h-3 bg-white/30 top-[20%] right-[15%]" />
          <div className="particle particle-2 w-2 h-2 bg-royal/60 top-[60%] right-[25%]" />
          <div className="particle particle-3 w-4 h-4 bg-gold/40 top-[35%] left-[10%]" />
          <div className="particle particle-4 w-2 h-2 bg-white/20 bottom-[30%] right-[40%]" />
          <div className="particle particle-5 w-3 h-3 bg-primary/40 top-[75%] left-[20%]" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm mb-8 border border-white/10 text-primary-foreground/90 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-royal animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl leading-[1.1] mb-6 tracking-tight text-primary-foreground animate-slide-up animate-slide-up-delay-1">
              {t.hero.title1}
              <br />
              <span className="text-glow-blue">{t.hero.title2}</span>
            </h1>

            <p className="text-xl sm:text-2xl mb-2 font-display text-primary-foreground/95 animate-slide-up animate-slide-up-delay-2">
              {t.hero.subtitle}
            </p>
            <p className="text-sm mb-10 max-w-lg text-primary-foreground/50 leading-relaxed animate-slide-up animate-slide-up-delay-3">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-3 animate-slide-up animate-slide-up-delay-4">
              <Link
                to="/services#booking"
                className="inline-flex items-center gap-2 gradient-red-blue text-primary-foreground px-7 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-[1.06] transition-all duration-300 btn-glow btn-ripple glow-pulse-red"
              >
                {t.hero.book}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 glass-dark border border-white/20 text-primary-foreground px-7 py-3.5 rounded-full text-base hover:bg-white/20 hover:scale-[1.06] transition-all duration-300"
              >
                {t.hero.explore}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-white/70 text-xs tracking-widest uppercase">scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background" preserveAspectRatio="none">
            <path d="M0,60 L0,20 Q720,0 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats Ticker ── */}
      <section className="py-4 -mt-1 overflow-hidden bg-card border-y border-border/50">
        <div>
          <div className="flex w-max" style={{ animation: "tickerScroll 40s linear infinite" }}>
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

      {/* ── About Cards ── */}
      <section className="py-20 section-pattern">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection>
            <SectionTitle title={t.about.title} subtitle={t.about.sub} />
          </RevealSection>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {aboutCards.map((item, i) => (
              <div
                key={item.title}
                className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-border/60 card-hover group shimmer-border shimmer-sweep tilt-card"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ${item.color === "primary" ? "gradient-primary" : "gradient-royal"} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4 font-bold group-hover:text-royal transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-20 section-blue-tint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-royal/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <RevealSection>
            <SectionTitle title={t.stats.title} subtitle={t.stats.sub} />
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="space-y-4 bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-border/60 card-hover float-shadow glow-pulse-blue shimmer-sweep"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} isK={stat.isK} locale={locale} />
                <div className="text-base font-bold text-muted-foreground leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fields ── */}
      <section className="py-20 section-red-tint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-royal/8 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-royal/6 rounded-full blur-3xl animate-blob animation-delay-2000" />
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
                className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-7 text-center shadow-sm border border-border/60 shimmer-border group block overflow-hidden transition-all duration-500 hover:shadow-xl tilt-card gradient-border-animate"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal/0 via-royal/0 to-royal/0 group-hover:from-royal/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:bg-royal/10 transition-all duration-500 ease-out">
                    {field.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-snug mb-1.5 group-hover:text-royal transition-colors duration-300">{field.label}</h3>
                  <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{field.desc}</p>
                </div>
              </Link>
            ))}
          </StaggerGrid>
          <RevealSection className="text-center mt-12">
            <Link to="/goals" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 btn-glow group animate-breathe">
              {t.fields.btn}
              <svg className={`w-4 h-4 ${lang === "ar" ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── Foundation / Services ── */}
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
                    <div className="w-12 h-12 rounded-xl gradient-royal flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {s.icon}
                    </div>
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

      {/* ── Donation ── */}
      <section id="donations" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/5" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="bg-card/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl group">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-16 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-sm font-bold border border-royal/20">
                  <span className="w-2 h-2 rounded-full bg-royal animate-pulse" />
                  {t.donation.title}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                  {t.donation.sub}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  {t.donation.desc}
                </p>
                <div className="pt-4">
                  <Link
                    to="/donations"
                    className="inline-flex items-center gap-3 gradient-royal text-primary-foreground px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 group/btn"
                  >
                    <span>{t.donation.btn}</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] overflow-hidden">
                <img
                  src={donationBanner}
                  alt="Donation Banner"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/40 to-transparent lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
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
              <div
                key={partner.name}
                className="bg-card/70 backdrop-blur-md rounded-3xl p-6 text-center shadow-sm border border-border/50 card-hover group shimmer-border shimmer-sweep tilt-card"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500 float-up-down">
                  {partner.icon}
                </div>
                <p className="text-sm font-bold text-muted-foreground group-hover:text-royal transition-colors underline-grow">
                  {lang === "ar" ? partner.name : partner.nameEn}
                </p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Branches ── */}
      <Branches />

      {/* ── FAQ ── */}
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

/* ── FAQ Accordion ───────────────────────────────────── */
function FAQItem({ question, answer, lang }: { question: string; answer: string; lang: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-card/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${open ? "border-royal/40 shadow-lg" : "border-border/60 shadow-sm shimmer-border hover:shadow-md hover:border-royal/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-6 ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        <span className="font-bold text-sm" dir="auto">{question}</span>
        <svg className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-royal" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
