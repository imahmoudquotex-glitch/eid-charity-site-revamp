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
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg border-b border-border/30" : "bg-background/95 lg:bg-background/80 lg:backdrop-blur-md"}`}>
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
          <div className="flex h-[4.5rem] lg:h-[5rem] items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2 xl:gap-3 shrink-0 group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img src={logo} alt={lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"} className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 group-hover:rotate-3 transition-all duration-500 drop-shadow-xl object-contain" />
                <div className="absolute -inset-2 rounded-full bg-royal/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className={`${lang === "ar" ? "text-right" : "text-left"} hidden sm:block max-w-[120px] lg:max-w-[200px] xl:max-w-none`}>
                <span className="text-[12px] lg:text-[15px] xl:text-lg font-black text-foreground block leading-tight tracking-tight">
                  {lang === "ar" ? "مؤسسة قلب الحياة للتنمية" : "Qalb El Hayah Foundation"}
                </span>
                <span className="text-[8px] lg:text-[10px] xl:text-[11px] uppercase tracking-wider xl:tracking-[0.2em] font-bold text-royal opacity-80 block">
                  {lang === "ar" ? "تأهيل . تنمية . رعاية" : "Rehab . Dev . Care"}
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 bg-background/50 backdrop-blur-md rounded-full p-1 border border-border/40 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 xl:px-4 py-2 rounded-full text-[13px] xl:text-[15px] font-bold transition-all duration-300 whitespace-nowrap ${
                    location.pathname === link.to
                      ? "text-white gradient-royal shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <div className="flex items-center gap-1.5 xl:gap-2">
                <Link
                  to="/donations"
                  className="inline-flex items-center gap-2 gradient-royal text-white px-4 xl:px-6 py-2.5 rounded-full text-[13px] xl:text-[15px] font-black shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 btn-glow"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="hidden xl:inline">{lang === 'ar' ? 'تبرع الآن' : 'Donate Now'}</span>
                  <span className="xl:hidden">{lang === 'ar' ? 'تبرع' : 'Donate'}</span>
                </Link>
                <Link
                  to="/services#booking"
                  className="inline-flex items-center gap-2 gradient-red-blue text-white px-4 xl:px-6 py-2.5 rounded-full text-[13px] xl:text-[15px] font-black shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 btn-glow"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="hidden xl:inline">{t.nav.book}</span>
                  <span className="xl:hidden">{lang === 'ar' ? 'احجز' : 'Book'}</span>
                </Link>
              </div>

              <div className="w-[1px] h-8 bg-border/40 mx-1" />

              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 xl:px-4 py-2.5 rounded-full border border-border/60 text-[12px] xl:text-sm font-black hover:bg-accent transition-all duration-300 bg-background/50 shadow-sm"
                aria-label={lang === "ar" ? "Switch language to English" : "تبديل اللغة للعربية"}
              >
                <Globe className="w-4 h-4 text-royal" />
                {lang === "ar" ? "English" : "عربي"}
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-full hover:bg-accent transition-colors touch-manipulation bg-accent/30"
              aria-label={lang === "ar" ? "فتح القائمة" : "Open Menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border/40 bg-background/98 animate-fade-in backdrop-blur-xl">
            <nav className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === link.to
                      ? "text-white gradient-royal font-black shadow-md"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link 
                  to="/donations" 
                  className="inline-flex items-center justify-center gap-2 gradient-royal text-white px-5 py-4 rounded-xl text-sm font-black shadow-lg"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  {lang === 'ar' ? 'تبرع الآن' : 'Donate Now'}
                </Link>
                
                <Link
                  to="/services#booking"
                  className="inline-flex items-center justify-center gap-2 gradient-red-blue text-white px-5 py-4 rounded-xl text-sm font-black shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  {t.nav.book}
                </Link>

                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-3 bg-accent border border-border rounded-xl px-5 py-4 text-sm font-black"
                >
                  <Globe className="w-4 h-4 text-royal" />
                  <span>{lang === "ar" ? "English Version" : "النسخة العربية"}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="h-[4.5rem] lg:h-[5rem]" />
    </>
  );
}
