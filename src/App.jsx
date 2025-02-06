import React from "react";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  );
}

export default App;
