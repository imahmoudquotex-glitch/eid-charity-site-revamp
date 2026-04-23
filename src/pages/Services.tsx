import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import servicesImg from "@/assets/services-banner.jpg";
import { RevealSection } from "@/components/RevealSection";
import CustomDatePicker from "@/components/CustomDatePicker";
import { toast } from "sonner";
import { buildWhatsAppUrl, WHATSAPP } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

/* ── SVG icons for services ── */
const ServiceIcons: Record<string, JSX.Element> = {
  "🧘": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>,
  "🗣️": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>,
  "🧠": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>,
  "🤝": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>,
  "👨‍👩‍👧‍👦": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>,
  "🌈": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/></svg>,
};

/* Bento span sizes for 6 services */
const bentoSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
];

export default function ServicesPage() {
  const { t, lang } = useLang();
  usePageMeta(t.services.metaTitle, t.services.metaDesc);
  const location = useLocation();
  const [sending, setSending] = useState(false);
  const [dateVal, setDateVal] = useState("");

  useEffect(() => {
    if (location.hash === "#booking") {
      setTimeout(() => {
        const el = document.getElementById("booking");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location]);

  const todayIso = new Date().toISOString().slice(0, 10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("fullName") as HTMLInputElement)?.value?.trim() || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value?.trim() || "";
    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value || "";
    const branch = (form.elements.namedItem("branch") as HTMLSelectElement)?.value || (lang === "ar" ? "لم يتم التحديد" : "Not specified");
    const notes = (form.elements.namedItem("notes") as HTMLTextAreaElement)?.value?.trim() || "";

    if (!name || !phone) { toast.error(t.services.form.errorFull); return; }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 11) { toast.error(t.services.form.errorPhone); return; }

    setSending(true);
    const msg = [
      lang === "ar" ? "السلام عليكم، أريد حجز موعد في مؤسسة قلب الحياة للتنمية" : "Hello, I would like to book an appointment at Qalb El Hayah Foundation",
      `${t.services.form.name}: ${name}`,
      `${t.services.form.phone}: ${phone}`,
      `${t.services.form.service}: ${service}`,
      `${t.services.form.branch}: ${branch}`,
      dateVal ? `${t.services.form.date}: ${dateVal}` : `${t.services.form.date}: ${lang === "ar" ? "لم يتم التحديد" : "Not specified"}`,
      notes ? `${t.services.form.notes}: ${notes}` : "",
    ].filter(Boolean).join("\n");

    window.open(buildWhatsAppUrl(WHATSAPP.BOOKING, msg), "_blank", "noopener,noreferrer");
    toast.success(t.services.form.success);
    setTimeout(() => setSending(false), 3000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <img src={servicesImg} alt={t.services.title} className="w-full h-full object-cover scale-105" width={1280} height={720} fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-[120px] bg-royal/15 animate-blob" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 blur-[120px] animate-blob animation-delay-2000" />
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

      {/* ── Bento Grid ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <RevealSection><SectionTitle title={t.services.sectionTitle} subtitle={t.services.sectionSub} /></RevealSection>
          <div className="grid md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
            {t.services.items.map((s, i) => (
              <div
                key={s.title}
                className={`relative group bg-card rounded-3xl p-6 border border-border/60 overflow-hidden card-hover shimmer-border transition-all duration-500 ${bentoSpans[i] || ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Gradient accent top */}
                <div className="absolute top-0 left-0 right-0 h-1 gradient-red-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
                {/* Glow blob */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-royal/10 rounded-full blur-2xl group-hover:bg-royal/25 transition-colors duration-500" />

                <div className={`relative z-10 flex flex-col h-full ${lang === "ar" ? "text-right items-end" : "text-left items-start"}`}>
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 border border-royal/20 flex items-center justify-center text-royal mb-4 group-hover:bg-royal group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    {ServiceIcons[s.icon] || <span className="text-2xl">{s.icon}</span>}
                  </div>
                  <h3 className={`font-black mb-2 group-hover:text-royal transition-colors duration-300 ${i === 0 ? "text-xl" : "text-base"}`}>{s.title}</h3>
                  <p className={`text-muted-foreground leading-relaxed ${i === 0 ? "text-sm" : "text-xs"}`}>{s.desc}</p>
                  {/* Large card CTA */}
                  {i === 0 && (
                    <Link to="/services#booking" className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-bold text-royal hover:gap-2 transition-all duration-300">
                      {lang === "ar" ? "احجز الآن ←" : "Book Now →"}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section className="py-20 section-blue-tint" id="booking">
        <div className="mx-auto max-w-3xl px-6">
          <RevealSection><SectionTitle title={t.services.bookingTitle} subtitle={t.services.bookingSub} /></RevealSection>
          <RevealSection type="reveal-scale">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 relative overflow-hidden gradient-border-animate">
              <div className="absolute top-0 left-0 right-0 h-1.5 gradient-red-blue" />
              <div className={`flex items-center gap-3 mb-8 ${lang === "ar" ? "flex-row" : "flex-row-reverse justify-end"}`}>
                <div className="w-12 h-12 rounded-2xl gradient-royal flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <h3 className="font-black text-lg">{t.services.heroBadge}</h3>
                  <p className="text-muted-foreground text-xs">{lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: t.services.form.name, name: "fullName", type: "text", placeholder: t.services.form.namePlaceholder, required: true },
                    { label: t.services.form.phone, name: "phone", type: "tel", placeholder: t.services.form.phonePlaceholder, required: true, dir: "ltr" },
                  ].map(f => (
                    <div key={f.name} className={lang === "ar" ? "text-right" : "text-left"}>
                      <label className="block text-sm font-black mb-2.5">{f.label}</label>
                      <input type={f.type} name={f.name} required={f.required} dir={f.dir}
                        className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm"
                        placeholder={f.placeholder} />
                    </div>
                  ))}
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
                    <CustomDatePicker min={new Date().toISOString().slice(0, 10)} value={dateVal} onChange={setDateVal} />
                  </div>
                </div>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <label className="block text-sm font-black mb-2.5">{t.services.form.notes}</label>
                  <textarea rows={3} name="notes" maxLength={300}
                    className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm resize-none"
                    placeholder={t.services.form.notesPlaceholder} />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full gradient-red-blue text-primary-foreground py-4 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all btn-glow btn-ripple flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  {sending ? t.services.form.submitting : t.services.form.submit}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-border flex flex-col items-center text-center gap-3">
                <h3 className="text-lg font-black text-foreground">{t.services.quickContact}</h3>
                <button onClick={() => window.open(buildWhatsAppUrl(WHATSAPP.BOOKING, lang === "ar" ? "السلام عليكم، أود الاستفسار عن:" : "Hello, I would like to inquire about:"), "_blank", "noopener,noreferrer")}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-2xl font-black transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20 w-full justify-center">
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
