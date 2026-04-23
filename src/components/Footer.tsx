import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/site-logo.png";
import unicef from "@/assets/partners/unicef.jpg";
import foodBank from "@/assets/partners/food-bank.png";
import solidarity from "@/assets/partners/red-crescent.png";
import misrElKheir from "@/assets/partners/misr-el-kheir.jpg";
import redCrescent from "@/assets/partners/solidarity-ministry.png";
import resala from "@/assets/partners/resala.png";
import crs from "@/assets/partners/crs.jpg";

const socialLinks = [
  {
    label: "Facebook", labelAr: "فيسبوك",
    url: "https://www.facebook.com/",
    brand: "#1877F2",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>,
  },
  {
    label: "Instagram", labelAr: "إنستقرام",
    url: "#",
    brand: "#E1306C",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: "YouTube", labelAr: "يوتيوب",
    url: "#",
    brand: "#FF0000",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    label: "WhatsApp", labelAr: "واتساب",
    url: "https://wa.me/201080036532",
    brand: "#25D366",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
  {
    label: "TikTok", labelAr: "تيك توك",
    url: "#",
    brand: "#69C9D0",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>,
  },
];

export default function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;

  const linkCols = [
    { title: t.programs, items: t.programItems, to: "/programs" },
    { title: t.about,    items: t.aboutItems,   to: "/about" },
    { title: t.donations,items: t.donationItems, to: "/donations" },
    { title: t.join,     items: t.joinItems,     to: "/contact" },
  ];

  return (
    <footer className="relative z-20 text-white overflow-hidden">

      {/* ═══════════════════════ BACKGROUND ═══════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep void base */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #02040f 0%, #050d1f 40%, #071428 70%, #030b18 100%)" }} />

        {/* Glassmorphism layer — frosted depth */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 120% 80% at 15% 20%, rgba(37,99,235,0.09) 0%, transparent 60%), radial-gradient(ellipse 80% 60% at 85% 80%, rgba(16,185,129,0.06) 0%, transparent 50%)",
          backdropFilter: "blur(0px)",
        }} />

        {/* Glow orbs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Top edge glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.6) 30%, rgba(139,92,246,0.4) 60%, rgba(16,185,129,0.3) 80%, transparent 100%)" }} />
      </div>

      {/* ═══════════════════════ MAIN CONTENT ═══════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-8">

        {/* Glassmorphism inner card */}
        <div className="rounded-3xl border border-white/[0.06] mb-10 overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", backdropFilter: "blur(20px)" }}>

          {/* Inner top bar */}
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), rgba(139,92,246,0.3), transparent)" }} />

          <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ── Brand Section ── */}
            <div className={`lg:col-span-5 space-y-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
              <div className={`flex flex-col ${lang === "ar" ? "items-end" : "items-start"} gap-2`}>
                <Link to="/" className="inline-block group">
                  <img src={logo} alt="Logo"
                    className="h-11 w-auto opacity-95 group-hover:opacity-100 transition-opacity" />
                </Link>
                <h3 className="text-2xl font-black tracking-tight"
                  style={{ background: "linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.55) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 max-w-xs">{t.desc}</p>
              </div>

              {/* Contact info — glassmorphism mini-card */}
              <div className="rounded-2xl border border-white/[0.08] p-4 space-y-3"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}>
                {[
                  {
                    href: `https://wa.me/20${t.phone}`, label: t.phone, dir: "ltr" as const,
                    color: "rgba(16,185,129,",
                    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                  },
                  {
                    href: "mailto:info@qalbelhayah.org", label: "info@qalbelhayah.org", dir: "ltr" as const,
                    color: "rgba(37,99,235,",
                    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
                  },
                  {
                    href: "", label: t.address, dir: "auto" as const,
                    color: "rgba(139,92,246,",
                    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
                  },
                ].map((item) => {
                  const inner = (
                    <div className={`flex items-center gap-3 group/info ${lang === "ar" ? "flex-row-reverse" : ""}`}>
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border"
                        style={{ background: `${item.color}0.08)`, borderColor: `${item.color}0.15)` }}>
                        <span style={{ color: `${item.color}0.9)` }}>{item.icon}</span>
                      </span>
                      <span className="text-sm font-medium text-white/60 group-hover/info:text-white transition-colors" dir={item.dir}>{item.label}</span>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* ── Links Grid ── */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
                {linkCols.map((col) => (
                  <div key={col.title} className={lang === "ar" ? "text-right" : "text-left"}>
                    <h4 className="font-black text-sm mb-4 relative inline-block text-white/90">
                      {col.title}
                      <span className={`absolute -bottom-1.5 ${lang === "ar" ? "right-0" : "left-0"} w-5 h-0.5 rounded-full`}
                        style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed)" }} />
                    </h4>
                    <ul className="space-y-2.5">
                      {col.items.map((item) => (
                        <li key={item}>
                          <Link to={col.to}
                            className={`text-white/45 hover:text-white/90 text-xs transition-all duration-200 inline-flex items-center group/lnk ${lang === "ar" ? "hover:-translate-x-1" : "hover:translate-x-1"}`}>
                            <span className={`w-0.5 h-0.5 rounded-full bg-blue-500 opacity-0 group-hover/lnk:opacity-100 transition-all mr-1.5 shrink-0 ${lang === "ar" ? "order-last ml-1.5 mr-0" : ""}`} />
                            <span dir="auto">{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partners Section — Premium Display */}
          <div className="pt-20 border-t border-white/5">
            <div className="flex flex-col items-center mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-royal mb-4 bg-royal/10 px-4 py-1.5 rounded-full border border-royal/20">
                {lang === "ar" ? "شركاء النجاح" : "Success Partners"}
              </span>
              <h4 className="text-2xl font-black text-white/90 tracking-tight">
                {lang === "ar" ? "نفخر بالتعاون مع كبرى المؤسسات" : "Proudly collaborating with world-class organizations"}
              </h4>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-4 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-700">
              {[
                { src: unicef, name: "UNICEF" },
                { src: redCrescent, name: lang === "ar" ? "الهلال الأحمر" : "Red Crescent" },
                { src: foodBank, name: lang === "ar" ? "بنك الطعام" : "Food Bank" },
                { src: misrElKheir, name: lang === "ar" ? "مصر الخير" : "Misr El Kheir" },
                { src: resala, name: lang === "ar" ? "رسالة" : "Resala" },
                { src: solidarity, name: lang === "ar" ? "وزارة التضامن" : "Solidarity Ministry" },
                { src: crs, name: "CRS" },
              ].map((partner, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group/p transition-all duration-300 hover:scale-110">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 p-3 flex items-center justify-center border border-white/5 group-hover/p:bg-white/10 group-hover/p:border-white/20 transition-all shadow-lg overflow-hidden">
                    <img src={partner.src} alt={partner.name} className="max-w-full max-h-full object-contain filter grayscale group-hover/p:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="text-[10px] font-bold text-white/30 group-hover/p:text-white/60 text-center transition-colors">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Inner bottom bar */}
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />
        </div>

        {/* ═══════════════════════ BOTTOM BAR ═══════════════════════ */}
        <div className={`flex flex-col sm:flex-row ${lang === "ar" ? "sm:flex-row-reverse" : ""} items-center justify-between gap-5`}>

          {/* Social pills */}
          <div className="flex gap-2.5 flex-wrap justify-center" dir="ltr">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                aria-label={lang === "ar" ? s.labelAr : s.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 border border-white/[0.07] transition-all duration-300 hover:-translate-y-1 active:scale-95 group/soc"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = s.brand;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = s.brand;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 18px ${s.brand}55`;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
                  (e.currentTarget as HTMLAnchorElement).style.color = "";
                }}>
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright + Legal */}
          <div className={`flex flex-col ${lang === "ar" ? "items-end text-right" : "items-start text-left"} gap-2`}>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-white/50">
              {[
                { label: t.privacy, to: "/contact" },
                { label: t.terms, to: "/contact" },
                { label: t.cookies, to: "/contact" },
                { label: t.contactUs, to: "/contact" },
              ].map((lnk) => (
                <Link key={lnk.label} to={lnk.to}
                  className="hover:text-white/70 transition-colors duration-200 relative group/leg">
                  {lnk.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500/50 group-hover/leg:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            <p className="text-[11px] text-white/40" dir="ltr">
              © {new Date().getFullYear()} {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
