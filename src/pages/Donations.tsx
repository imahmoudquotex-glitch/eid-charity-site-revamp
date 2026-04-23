import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import donationBanner from "@/assets/donation-banner.png";
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
    <div className="min-h-screen pt-20">
      {/* ── Hero Section ── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={donationBanner}
            alt="Donation Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-sm font-black border border-royal/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-royal animate-pulse" />
              {t.donation.title}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tight animate-slide-up">
              {t.donation.sub}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up delay-100">
              {t.donation.desc}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
              <a
                href="#methods"
                className="gradient-royal text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {t.donation.btn}
              </a>
              <Link
                to="/contact?topic=donations"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                {t.nav.contact}
              </Link>
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

      {/* ── Methods Section ── */}
      <section id="methods" className="py-24 relative overflow-hidden">
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

          <div className="grid md:grid-cols-3 gap-8">
            {t.donation.methods.map((method, idx) => (
              <div 
                key={idx}
                className="glass-card p-8 rounded-[2.5rem] border border-royal/10 hover:border-royal/30 transition-all duration-500 group relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-royal/10 flex items-center justify-center text-royal mb-6 group-hover:scale-110 transition-transform duration-500">
                  {getIcon(method.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-4">{method.name}</h3>
                <div className="bg-background/50 rounded-xl p-4 mb-6 border border-border/50 break-all font-mono text-sm">
                  {method.detail}
                </div>
                <button
                  onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300 ${
                    copiedId === `method-${idx}`
                      ? "bg-green-500 text-white"
                      : "bg-royal text-white hover:bg-royal/90 shadow-md"
                  }`}
                >
                  {copiedId === `method-${idx}` ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{lang === "ar" ? "تم النسخ" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{lang === "ar" ? "نسخ التفاصيل" : "Copy Details"}</span>
                    </>
                  )}
                </button>
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
