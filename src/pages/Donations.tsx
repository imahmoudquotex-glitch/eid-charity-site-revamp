import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

import { Check, Copy, CreditCard, Landmark, Smartphone, Zap } from "lucide-react";
import { useState } from "react";

export default function Donations() {
  const { t, lang } = useLang();
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [productQuantities, setProductQuantities] = useState<Record<number, number>>({});
  const [caseAmounts, setCaseAmounts] = useState<Record<number, string>>({});

  const getProductMessage = (productTitle: string, idx: number) => {
    const q = productQuantities[idx] || 1;
    return lang === 'ar' 
      ? `مرحباً، أريد التبرع بـ: ${productTitle} (العدد: ${q})` 
      : `Hello, I want to donate for: ${productTitle} (Quantity: ${q})`;
  };

  const getCaseMessage = (caseTitle: string, idx: number) => {
    const amount = caseAmounts[idx];
    return lang === 'ar' 
      ? `مرحباً، أريد التبرع لحالة: ${caseTitle}${amount ? ` بمبلغ ${amount} جنيه` : ''}` 
      : `Hello, I want to donate for case: ${caseTitle}${amount ? ` amount ${amount} EGP` : ''}`;
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: t.donation.copySuccessTitle,
      description: t.donation.copySuccessDesc,
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
      {/* ── Hero ── */}
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
          <p className="text-lg max-w-lg mx-auto text-primary-foreground/50">{t.donation.desc}</p>
          <div className="flex flex-wrap gap-4 pt-8 justify-center">
            <a
              href="#methods"
              className="gradient-royal text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t.donation.btn}
            </a>
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
              <span>{t.donation.ongoingCharity}</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrated Donations Section (Products & Methods) ── */}
      <section id="methods" className="py-32 relative overflow-hidden bg-navy/5 dark:bg-navy/20">
        <div className="absolute inset-0 section-pattern opacity-[0.03]" />
        
        {/* Decorative Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-royal/10 rounded-full blur-[120px] animate-blob pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-sm font-black uppercase tracking-widest border border-royal/20 shadow-sm">
              <Zap className="w-4 h-4 animate-pulse" />
              {t.donation.contributeTitle}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight drop-shadow-sm">
              {t.donation.methodsTitle}
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {t.donation.methodsDesc}
            </p>
          </div>

          {/* Products Grid (The core of the donation items) */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-black text-foreground flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-royal"></span>
                {t.donation.productsTitle}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {t.donation.products.map((product, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-white dark:bg-card/60 rounded-[2.5rem] p-8 border border-royal/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-20px_rgba(65,105,225,0.25)] hover:border-royal/40 hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col justify-between backdrop-blur-sm"
                  style={{ animationDelay: `${(idx % 4) * 100}ms` }}
                >
                  {/* Decorative blob */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-royal/10 to-transparent rounded-full blur-3xl group-hover:scale-150 group-hover:bg-royal/20 transition-all duration-700 pointer-events-none" />
                  
                  <div>
                    <div className="text-7xl mb-8 relative z-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 drop-shadow-xl inline-block">
                      {product.icon}
                    </div>
                    
                    <h3 className="text-2xl font-black text-foreground mb-4 relative z-10 tracking-tight group-hover:text-royal transition-colors duration-300">{product.title}</h3>
                    
                    <div className="inline-flex items-center gap-2 bg-navy/5 dark:bg-white/5 text-royal font-black text-lg mb-5 px-5 py-2 rounded-2xl relative z-10 border border-royal/10 group-hover:bg-royal/10 transition-colors shadow-sm">
                      <Landmark className="w-5 h-5" />
                      {product.price}
                    </div>
                    
                    <p className="text-muted-foreground font-medium leading-relaxed mb-6 relative z-10 text-sm md:text-base flex-grow">
                      {product.desc}
                    </p>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <span className="text-sm font-bold text-foreground">{t.donation.quantityLabel}:</span>
                      <div className="flex items-center gap-3 bg-navy/5 dark:bg-white/5 rounded-xl px-2 py-1 border border-royal/10">
                        <button 
                          onClick={() => setProductQuantities(prev => ({...prev, [idx]: Math.max(1, (prev[idx] || 1) - 1)}))}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-card hover:shadow-sm text-foreground transition-all"
                        >
                          -
                        </button>
                        <span className="font-bold w-6 text-center">{productQuantities[idx] || 1}</span>
                        <button 
                          onClick={() => setProductQuantities(prev => ({...prev, [idx]: (prev[idx] || 1) + 1}))}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-card hover:shadow-sm text-foreground transition-all"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={`https://wa.me/${t.footer.phone.replace(/\s/g, '')}?text=${encodeURIComponent(getProductMessage(product.title, idx))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl font-black text-lg transition-all duration-500 flex items-center justify-center gap-3 bg-navy/5 text-foreground hover:bg-royal hover:text-white shadow-none hover:shadow-xl hover:shadow-royal/30 relative z-10 group/btn border border-transparent hover:border-royal/50"
                  >
                    <span>{t.donation.productsBtn}</span>
                    <div className="w-8 h-8 rounded-full bg-black/5 group-hover/btn:bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-all duration-300">
                      <Smartphone className="w-4 h-4 fill-current" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Humanitarian Cases Section ── */}
      <section id="cases" className="py-32 relative overflow-hidden bg-white dark:bg-card">
        <div className="absolute inset-0 bg-navy/[0.01] dark:bg-white/[0.01]" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-sm font-black uppercase tracking-widest border border-royal/20 shadow-sm">
              <Landmark className="w-4 h-4 animate-pulse" />
              {t.donation.casesTitle}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight drop-shadow-sm">
              {t.donation.casesSub}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.donation.cases.map((c, idx) => {
              const progress = c.goal > 0 ? Math.min(100, Math.round((c.collected / c.goal) * 100)) : 0;
              return (
                <div 
                  key={`case-${idx}`}
                  className="group bg-white dark:bg-card/60 rounded-[2.5rem] border border-royal/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-20px_rgba(65,105,225,0.25)] hover:border-royal/40 transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-sm"
                >
                  <div className="relative h-56 overflow-hidden bg-navy/5">
                    <div className="absolute inset-0 gradient-royal flex items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-700">
                      <h3 className="text-white font-black text-2xl drop-shadow-md leading-snug">{c.title}</h3>
                    </div>
                    
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6">
                      <div className="flex justify-between items-center text-white text-sm font-bold mb-3">
                        <span className="bg-green-500/90 px-3 py-1 rounded-full text-xs">{progress}%</span>
                        <span dir="ltr" className="text-white/90 drop-shadow-md">
                          {c.collected.toLocaleString()} / {c.goal.toLocaleString()} {lang === 'ar' ? 'جنيه' : 'EGP'}
                        </span>
                      </div>
                      <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                        <div className="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow relative">
                    <h3 className="text-xl font-black text-foreground mb-3 tracking-tight group-hover:text-royal transition-colors">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                      {c.desc}
                    </p>

                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="relative flex-1">
                          <input 
                            type="number"
                            placeholder={t.donation.donateAmountLabel}
                            className="w-full bg-navy/5 dark:bg-white/5 border border-royal/10 rounded-2xl px-5 py-4 text-base font-bold focus:outline-none focus:border-royal/50 focus:bg-transparent transition-colors placeholder:text-muted-foreground/50"
                            value={caseAmounts[idx] || ""}
                            onChange={(e) => setCaseAmounts(prev => ({...prev, [idx]: e.target.value}))}
                          />
                        </div>
                        <span className="font-bold text-royal bg-royal/10 px-4 py-4 rounded-2xl whitespace-nowrap text-sm border border-royal/20">
                          {lang === 'ar' ? 'جنيه' : 'EGP'}
                        </span>
                      </div>
                      
                      <a
                        href={`https://wa.me/${t.footer.phone.replace(/\s/g, '')}?text=${encodeURIComponent(getCaseMessage(c.title, idx))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-2 bg-royal text-white shadow-xl shadow-royal/20 hover:shadow-royal/40 hover:-translate-y-1"
                      >
                        {t.donation.productsBtn}
                        <Landmark className="w-5 h-5 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── General Payment Methods (Bank, Fawry, Vodafone Cash) ── */}
      <section id="payment-methods" className="py-32 relative overflow-hidden bg-navy/5 dark:bg-navy/20">
        <div className="absolute inset-0 section-pattern opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-royal/5 to-transparent rounded-[4rem] blur-2xl pointer-events-none" />
            <div className="relative z-10 bg-white/50 dark:bg-card/20 backdrop-blur-xl border border-royal/10 rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-foreground tracking-tight">{lang === 'ar' ? 'طرق التبرع المباشرة (حسابات بنكية ومحافظ)' : 'Direct Donation Methods (Banks & Wallets)'}</h3>
                <p className="text-muted-foreground mt-4 text-lg">{lang === 'ar' ? 'يمكنك أيضاً التبرع بأي مبلغ مفتوح عبر القنوات الرسمية التالية' : 'You can also donate any open amount via the following official channels'}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {t.donation.methods.map((method, idx) => (
                  <div 
                    key={`method-${idx}`}
                    className="group bg-white dark:bg-card rounded-[2.5rem] p-8 border border-royal/5 hover:border-royal/30 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-royal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-20 h-20 rounded-3xl bg-navy/5 text-royal flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-500 shadow-inner">
                      {getIcon(method.icon)}
                    </div>

                    <div className="space-y-3 mb-8 w-full">
                      <h4 className="text-2xl font-black text-foreground tracking-tight">{method.name}</h4>
                      <p className="text-muted-foreground font-medium text-sm">
                        {t.donation.methodNotice}
                      </p>
                    </div>

                    <div className="w-full mt-auto space-y-4">
                      <div 
                        className="bg-navy/[0.03] dark:bg-white/[0.03] rounded-2xl p-4 border border-royal/5 transition-all cursor-pointer group/copy hover:border-royal/30 hover:bg-royal/5"
                        onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                            {t.donation.accountDetails}
                          </span>
                          <Copy className="w-4 h-4 text-royal opacity-40 group-hover/copy:opacity-100 transition-opacity" />
                        </div>
                        <div className="font-mono text-lg font-black text-royal break-all tracking-widest" dir="ltr">
                          {method.detail}
                        </div>
                      </div>

                      <button
                        onClick={() => copyToClipboard(method.detail, `method-${idx}`)}
                        className={`w-full py-4 rounded-xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                          copiedId === `method-${idx}`
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                            : "bg-navy/5 text-foreground hover:bg-royal hover:text-white"
                        }`}
                      >
                        {copiedId === `method-${idx}` ? (
                          <>
                            <Check className="w-5 h-5 stroke-[3]" />
                            <span>{t.donation.copiedBtn}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-5 h-5" />
                            <span>{t.donation.copyBtn}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                    {t.donation.transparencyTitle}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                    {t.donation.whereGoTitle}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                    {t.donation.transparencyDesc}
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
                      {t.donation.transparencyPercent}
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-black text-foreground">
                      {t.donation.trustTitle}
                    </div>
                    <p className="text-muted-foreground font-medium text-lg">
                      {t.donation.trustSub}
                    </p>
                  </div>

                  <div className="pt-8">
                    {/* Registration Card / Badge */}
                    <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-3xl bg-white dark:bg-black/40 border border-royal/20 shadow-xl shadow-royal/10 relative group hover:scale-105 transition-transform duration-500">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-royal text-white text-[10px] font-black uppercase tracking-widest">
                        {t.donation.officialNGO}
                      </div>
                      <div className="text-xs text-muted-foreground font-bold uppercase tracking-tighter opacity-60">
                        {t.donation.regNo}
                      </div>
                      <div className="text-xl md:text-2xl font-black text-royal tracking-widest font-mono">
                        {t.donation.regNoVal}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-medium">
                        {t.donation.foundationName}
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
                {t.donation.waitingTitle}
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                {t.donation.haveQuestion}
              </h2>
              
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                {t.donation.waitingDesc}
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
                  {t.donation.directWhatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
