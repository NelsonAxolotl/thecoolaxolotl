import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("🆙 Scroll forcé en haut !");
    }, 0); // Utilisation d'un timeout de 0 pour s'assurer que la page soit bien rendue

    return () => clearTimeout(timeout); // Nettoyage si nécessaire
  }, [pathname]);

  return null;
};

export default ScrollToTop;
