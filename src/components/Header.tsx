import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import logo from "@/assets/site-logo.png";
import { useLang } from "@/contexts/LanguageContext";
import { Heart, Calendar, Menu, X, Globe } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, t, toggleLang } = useLang();

  const navLinks = useMemo(() => [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/goals", label: t.nav.goals },
    { to: "/services", label: t.nav.services },
    { to: "/programs", label: t.nav.programs },
    { to: "/donations", label: t.nav.donations },
    { to: "/contact", label: t.nav.contact },
  ], [t]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg border-b border-border/30" : "bg-background/90 lg:bg-background/80 lg:backdrop-blur-sm"}`}>
        <div className={`mx-auto max-w-7xl ${lang === "ar" ? "pr-2 pl-4 sm:pr-3 sm:pl-6 lg:pr-4 lg:pl-8" : "pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-4 lg:pr-8"}`}>
          <div className="flex h-[4.25rem] lg:h-[4.5rem] items-center justify-between">
            <Link to="/" className={`flex items-center gap-3 shrink-0 group transition-transform duration-300 hover:scale-[1.02] ${lang === "ar" ? "-mr-1 lg:-mr-2 translate-y-[-3px]" : "translate-y-[-3px]"}`}>
              <div className="relative">
                <img src={logo} alt={lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"} className="h-13 w-13 lg:h-16 lg:w-16 group-hover:rotate-3 transition-all duration-500 drop-shadow-xl object-contain" width={64} height={64} />
                <div className="absolute -inset-2 rounded-full bg-royal/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className={`${lang === "ar" ? "text-right" : "text-left"} max-w-[10.5rem] sm:max-w-none`}>
                <span className="text-sm sm:text-base md:text-lg font-black text-foreground block leading-none tracking-tight mb-0.5 truncate drop-shadow-sm">
                  {lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-royal opacity-80 block">
                  {lang === "ar" ? "تأهيل . تنمية . رعاية" : "Rehab . Dev . Care"}
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 bg-background/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-border/40 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    location.pathname === link.to
                      ? "text-royal-foreground gradient-royal shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/donations"
                className="group relative px-6 py-2.5 rounded-full font-black text-sm transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-royal to-blue-600 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-white animate-pulse" />
                  {t.nav.donations}
                </span>
              </Link>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative px-6 py-2.5 rounded-full font-black text-sm text-royal border-2 border-royal/30 hover:border-royal hover:bg-royal/5 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  {t.nav.book}
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border/60 text-xs font-black hover:bg-accent transition-all duration-300 tracking-widest"
                aria-label={lang === "ar" ? "Switch language to English" : "تبديل اللغة للعربية"}
              >
                <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {lang === "ar" ? "EN" : "عر"}
              </button>
              <div className="flex items-center gap-4 mx-2">
                <Link
                  to="/donations"
                  className="inline-flex items-center gap-2 gradient-royal text-white px-5 py-2.5 rounded-full text-sm font-black shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 btn-glow"
                >
                  {lang === 'ar' ? 'تبرع الآن' : 'Donate Now'}
                </Link>
                <Link
                  to="/services#booking"
                  className="inline-flex items-center gap-2 gradient-red-blue text-white px-5 py-2.5 rounded-full text-sm font-black shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 btn-glow btn-ripple"
                >
                  {t.nav.book}
                </Link>
              </div>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-full hover:bg-accent transition-colors touch-manipulation"
              aria-label={lang === "ar" ? "فتح القائمة" : "Open Menu"}
              aria-expanded={open}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/40 bg-background/95 animate-fade-in">
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === link.to
                      ? "text-royal-foreground gradient-royal font-black"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Link to="/donations" className="group relative px-5 py-3.5 rounded-2xl font-black text-sm transition-all duration-300 overflow-hidden text-center shadow-lg shadow-royal/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-royal to-blue-600" />
                  <span className="relative z-10 text-white flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 fill-white animate-pulse" />
                    {t.nav.donations}
                  </span>
                </Link>
                
                <button 
                  onClick={() => { setOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-5 py-3.5 rounded-2xl font-black text-sm text-royal border-2 border-royal/30 hover:bg-royal/5 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {t.nav.book}
                </button>

                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-3 bg-navy/5 border border-border rounded-2xl px-5 py-3.5 text-sm font-black hover:bg-accent transition-colors"
                >
                  <Globe className="w-4 h-4 text-royal" />
                  <span>{lang === "ar" ? "English Version" : "النسخة العربية"}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="h-[4.5rem]" />
    </>
  );
}
