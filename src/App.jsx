import "./i18n";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./Components/Intro";
import Apropos from "./Pages/Apropos";
import Contact from "./Pages/Contact";
import Creations from "./Pages/Creations";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Legale from "./Pages/Legale";
import Politic from "./Pages/Politic";
import LanguageSwitcher from "./Components/LanguageSwitcher";

function App() {
  return (
    <>
      <LanguageSwitcher />
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
    </>
  );
}

export default App;
