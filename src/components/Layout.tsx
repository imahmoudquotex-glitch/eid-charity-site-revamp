import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

/**
 * Layout مشترك لكل الصفحات — يحتوي على Header + Footer + FloatingWhatsApp
 * يمنع تكرار هذه المكونات في ٧ ملفات
 */
export default function Layout() {
  return (
    <>
      <Header />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
