import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Navigating to:", pathname); // 🔍 Vérifier si le hook fonctionne

    document.documentElement.scrollTop = 0; // Forcer le scroll en haut immédiatement après la navigation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
