import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump avoids perceived lag during route transitions.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
