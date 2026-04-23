import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

/**
 * Layout مشترك لكل الصفحات — يحتوي على Header + Footer + FloatingWhatsApp
 * يمنع تكرار هذه المكونات في ٧ ملفات
 * #lang-transition-root receives opacity transitions from LanguageContext switchLang
 */
export default function Layout() {
  return (
    <div
      id="lang-transition-root"
      style={{ opacity: 1, transition: "opacity 0.25s ease" }}
    >
      <Header />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
