import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/about-hero.jpg";
import { RevealSection, StaggerGrid } from "@/components/RevealSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t, lang } = useLang();
  const a = t.about;

  usePageMeta(a.title, a.sub);

  const cardItems = [
    { title: a.vision, icon: "🌟", desc: a.visionDesc },
    { title: a.mission, icon: "💡", desc: a.missionDesc },
    { title: a.values, icon: "❤️", desc: a.valuesDesc },
  ];

  const stats = [
    { num: lang === "ar" ? "+٢٥٠" : "+250", label: a.statVolunteer },
    { num: lang === "ar" ? "+٤٠" : "+40", label: a.statSpecialist },
    { num: lang === "ar" ? "٨" : "8", label: a.statFields },
    { num: lang === "ar" ? "+٦" : "+6", label: a.statExperience },
  ];

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={a.title} className="w-full h-full object-cover" width={1920} height={1080} loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full blur-[120px] bg-primary/15" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] bg-royal/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 glass-dark text-sm mb-6 text-primary-foreground/80">
            <span className="w-2 h-2 rounded-full animate-pulse bg-royal" />
            {a.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl text-glow-white mb-4 font-bold">{a.title}</h1>
          <p className="text-lg text-primary-foreground/60">{a.slogan}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <RevealSection><SectionTitle title={a.storyTitle} /></RevealSection>
          <RevealSection>
            <div className={`space-y-6 text-muted-foreground leading-[2] ${lang === "ar" ? "text-right" : "text-left"}`}>
              {a.storyParts.map((part, i) => (
                <p key={i} className={i === 0 ? "text-lg" : ""}>{part}</p>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="py-20 section-warm-tint overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {cardItems.map((item) => (
              <div key={item.title} className={`bg-card rounded-2xl p-8 shadow-sm border border-border text-center card-hover shimmer-border tilt-card ${lang === "ar" ? "text-right" : "text-left"}`}>
                <div className="text-4xl mb-5 flex justify-center">{item.icon}</div>
                <h3 className="text-xl text-royal mb-4 font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <RevealSection><SectionTitle title={a.achievementsTitle} /></RevealSection>
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border card-hover shimmer-border float-shadow">
                <div className="text-3xl font-bold text-royal mb-2 counter-glow">{s.num}</div>
                <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
