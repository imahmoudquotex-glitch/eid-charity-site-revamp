import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import servicesImg from "@/assets/services-banner.jpg";
import { RevealSection, StaggerGrid } from "@/components/RevealSection";
import { toast } from "sonner";
import { buildWhatsAppUrl, WHATSAPP } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t, lang } = useLang();
  usePageMeta(t.services.metaTitle, t.services.metaDesc);
  const location = useLocation();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (location.hash === '#booking') {
      setTimeout(() => {
        const el = document.getElementById('booking');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('fullName') as HTMLInputElement)?.value?.trim() || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value?.trim() || '';
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value || '';
    const branch = (form.elements.namedItem('branch') as HTMLSelectElement)?.value || (lang === "ar" ? "لم يتم التحديد" : "Not specified");
    const date = (form.elements.namedItem('date') as HTMLInputElement)?.value || '';
    const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement)?.value?.trim() || '';

    if (!name || !phone) {
      toast.error(t.services.form.errorFull);
      return;
    }
    if (phone.length < 11) {
      toast.error(t.services.form.errorPhone);
      return;
    }

    setSending(true);
    const msg = [
      lang === "ar" ? "السلام عليكم، أريد حجز موعد في مؤسسة قلب الحياة للتنمية" : "Hello, I would like to book an appointment at Qalb El Hayah Foundation",
      `${t.services.form.name}: ${name}`,
      `${t.services.form.phone}: ${phone}`,
      `${t.services.form.service}: ${service}`,
      `${t.services.form.branch}: ${branch}`,
      date ? `${t.services.form.date}: ${date}` : `${t.services.form.date}: ${lang === "ar" ? "لم يتم التحديد" : "Not specified"}`,
      notes ? `${t.services.form.notes}: ${notes}` : `${t.services.form.notes}: ${lang === "ar" ? "لا يوجد" : "None"}`,
    ].filter(Boolean).join("\n");

    window.open(buildWhatsAppUrl(WHATSAPP.BOOKING, msg), "_blank", "noopener,noreferrer");
    toast.success(t.services.form.success);
    setTimeout(() => setSending(false), 3000);
  };

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <img
            src={servicesImg}
            alt={t.services.title}
            className="w-full h-full object-cover scale-105"
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-[120px] bg-royal/15" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 glass-dark text-sm font-bold mb-6 text-primary-foreground/80">
            <span className="w-2 h-2 rounded-full animate-pulse bg-royal" style={{ boxShadow: "0 0 10px hsl(225 70% 50% / 0.6)" }} />
            {t.services.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-primary-foreground">
            {t.services.title} <span className="text-glow-blue">{t.services.titleGlow}</span>
          </h1>
          <p className="text-lg max-w-lg mx-auto text-primary-foreground/50">{t.services.slogan}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection><SectionTitle title={t.services.sectionTitle} subtitle={t.services.sectionSub} /></RevealSection>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((s) => (
              <div key={s.title} className={`bg-card rounded-2xl p-7 shadow-sm border border-border card-hover group shimmer-border tilt-card ${lang === "ar" ? "text-right" : "text-left"}`}>
                <div className="w-14 h-14 rounded-2xl gradient-royal flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-lg font-black mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="py-20 section-blue-tint" id="booking">
        <div className="mx-auto max-w-3xl px-6">
          <RevealSection><SectionTitle title={t.services.bookingTitle} subtitle={t.services.bookingSub} /></RevealSection>
          <RevealSection type="reveal-scale">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 relative overflow-hidden gradient-border-animate">
              <div className="absolute top-0 left-0 right-0 h-1.5 gradient-red-blue" />
              <div className={`flex items-center gap-3 mb-8 ${lang === "ar" ? "flex-row" : "flex-row-reverse justify-end"}`}>
                <div className="w-12 h-12 rounded-2xl gradient-royal flex items-center justify-center text-xl">🏥</div>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <h3 className="font-black text-lg">{t.services.heroBadge}</h3>
                  <p className="text-muted-foreground text-xs">{lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}</p>
                </div>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <label className="block text-sm font-black mb-2.5">{t.services.form.name}</label>
                    <input type="text" name="fullName" required className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm" placeholder={t.services.form.namePlaceholder} />
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <label className="block text-sm font-black mb-2.5">{t.services.form.phone}</label>
                    <input type="tel" name="phone" required pattern="[0-9]{11}" className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm" placeholder={t.services.form.phonePlaceholder} dir="ltr" />
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <label className="block text-sm font-black mb-2.5">{t.services.form.service}</label>
                    <select name="service" className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm">
                      {t.services.form.serviceOptions.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <label className="block text-sm font-black mb-2.5">{t.services.form.branch}</label>
                    <select name="branch" className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm">
                      {t.services.form.branchOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                  </div>
                  <div className={`sm:col-span-2 ${lang === "ar" ? "text-right" : "text-left"}`}>
                    <label className="block text-sm font-black mb-2.5">{t.services.form.date}</label>
                    <input type="date" name="date" className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm" />
                  </div>
                </div>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <label className="block text-sm font-black mb-2.5">{t.services.form.notes}</label>
                  <textarea rows={3} name="notes" maxLength={300} className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm resize-none" placeholder={t.services.form.notesPlaceholder} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full gradient-red-blue text-primary-foreground py-4 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all btn-glow btn-ripple flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  {sending ? t.services.form.submitting : t.services.form.submit}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-border flex flex-col items-center text-center gap-3">
                <h3 className="text-lg font-black text-foreground">{t.services.quickContact}</h3>
                <button
                  onClick={() => window.open(buildWhatsAppUrl(WHATSAPP.BOOKING, lang === "ar" ? "السلام عليكم، أود الاستفسار عن:" : "Hello, I would like to inquire about:"), "_blank", "noopener,noreferrer")}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-2xl font-black transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20 w-full justify-center cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  {t.services.quickBtn}
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
