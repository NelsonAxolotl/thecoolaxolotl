import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Navigating to:", pathname); // Ajoute ce log pour suivre les changements de route
    window.scrollTo(0, 0); // Remet le scroll en haut
  }, [pathname]);

  return null;
};

export default ScrollToTop;
