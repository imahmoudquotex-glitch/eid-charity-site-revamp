import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { LanguageProvider } from "./contexts/LanguageContext";

// ✅ كل الصفحات الآن lazy — تُحمَّل فقط عند الحاجة
const Index = lazy(() => import("./pages/Index.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Goals = lazy(() => import("./pages/Goals.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Programs = lazy(() => import("./pages/Programs.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Donations = lazy(() => import("./pages/Donations.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// ✅ QueryClient بإعدادات إنتاج مناسبة
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-royal/20 border-t-royal animate-spin" />
    </div>
  );
}

function RouteWarmup() {
  useEffect(() => {
    const warm = () => {
      void import("./pages/About.tsx");
      void import("./pages/Goals.tsx");
      void import("./pages/Services.tsx");
      void import("./pages/Programs.tsx");
      void import("./pages/Donations.tsx");
      void import("./pages/Contact.tsx");
    };

    const idle = window.requestIdleCallback?.(warm, { timeout: 1200 });
    if (!idle) {
      const timer = window.setTimeout(warm, 600);
      return () => window.clearTimeout(timer);
    }
    return () => window.cancelIdleCallback?.(idle);
  }, []);

  return null;
}

const App = () => (
  <LanguageProvider>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteWarmup />
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Layout مشترك لكل الصفحات — يحتوي Header + Footer + FloatingWhatsApp */}
                <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/goals" element={<Goals />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/donations" element={<Donations />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
                {/* صفحة 404 بدون Layout عشان لها تصميم مختلف */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </LanguageProvider>
);

export default App;
