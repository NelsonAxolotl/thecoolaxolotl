import React from "react"; // Ajoutez cette ligne
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "../Pics/axolotl2.webp";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isIntroPage = location.pathname === "/intro";

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleNavClick = (path) => {
    setShowLinks(false);
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Si on a défilé de plus de 50px, afficher la barre de navigation
      if (window.scrollY > 250) {
        setShowNavbarOnScroll(true);
      } else {
        setShowNavbarOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isIntroPage ? "hide-navbar" : ""} ${
        showLinks ? "show-nav" : "hide-nav"
      } ${showNavbarOnScroll ? "visible-navbar" : "hidden-navbar"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="cursor"></div>
      <div
        className="navbar-logo"
        onClick={() => handleNavClick("/")}
        aria-label="Retour à l'accueil"
      >
        <img src={logo} alt="Logo" />
      </div>

      {/* Container des liens avec la vidéo de fond */}
      <div className={`navbar-links ${showLinks ? "video-active" : ""}`}>
        {/* <video
          autoPlay
          muted
          loop
          className="navbar-background-video"
          aria-hidden="true"
        >
          <source src={eau} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos.
        </video> */}

        <ul className="navbar-links-list">
          {[
            { path: "/Parcours", label: "Parcours" },
            { path: "/Portfolio", label: "Portfolio" },
            { path: "/Prestations", label: "Prestations" },
            { path: "/Contact", label: "Contact" },
          ].map(({ path, label }, index) => (
            <li
              key={index}
              className={`navbar-item ${
                showLinks ? `slideInDown-${index + 1}` : ""
              }`}
            >
              <Link
                className="navbar-link"
                to={path}
                onClick={() => handleNavClick(path)}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="navbar-burger"
        onClick={handleShowLinks}
        aria-label="Toggle navigation"
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
