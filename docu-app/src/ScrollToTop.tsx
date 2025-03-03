import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("🚀 ScrollToTop triggered for:", pathname);
    console.log("📍 Before scroll: window.scrollY =", window.scrollY);

    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "smooth" });

      console.log("✅ After scroll: window.scrollY =", window.scrollY);
    }, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
