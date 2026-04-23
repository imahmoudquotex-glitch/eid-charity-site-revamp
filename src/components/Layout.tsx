import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ErrorBoundary from "./ErrorBoundary";

export default function Layout() {
  return (
    <div
      id="lang-transition-root"
      style={{ opacity: 1, transition: "opacity 0.25s ease" }}
    >
      <Header />
      <main className="page-enter">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
