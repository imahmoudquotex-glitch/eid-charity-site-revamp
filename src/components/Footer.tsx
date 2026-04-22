import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    label: "Facebook",
    labelAr: "فيسبوك",
    url: "https://www.facebook.com/",
    brandColor: "#1877F2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    labelAr: "إنستقرام",
    url: "#",
    brandColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    labelAr: "يوتيوب",
    url: "#",
    brandColor: "#FF0000",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    labelAr: "واتساب",
    url: "https://wa.me/201080036532",
    brandColor: "#25D366",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    labelAr: "تيك توك",
    url: "#",
    brandColor: "#000000",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;
  const cta = t.cta;

  const linkCols = [
    { title: f.programs, items: f.programItems, to: "/programs" },
    { title: f.about, items: f.aboutItems, to: "/about" },
    { title: f.donations, items: f.donationItems, to: "/contact" },
    { title: f.join, items: f.joinItems, to: "/contact" },
  ];

  return (
    <footer className="relative z-20 text-white border-t border-white/10 overflow-visible">
      {/* Background Container - Deep Navy Premium */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#030b20]/95 to-[#081b38]/80" />
        
        {/* Animated Blobs for Depth */}
        <div className="absolute -top-24 -right-16 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-[600px] h-[600px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-2">

        {/* Ultra-Compact CTA Strip */}
        <div className="relative -mt-12 mb-5 z-30">
          <div className="relative bg-[#0f1f3d]/90 backdrop-blur border border-blue-500/20 rounded-lg px-4 py-3 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/20 pointer-events-none" />
            <div className={`relative flex flex-col sm:flex-row ${lang === "ar" ? "sm:flex-row-reverse" : ""} items-center gap-3`}>
              
              {/* Text */}
              <div className={`flex-1 min-w-0 ${lang === "ar" ? "text-right" : "text-left"}`}>
                <p className="text-white font-bold text-sm leading-tight">{cta.title}</p>
                <p className="text-white/50 text-[10px] mt-0.5 leading-snug line-clamp-1">{cta.sub}</p>
              </div>

              {/* Subscribe Input */}
              <div className="flex items-center gap-1.5 shrink-0" dir="ltr">
                <input
                  type="email"
                  placeholder={f.emailPlaceholder}
                  className="w-40 bg-white/8 border border-white/15 text-white placeholder:text-white/30 px-2.5 py-1.5 rounded-md outline-none text-[11px] focus:border-blue-400/60 transition-colors"
                />
                <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-3 py-1.5 rounded-md text-[11px] font-bold transition-all shrink-0">
                  {f.send}
                </button>
              </div>

              {/* Buttons */}
              <div className={`flex gap-1.5 shrink-0 ${lang === "ar" ? "flex-row-reverse" : ""}`}>
                <Link to="/services#booking" className="bg-white text-[#060c18] px-3 py-1.5 rounded-md text-[11px] font-bold hover:bg-slate-100 transition-all">
                  {cta.book}
                </Link>
                <Link to="/contact" className="border border-white/20 text-white px-3 py-1.5 rounded-md text-[11px] font-semibold hover:bg-white/10 transition-all">
                  {cta.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-0 pb-2">
          {/* Brand Section */}
          <div className={`lg:col-span-4 space-y-4 ${lang === "ar" ? "text-right" : "text-left"}`}>
            <div className={`flex flex-col ${lang === "ar" ? "items-end" : "items-start"} space-y-2`}>
              <Link to="/" className="inline-block group/logo">
                <img 
                  src="/assets/logo.png" 
                  alt="Logo" 
                  className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
                />
              </Link>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                {lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}
              </h3>
            </div>
            
            <p className={`text-sm leading-relaxed text-white/60 ${lang === "ar" ? "text-right" : "text-left"} max-w-sm`}>
              {f.desc}
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/20${f.phone}`}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-3 text-white/70 hover:text-white transition-all group/info ${lang === "ar" ? "flex-row-reverse" : ""}`}
              >
                <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover/info:bg-[#10b981]/20 group-hover/info:border-[#10b981]/40 flex items-center justify-center transition-all shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="font-bold text-sm tracking-wider" dir="ltr">{f.phone}</span>
              </a>
              
              <a
                href="mailto:info@qalbelhayah.org"
                className={`flex items-center gap-3 text-white/70 hover:text-white transition-all group/info ${lang === "ar" ? "flex-row-reverse" : ""}`}
              >
                <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover/info:bg-[#2563eb]/20 group-hover/info:border-[#2563eb]/40 flex items-center justify-center transition-all shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-medium text-sm">info@qalbelhayah.org</span>
              </a>

              <div className={`flex items-center gap-3 text-white/70 group/info ${lang === "ar" ? "flex-row-reverse" : ""}`}>
                <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="font-medium text-sm leading-relaxed">{f.address}</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {linkCols.map((col, idx) => (
              <div key={col.title} className={lang === "ar" ? "text-right" : "text-left"}>
                <h4 className="font-bold text-base mb-3 relative inline-block">
                  {col.title}
                  <span className={`absolute -bottom-1.5 ${lang === "ar" ? "right-0" : "left-0"} w-6 h-1 bg-[#2563eb]/60 rounded-full`} />
                </h4>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link 
                        to={col.to} 
                        className={`text-white/60 hover:text-white text-sm transition-all relative inline-flex items-center group/link ${lang === "ar" ? "hover:-translate-x-2" : "hover:translate-x-2"}`}
                      >
                        <span className={`absolute ${lang === "ar" ? "-right-3" : "-left-3"} w-1 h-1 rounded-full bg-[#2563eb] opacity-0 group-hover/link:opacity-100 transition-all`} />
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

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#020408]/98 backdrop-blur-3xl border-t border-white/10 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col sm:flex-row ${lang === "ar" ? "sm:flex-row-reverse" : ""} items-center justify-between gap-3`}>
            
            <div className="flex gap-3 order-1 sm:order-2" dir="ltr">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={lang === "ar" ? social.labelAr : social.label}
                  style={{ '--brand-color': social.brandColor } as React.CSSProperties}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--brand-color)] hover:border-[var(--brand-color)] hover:-translate-y-1 active:scale-95 transition-all duration-500 group/social shadow-lg hover:shadow-[0_0_15px_var(--brand-color)]"
                >
                  <div className="group-hover/social:scale-110 transition-transform duration-500 text-white">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Links & Copyright Container */}
            <div className={`flex flex-col items-center ${lang === "ar" ? "sm:items-end" : "sm:items-start"} gap-2 order-2 sm:order-1`}>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-white/35">
                {[
                  { label: f.privacy, to: "/contact" },
                  { label: f.terms, to: "/contact" },
                  { label: f.cookies, to: "/contact" },
                  { label: f.contactUs, to: "/contact" }
                ].map((link) => (
                  <Link 
                    key={link.label} 
                    to={link.to} 
                    className="hover:text-white transition-colors relative group/legal"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500/50 group-hover/legal:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              <div className={`text-[12px] font-medium text-white/20 text-center ${lang === "ar" ? "lg:text-right" : "lg:text-left"}`} dir="ltr">
                <span className="opacity-60">© {new Date().getFullYear()}</span> {f.copyright}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
