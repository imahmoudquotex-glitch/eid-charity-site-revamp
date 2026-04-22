import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLang();
  const n = t.notFound;

  return (
    <div className="page-enter">
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-8xl font-black text-royal counter-glow mb-4">{n.code}</div>
          <h1 className="text-2xl font-bold mb-4">{n.title}</h1>
          <p className="text-muted-foreground mb-8">{n.sub}</p>
          <Link to="/" className="gradient-red-blue text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg hover:scale-[1.05] transition-all btn-glow">
            {n.backHome}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
