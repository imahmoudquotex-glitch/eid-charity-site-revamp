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
      {/* ── Hero Section (Premium Glass & Image Style) ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/donations_hero_bg_1776942911396.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-navy" />
        </div>

        {/* Floating Decorative Blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-[120px] animate-pulse z-0" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 glass-dark text-sm font-black tracking-widest text-primary-foreground/90 uppercase">
                <span className="w-2 h-2 rounded-full bg-royal animate-ping" />
                {t.donation.title}
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                {t.donation.sub}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed font-medium">
                {t.donation.desc}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  href="#methods"
                  className="gradient-royal text-white px-12 py-5 rounded-2xl text-xl font-black shadow-[0_20px_50px_rgba(65,105,225,0.4)] hover:shadow-[0_25px_60px_rgba(65,105,225,0.6)] hover:scale-105 transition-all duration-300"
                >
                  {t.donation.btn}
                </a>
                <Link
                  to="/contact?topic=donations"
                  className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-2xl text-xl font-black hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                >
                  <Smartphone className="w-5 h-5" />
                  {t.nav.contact}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-10 border-t border-white/10 max-w-md">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-royal/20 flex items-center justify-center text-xs text-white font-bold backdrop-blur-sm">
                      {i}+
                    </div>
                  ))}
                </div>
                <div className="text-white/60 text-sm font-bold">
                  <span className="text-white block text-lg">1,500+</span>
                  {lang === "ar" ? "متبرع وضعوا ثقتهم بنا" : "Donors trust us"}
                </div>
              </div>
            </div>

            {/* Right Side: Hero Glass Card (Impact Highlight) */}
            <div className="hidden lg:block relative group animate-fade-in animation-delay-500">
              <div className="absolute -inset-4 bg-royal/20 rounded-[3rem] blur-2xl group-hover:bg-royal/30 transition-all duration-700" />
              <div className="relative glass-dark p-10 rounded-[3rem] border border-white/10 shadow-3xl space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-royal/20 text-royal flex items-center justify-center">
                    <Zap className="w-8 h-8" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-black uppercase tracking-widest">
                    {lang === "ar" ? "تأثير فوري" : "Instant Impact"}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-white/60 font-bold uppercase tracking-widest text-xs">
                    {lang === "ar" ? "إجمالي الدعم هذا الشهر" : "Total Support This Month"}
                  </div>
                  <div className="text-5xl font-black text-white tracking-tighter">
                    $45,280.00
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">{lang === "ar" ? "الهدف الشهري" : "Monthly Goal"}</span>
                    <span className="text-royal font-black">85%</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-royal w-[85%] rounded-full shadow-[0_0_15px_rgba(65,105,225,0.5)]" />
                  </div>
                </div>

                <button className="w-full py-5 rounded-2xl bg-white text-navy font-black text-lg hover:bg-royal hover:text-white transition-all duration-300">
                  {lang === "ar" ? "شارك في تحقيق الهدف" : "Help reach the goal"}
                </button>
              </div>
            </div>
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

      {/* ── Impact Section (Premium Glass Style) ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/[0.02] dark:bg-white/[0.02]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {t.donation.impact.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-white dark:bg-card/50 p-12 rounded-[2.5rem] border border-royal/10 shadow-xl hover:shadow-2xl hover:border-royal/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden text-center"
              >
                {/* Decorative background icon */}
                <div className="absolute -right-4 -bottom-4 text-royal/5 group-hover:text-royal/10 transition-colors duration-500">
                  {idx === 0 && <Check className="w-32 h-32" />}
                  {idx === 1 && <Zap className="w-32 h-32" />}
                  {idx === 2 && <CreditCard className="w-32 h-32" />}
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-royal/10 text-royal mb-6 group-hover:bg-royal group-hover:text-white transition-all duration-500">
                    {idx === 0 && <Check className="w-8 h-8" />}
                    {idx === 1 && <Zap className="w-8 h-8" />}
                    {idx === 2 && <CreditCard className="w-8 h-8" />}
                  </div>
                  <div className="text-royal text-6xl font-black mb-3 tracking-tighter transition-transform duration-500">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground text-lg font-black uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </      {/* ── Methods Section (High-End Card Catalog) ── */}
      <section id="methods" className="py-32 relative overflow-hidden bg-navy/5 dark:bg-navy/20">
        <div className="absolute inset-0 section-pattern opacity-[0.03]" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest">
              {lang === "ar" ? "ساهم معنا" : "Contribute With Us"}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
              {lang === "ar" ? "طرق التبرع المتاحة" : "Available Donation Methods"}
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {lang === "ar" 
                ? "نوفر لك خيارات آمنة وسهلة لتصل تبرعاتك إلى مستحقيها بأسرع وقت ممكن." 
                : "We provide secure and easy options to ensure your donations reach those in need as quickly as possible."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.donation.methods.map((method, idx) => (
              <div 
                key={idx}
                className="group relative bg-white dark:bg-card/40 rounded-[3rem] p-10 border border-royal/5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(65,105,225,0.15)] hover:border-royal/30 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-royal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-24 h-24 rounded-3xl bg-royal/5 text-royal flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-500 shadow-inner">
                  {getIcon(method.icon)}
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className="text-3xl font-black text-foreground tracking-tight">{method.name}</h3>
                  <div className="h-1 w-12 bg-royal/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-royal transition-all duration-500" />
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {lang === "ar" 
                      ? "وسيلة آمنة ومعتمدة رسمياً للتحويل المباشر." 
                      : "A secure and officially approved method for direct transfer."}
                  </p>
                </div>

                <div className="w-full mt-auto space-y-6">
                  <div 
                    className="relative group/copy cursor-pointer"
                    onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                  >
                    <div className="bg-navy/[0.03] dark:bg-white/[0.03] rounded-2xl p-6 border border-royal/5 group-hover/copy:border-royal/30 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                          {lang === "ar" ? "رقم الحساب / التفاصيل" : "Account No. / Details"}
                        </span>
                        <Copy className="w-4 h-4 text-royal opacity-40 group-hover/copy:opacity-100 transition-opacity" />
                      </div>
                      <div className="font-mono text-xl font-black text-royal break-all tracking-widest" dir="ltr">
                        {method.detail}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      copiedId === `method-${idx}`
                        ? "bg-green-500 text-white shadow-xl shadow-green-500/30"
                        : "bg-royal text-white shadow-xl shadow-royal/20 hover:shadow-royal/40 hover:-translate-y-1"
                    }`}
                  >
                    {copiedId === `method-${idx}` ? (
                      <>
                        <Check className="w-6 h-6 stroke-[3]" />
                        <span>{lang === "ar" ? "تم النسخ" : "Copied"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-6 h-6" />
                        <span>{lang === "ar" ? "نسخ التفاصيل" : "Copy Details"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>"ar" ? "نسخ التفاصيل" : "Copy Details"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency Section (Premium Trust Style) ── */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal/[0.02] to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-royal/5 rounded-full blur-[100px]" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="bg-white dark:bg-card/40 rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-royal/10 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-12 lg:p-20 space-y-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-black uppercase tracking-widest">
                    <Check className="w-4 h-4" />
                    {lang === "ar" ? "شفافية مطلقة" : "Absolute Transparency"}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                    {lang === "ar" ? "أين تذهب تبرعاتك؟" : "Where do your donations go?"}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                    {lang === "ar" 
                      ? "نحن نؤمن بالشفافية الكاملة كأحد أركان عملنا. كل مساهمة تقوم بها يتم توثيقها وتوجيهها بدقة للمسار الصحيح."
                      : "We believe in full transparency as a cornerstone of our work. Every contribution you make is documented and directed precisely to the right path."}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {t.footer.donationItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-navy/5 dark:bg-white/5 border border-transparent hover:border-royal/20 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0 group-hover:bg-royal group-hover:text-white transition-colors">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-sm md:text-base font-bold text-foreground/80 pt-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stat & Trust Side */}
              <div className="relative bg-royal/[0.03] dark:bg-royal/[0.02] p-12 lg:p-20 flex flex-col items-center justify-center text-center overflow-hidden border-t lg:border-t-0 lg:border-l border-royal/10">
                {/* Visual Circle Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-[20px] border-royal/5 opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border-[1px] border-royal/20 border-dashed animate-spin-slow" />

                <div className="relative z-10 space-y-6">
                  <div className="relative inline-block">
                    <div className="text-7xl md:text-9xl font-black text-royal drop-shadow-[0_0_30px_rgba(65,105,225,0.3)]">
                      100%
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-black text-foreground">
                      {lang === "ar" ? "أمانة ومسؤولية" : "Trust & Responsibility"}
                    </div>
                    <p className="text-muted-foreground font-medium text-lg">
                      {lang === "ar" ? "من التبرعات تذهب مباشرة للمستحقين" : "Of donations go directly to those in need"}
                    </p>
                  </div>

                  <div className="pt-8">
                    {/* Registration Card / Badge */}
                    <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-3xl bg-white dark:bg-black/40 border border-royal/20 shadow-xl shadow-royal/10 relative group hover:scale-105 transition-transform duration-500">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-royal text-white text-[10px] font-black uppercase tracking-widest">
                        {lang === "ar" ? "مؤسسة رسمية" : "Official NGO"}
                      </div>
                      <div className="text-xs text-muted-foreground font-bold uppercase tracking-tighter opacity-60">
                        {lang === "ar" ? "رقم الإشهار الرسمي" : "Official Registration No."}
                      </div>
                      <div className="text-xl md:text-2xl font-black text-royal tracking-widest font-mono">
                        123456
                      </div>
                      <div className="text-[10px] text-muted-foreground font-medium">
                        {lang === "ar" 
                          ? "مؤسسة قلب الحياة للتنمية" 
                          : "Qalb El Hayah Foundation for Development"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA (Premium Glow Hub) ── */}
      <section className="py-32 relative">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative p-12 lg:p-24 rounded-[3.5rem] bg-navy dark:bg-card/40 border border-white/10 overflow-hidden text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
            {/* Animated Background Magic */}
            <div className="absolute inset-0 gradient-navy opacity-90" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse animation-delay-2000" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="relative z-10 space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 glass-dark text-white/80 text-sm font-bold tracking-[0.2em] uppercase mx-auto">
                <span className="w-2 h-2 rounded-full bg-royal animate-ping" />
                {lang === "ar" ? "نحن بانتظارك" : "We Are Waiting"}
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                {lang === "ar" ? "هل لديك استفسار آخر؟" : "Have another question?"}
              </h2>
              
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                {lang === "ar" 
                  ? "فريقنا المتخصص متاح دائماً للرد على كافة تساؤلاتكم حول آلية التبرع أو الحالات التي تحتاج لدعم عاجل."
                  : "Our specialized team is always available to answer all your questions about the donation process or cases needing urgent support."}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact?topic=donations"
                  className="group relative inline-flex items-center gap-4 bg-white text-navy px-14 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>{t.nav.contact}</span>
                  <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-all">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </Link>
                
                <a 
                  href={`https://wa.me/${t.footer.phone.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-white font-bold transition-colors border-b-2 border-white/10 hover:border-royal pb-1"
                >
                  {lang === "ar" ? "دردشة واتساب مباشرة" : "Direct WhatsApp Chat"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
