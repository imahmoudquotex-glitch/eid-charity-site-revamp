import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { RevealSection } from "@/components/RevealSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

export default function GoalsPage() {
  const { t, lang } = useLang();
  const locale = lang === "ar" ? "ar-EG" : "en-US";
  const g = t.goals;
  
  usePageMeta(g.metaTitle || g.title, g.metaDesc || g.sub);
  
  const [active, setActive] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>("all");

  const fields = g.items;
  const filteredFields = filter === "all" ? fields : fields.filter((_, i) => i === parseInt(filter));

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(var(--royal) / 0.12) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 glass-dark text-sm mb-6 text-primary-foreground/80">
            <span className="w-2 h-2 rounded-full animate-pulse bg-royal" />
            {g.badge}
          </div>
          <h1 className="text-4xl md:text-6xl text-glow-white mb-4">{g.title}</h1>
          <p className="text-lg text-primary-foreground/50">{g.sub}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection>
            <SectionTitle title={g.sectionTitle} subtitle={g.sectionSub} />
          </RevealSection>

          <RevealSection className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => { setFilter("all"); setActive(0); }}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${filter === "all" ? "gradient-royal text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:border-royal/30"}`}
              >
                {g.filterAll}
              </button>
              {fields.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => { setFilter(String(i)); setActive(filter === String(i) ? null : 0); }}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${filter === String(i) ? "gradient-royal text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:border-royal/30"}`}
                >
                  {f.icon} {f.title}
                </button>
              ))}
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-5">
            {filteredFields.map((field) => {
              const originalIndex = fields.indexOf(field);
              const isOpen = active === originalIndex || filter !== "all";
              const globalStart = fields.slice(0, originalIndex).reduce((sum, f) => sum + f.objectives.length, 0);
              return (
                <RevealSection key={field.title}>
                  <div
                    className={`bg-card card-3d rounded-2xl border transition-all duration-400 cursor-pointer ${isOpen ? "border-royal/40 shadow-lg ring-1 ring-royal/10" : "border-border shadow-sm"}`}
                    onClick={() => filter === "all" && setActive(isOpen ? null : originalIndex)}
                  >
                    <div className="p-6 card-3d-content">
                      <div className="flex items-center gap-4">
                        <div className={`w-[3.25rem] h-[3.25rem] rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-all duration-300 ${isOpen ? "gradient-primary scale-110 shadow-lg shadow-primary/30" : "bg-muted"}`}>
                          {field.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] text-muted-foreground uppercase tracking-wide mb-0.5 font-bold">{field.label}</div>
                          <h3 className="text-base font-extrabold leading-snug">{field.title}</h3>
                        </div>
                        {filter === "all" && (
                          <svg className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                      {isOpen && (
                        <div className="animate-fade-up mt-5 pt-5 border-t border-border">
                          <ul className="space-y-3">
                            {field.objectives.map((obj, j) => (
                              <li key={j} className="flex gap-3 items-start">
                                <span className="shrink-0 w-7 h-7 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center text-xs mt-0.5 font-bold">
                                  {(globalStart + j + 1).toLocaleString(locale)}
                                </span>
                                <p className="text-muted-foreground text-sm leading-relaxed pt-0.5">{obj}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
