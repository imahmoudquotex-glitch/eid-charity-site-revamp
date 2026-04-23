import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

import { Check, Copy, CreditCard, Landmark, Smartphone, Zap } from "lucide-react";
import { useState } from "react";

export default function Donations() {
  const { t, lang } = useLang();
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: lang === "ar" ? "تم النسخ!" : "Copied!",
      description: lang === "ar" ? "تم نسخ التفاصيل إلى الحافظة." : "Details copied to clipboard.",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "🏦": return <Landmark className="w-8 h-8" />;
      case "📱": return <Smartphone className="w-8 h-8" />;
      case "⚡": return <Zap className="w-8 h-8" />;
      default: return <CreditCard className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* ── Hero Section (Standard Style) ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-[100px] bg-royal/15 animate-blob" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-[100px] bg-primary/10 animate-blob animation-delay-2000" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 glass-dark text-sm font-bold mb-6 text-primary-foreground/80">
            <span className="w-2 h-2 rounded-full animate-pulse bg-royal" />
            {t.donation.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-primary-foreground">
            {t.donation.sub}
          </h1>
          <p className="text-lg max-w-lg mx-auto text-primary-foreground/50 mb-8">{t.donation.desc}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#methods"
              className="gradient-royal text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t.donation.btn}
            </a>
            <Link
              to="/contact?topic=donations"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote Section (Premium Glowing Style) ── */}
      <section className="py-28 relative overflow-hidden bg-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 section-pattern" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-royal/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-royal/20 to-transparent" />
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-royal/5 rounded-full blur-[80px] animate-blob" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-blob animation-delay-2000" />

        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Top Divider */}
            <div className="flex items-center gap-4 w-full max-w-xs">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-royal/30" />
              <div className="w-2 h-2 rounded-full bg-royal/40" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-royal/30" />
            </div>

            {/* The Quote */}
            <div className="relative group">
              <span className="absolute -top-12 -right-8 text-8xl text-royal/10 font-serif select-none">"</span>
              <h2 className="text-4xl md:text-7xl font-black text-royal leading-[1.3] md:leading-[1.4] tracking-tight transition-all duration-700 hover:scale-[1.02] cursor-default font-display drop-shadow-[0_0_15px_rgba(65,105,225,0.3)]">
                <span className="relative inline-block">
                  {t.donation.quote}
                  {/* Intense Glow Layer */}
                  <span className="absolute inset-0 text-royal blur-xl opacity-40 select-none pointer-events-none animate-pulse">
                    {t.donation.quote}
                  </span>
                </span>
              </h2>
              <span className="absolute -bottom-16 -left-8 text-8xl text-royal/10 font-serif select-none">"</span>
            </div>

            {/* Bottom Divider */}
            <div className="flex items-center gap-4 w-full max-w-xs pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-royal/30" />
              <div className="w-2 h-2 rounded-full bg-royal/40" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-royal/30" />
            </div>
            
            {/* Sub-text decoration */}
            <div className="flex items-center gap-2 text-royal/40 font-bold tracking-[0.2em] text-xs uppercase">
              <span className="w-8 h-px bg-current" />
              <span>{lang === "ar" ? "صدقة جارية" : "Ongoing Charity"}</span>
              <span className="w-8 h-px bg-current" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Section ── */}
      <section className="py-24 bg-navy/5 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {t.donation.impact.map((item, idx) => (
              <div 
                key={idx}
                className="bg-card p-10 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-royal text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.value}
                </div>
                <div className="text-muted-foreground text-lg font-bold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methods Section (Product Catalog Style) ── */}
      <section id="methods" className="py-24 relative overflow-hidden bg-navy/5 dark:bg-black/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              {lang === "ar" ? "طرق التبرع المتاحة" : "Available Donation Methods"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {lang === "ar" 
                ? "اختر الوسيلة التي تناسبك وساهم في استمرارية أعمالنا" 
                : "Choose the method that suits you best and contribute to our work"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {t.donation.methods.map((method, idx) => (
              <div 
                key={idx}
                className="relative group bg-white dark:bg-card/50 rounded-[2rem] p-8 lg:p-10 border border-border shadow-lg hover:shadow-2xl hover:border-royal/50 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Top Accent Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal/40 via-royal to-royal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-royal/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-royal/10 text-royal flex items-center justify-center group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-500 shadow-sm">
                    {getIcon(method.icon)}
                  </div>
                  {/* Badge for the first item */}
                  {idx === 0 && (
                    <span className="px-4 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider">
                      {lang === "ar" ? "الأكثر استخداماً" : "Most Popular"}
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-3 text-foreground tracking-tight">{method.name}</h3>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {lang === "ar" 
                      ? "وسيلة آمنة ومباشرة لدعم الحالات وتوفير الرعاية اللازمة للأطفال." 
                      : "A secure and direct way to support cases and provide necessary care."}
                  </p>
                </div>

                <div className="mt-auto relative z-10">
                  {/* The "Price / Account" Box */}
                  <div 
                    className="bg-navy/5 dark:bg-black/20 rounded-2xl p-5 mb-6 border border-black/5 dark:border-white/5 relative group/copy cursor-pointer hover:bg-navy/10 dark:hover:bg-black/30 transition-colors"
                    onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                  >
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-3 flex items-center justify-between">
                      <span>{lang === "ar" ? "تفاصيل الحساب" : "Account Details"}</span>
                      <Copy className="w-4 h-4 opacity-40 group-hover/copy:opacity-100 group-hover/copy:text-royal transition-all" />
                    </div>
                    <div className="font-mono text-lg lg:text-xl font-bold text-foreground break-all tracking-tight" dir="ltr">
                      {method.detail}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all duration-300 ${
                      copiedId === `method-${idx}`
                        ? "bg-green-500 text-white shadow-lg shadow-green-500/25 -translate-y-1"
                        : "bg-royal/10 text-royal hover:bg-royal hover:text-white shadow-sm hover:shadow-xl hover:shadow-royal/25 hover:-translate-y-1"
                    }`}
                  >
                    {copiedId === `method-${idx}` ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>{lang === "ar" ? "تم النسخ بنجاح" : "Copied Successfully"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>{lang === "ar" ? "نسخ التفاصيل" : "Copy Details"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency Section ── */}
      <section className="py-24 section-warm-tint">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-card rounded-[3rem] overflow-hidden shadow-2xl border border-border/50">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 space-y-8">
                <h2 className="text-4xl font-black text-foreground">
                  {lang === "ar" ? "أين تذهب تبرعاتك؟" : "Where do your donations go?"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {lang === "ar" 
                    ? "نحن نؤمن بالشفافية الكاملة. كل قرش تتبرع به يوجه مباشرة لدعم الأطفال وتطوير المركز."
                    : "We believe in full transparency. Every penny you donate goes directly to supporting children and developing the center."}
                </p>
                <ul className="space-y-4">
                  {t.footer.donationItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-lg font-bold">
                      <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-royal/5 p-12 lg:p-20 flex flex-col justify-center text-center space-y-6">
                <div className="text-6xl font-black text-royal mb-2">100%</div>
                <div className="text-xl font-bold">
                  {lang === "ar" ? "من التبرعات تذهب للمستحقين" : "Of donations go to those in need"}
                </div>
                <div className="h-px bg-border/50 w-24 mx-auto" />
                <p className="text-muted-foreground italic">
                  {lang === "ar" 
                    ? "مؤسسة قلب الحياة للتنمية مشهرة برقم 123456" 
                    : "Qalb El Hayah Foundation is registered under No. 123456"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">
            {lang === "ar" ? "هل لديك استفسار آخر؟" : "Have another question?"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {lang === "ar" 
              ? "فريقنا متاح دائماً للرد على استفساراتكم حول طرق التبرع أو الحالات التي ندعمها."
              : "Our team is always available to answer your questions about donation methods or the cases we support."}
          </p>
          <div className="pt-4">
            <Link
              to="/contact?topic=donations"
              className="inline-flex items-center gap-3 gradient-royal text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>{t.nav.contact}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
