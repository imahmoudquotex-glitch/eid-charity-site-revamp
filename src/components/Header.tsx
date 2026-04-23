import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import logo from "@/assets/site-logo.png";
import { useLang } from "@/contexts/LanguageContext";

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
            <Link to="/" className={`flex items-center gap-3 shrink-0 group ${lang === "ar" ? "-mr-1 lg:-mr-2" : ""}`}>
              <div className="relative -translate-y-2.5 lg:-translate-y-3">
                <img src={logo} alt={lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"} className="h-11 w-11 lg:h-12 lg:w-12 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(var(--royal-rgb),0.5)] object-contain" width={48} height={48} />
                <div className="absolute -inset-1.5 rounded-full bg-royal/20 blur-md lg:blur-lg group-hover:bg-royal/30 transition-all duration-500 animate-pulse" />
              </div>
              <div className={`${lang === "ar" ? "text-right" : "text-left"} max-w-[10.5rem] sm:max-w-none`}>
                <span className="text-sm sm:text-base md:text-lg font-black text-foreground block leading-none tracking-tight mb-0.5 truncate">
                  {lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}
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
              <Link
                to="/services#booking"
                className="inline-flex items-center gap-2 gradient-red-blue text-white px-5 py-2.5 rounded-full text-sm font-black shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 btn-glow btn-ripple"
              >
                {t.nav.book}
              </Link>
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
                <Link to="/services#booking" className="block gradient-red-blue text-white px-5 py-3 rounded-xl text-sm font-black text-center shadow-md">
                  {t.nav.book}
                </Link>
                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-2 border border-border rounded-xl px-5 py-2.5 text-sm font-bold hover:bg-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  {lang === "ar" ? "Switch to English" : "التبديل للعربية"}
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
