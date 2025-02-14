import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Navigating to:", pathname); // 🔍 Vérifier si le hook fonctionne

    setTimeout(() => {
      document.documentElement.scrollTop = 0; // Forcer le scroll en haut
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
