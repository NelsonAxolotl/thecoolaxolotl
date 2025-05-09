import React from "react";
import "./i18n";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Intro from "./Components/Intro";
import Apropos from "./Pages/Apropos";
import Contact from "./Pages/Contact";
import Creations from "./Pages/Creations";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Legale from "./Pages/Legale";
import Politic from "./Pages/Politic";
import LanguageSwitcher from "./Components/LanguageSwitcher";

// const Apropos = lazy(() => import("./Pages/Apropos"));
// const Contact = lazy(() => import("./Pages/Contact"));
// const Creations = lazy(() => import("./Pages/Creations"));
// const Services = lazy(() => import("./Pages/Services"));
// const NotFound = lazy(() => import("./Pages/NotFound"));
// const Legale = lazy(() => import("./Pages/Legale"));
// const Politic = lazy(() => import("./Pages/Politic"));

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Chargement...</div>}> */}
      <ScrollToTop />
      <LanguageSwitcher /> {/* Ajoute le sélecteur de langue ici */}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Parcours" element={<Apropos />} />
        <Route path="/Portfolio" element={<Creations />} />
        <Route path="/Prestations" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mentions-légales" element={<Legale />} />
        <Route path="/Politique-de-confidentialité" element={<Politic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
