import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translation, translations } from "./translations";

interface LanguageContextType {
  lang: Language;
  t: Translation;
  toggleLang: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("app_lang");
    return (saved as Language) || "ar";
  });

  const [t, setT] = useState<Translation>(translations[lang]);

  useEffect(() => {
    setT(translations[lang]);
    localStorage.setItem("app_lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    const root = document.getElementById("lang-transition-root");
    if (root) root.style.opacity = "0";

    setTimeout(() => {
      setLang((prev) => (prev === "ar" ? "en" : "ar"));
      setTimeout(() => {
        if (root) root.style.opacity = "1";
      }, 50);
    }, 250);
  };

  const setLanguage = (newLang: Language) => {
    if (newLang === lang) return;
    const root = document.getElementById("lang-transition-root");
    if (root) root.style.opacity = "0";

    setTimeout(() => {
      setLang(newLang);
      setTimeout(() => {
        if (root) root.style.opacity = "1";
      }, 50);
    }, 250);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
