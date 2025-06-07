import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./Components/ScrollToTop"; // 👈 ici

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* 👈 juste ici */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
