import "./i18n";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LanguageSwitcher from "./Components/LanguageSwitcher";

// 🔁 Lazy imports
const Intro = lazy(() => import("./Components/Intro"));
const Apropos = lazy(() => import("./Pages/Apropos"));
const Contact = lazy(() => import("./Pages/Contact"));
const Creations = lazy(() => import("./Pages/Creations"));
const Services = lazy(() => import("./Pages/Services"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Legale = lazy(() => import("./Pages/Legale"));
const Politic = lazy(() => import("./Pages/Politic"));

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Suspense>
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
      </Suspense>
    </>
  );
}

export default App;
