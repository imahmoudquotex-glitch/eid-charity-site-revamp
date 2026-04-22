import SectionTitle from "@/components/SectionTitle";
import { RevealSection } from "@/components/RevealSection";
import Branches from "@/components/Branches";
import { useState } from "react";
import { buildWhatsAppUrl, WHATSAPP, SOCIAL } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLang } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t, lang } = useLang();
  usePageMeta(t.contact.metaTitle, t.contact.metaDesc);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('fullName') as HTMLInputElement)?.value?.trim() || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value?.trim() || '';
    const topic = (form.elements.namedItem('topic') as HTMLSelectElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value?.trim() || '';
    if (!name || !message) return;

    setSending(true);
    const wa = [
      lang === "ar" ? "السلام عليكم، أريد التواصل مع مؤسسة قلب الحياة للتنمية" : "Hello, I would like to contact Qalb El Hayah Foundation",
      `${t.contact.form.name}: ${name}`,
      `${t.contact.form.phone}: ${phone}`,
      `${t.contact.form.topic}: ${topic}`,
      `\n${t.contact.form.message}:\n${message}`,
    ].filter(Boolean).join("\n");

    window.open(buildWhatsAppUrl(WHATSAPP.BOOKING, wa), "_blank", "noopener,noreferrer");
    setTimeout(() => setSending(false), 3000);
  };

  const contactInfo = [
    { icon: "📱", title: t.contact.info.booking, value: "01080036532", link: buildWhatsAppUrl(WHATSAPP.BOOKING) },
    { icon: "📞", title: t.contact.info.complaints, value: "01080036533", link: buildWhatsAppUrl(WHATSAPP.COMPLAINTS) },
    { icon: "⏰", title: t.contact.info.hours, value: t.contact.info.hoursVal, link: "" },
  ];

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-[100px] bg-royal/15" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-[100px] bg-primary/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 glass-dark text-sm font-bold mb-6 text-primary-foreground/80">
            <span className="w-2 h-2 rounded-full animate-pulse bg-royal" />
            {t.contact.heroBadge}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-primary-foreground">
            {t.contact.title} <span className="text-glow-blue">{t.contact.titleGlow}</span>
          </h1>
          <p className="text-lg max-w-lg mx-auto text-primary-foreground/50">{t.contact.slogan}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <RevealSection><SectionTitle title={t.contact.formTitle} /></RevealSection>
              <RevealSection type="reveal-scale">
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border relative overflow-hidden gradient-border-animate">
                  <div className="absolute top-0 left-0 right-0 h-1.5 gradient-red-blue" />
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-black mb-2.5">{t.contact.form.name}</label>
                        <input type="text" name="fullName" required className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm" placeholder={t.contact.form.namePlaceholder} />
                      </div>
                      <div>
                        <label className="block text-sm font-black mb-2.5">{t.contact.form.phone}</label>
                        <input type="tel" name="phone" pattern="[0-9]{11}" className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm" placeholder={t.contact.form.phonePlaceholder} dir="ltr" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-black mb-2.5">{t.contact.form.topic}</label>
                      <select name="topic" className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm">
                        {t.contact.form.topicOptions.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-black mb-2.5">{t.contact.form.message}</label>
                      <textarea name="message" rows={5} required maxLength={500} className="w-full rounded-2xl border border-input bg-background px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-all shadow-sm resize-none" placeholder={t.contact.form.messagePlaceholder} />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full gradient-red-blue text-primary-foreground py-4 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all btn-glow btn-ripple flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                      {sending ? t.contact.form.submitting : t.contact.form.submit}
                    </button>
                  </form>
                </div>
              </RevealSection>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <RevealSection><SectionTitle title={t.contact.infoTitle} /></RevealSection>
              {contactInfo.map((item) => (
                <RevealSection key={item.title}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm card-hover group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl gradient-royal flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-royal text-sm hover:underline" dir="ltr">{item.value}</a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}

              <RevealSection>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <h4 className="font-bold text-sm mb-3">{t.contact.info.follow}</h4>
                  <div className="space-y-2">
                    <a href={SOCIAL.FACEBOOK_1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-royal transition-colors">📘 {t.contact.info.fb1}</a>
                    <a href={SOCIAL.FACEBOOK_2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-royal transition-colors">📘 {t.contact.info.fb2}</a>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <Branches />
    </>
  );
}
