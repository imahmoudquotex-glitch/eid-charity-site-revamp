import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/site-logo.jpg";
import { useLang } from "@/contexts/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, t, toggleLang } = useLang();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/goals", label: t.nav.goals },
    { to: "/services", label: t.nav.services },
    { to: "/programs", label: t.nav.programs },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg border-b border-border/30" : "bg-background/80 backdrop-blur-sm"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[4.5rem] items-center justify-between">
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <img src={logo} alt={lang === "ar" ? "قلب الحياة" : "Qalb El Hayah"} className="h-11 w-11 rounded-lg group-hover:scale-110 transition-transform duration-300 drop-shadow-lg object-contain" width={44} height={44} />
                <div className="absolute -inset-1 rounded-full bg-royal/10 blur-md group-hover:bg-royal/20 transition-colors" />
              </div>
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <span className="text-base md:text-lg font-black text-foreground block leading-none tracking-tight mb-0.5">
                  {lang === "ar" ? "قلب الحياة" : "Qalb El Hayah"}
                </span>
                <span className="text-[9px] md:text-[10px] text-royal font-bold tracking-widest uppercase">
                  {lang === "ar" ? "للتنمية" : "Foundation"}
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t.nav.book}
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-full hover:bg-accent transition-colors"
              aria-label={lang === "ar" ? "فتح القائمة" : "Open Menu"}
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
          <div className="lg:hidden border-t border-border/40 glass animate-fade-in">
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
