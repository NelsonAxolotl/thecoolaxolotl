import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import "./Nav.css";
import logo from "../Pics/axolotllogo300.webp";

const Nav = () => {
  const { t } = useTranslation();
  const [showLinks, setShowLinks] = useState(false);
  const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const firstLinkRef = useRef(null);

  const isIntroPage = location.pathname === "/";

  const handleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const handleNavClick = () => {
    setShowLinks(false);
  };

  useEffect(() => {
    if (showLinks && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [showLinks]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowNavbarOnScroll(true);
      } else {
        setShowNavbarOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/Parcours", label: t("navbar.parcours") },
    { path: "/Portfolio", label: t("navbar.portfolio") },
    { path: "/Prestations", label: t("navbar.prestations") },
    { path: "/Contact", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={clsx("navbar", {
        "hide-navbar": isIntroPage,
        "show-nav": showLinks,
        "hide-nav": !showLinks,
        "visible-navbar": showNavbarOnScroll,
        "hidden-navbar": !showNavbarOnScroll,
      })}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="cursor"></div>

      <div
        className="navbar-logo"
        onClick={() => {
          setShowLinks(false);
          navigate("/");
        }}
        aria-label="Retour à l'accueil"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setShowLinks(false);
            navigate("/");
          }
        }}
      >
        <img
          src={logo}
          alt="Logo Axolotl"
          width="300"
          height="300"
          loading="lazy"
        />
      </div>

      <div className={clsx("navbar-links", { "video-active": showLinks })}>
        {showLinks && (
          <video
            autoPlay
            muted
            loop
            className="navbar-background-video"
            aria-hidden="true"
          >
            <source src="/Videos/bliss.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas les vidéos.
          </video>
        )}

        <ul className="navbar-links-list">
          {navLinks.map(({ path, label }, index) => (
            <li
              key={index}
              className={clsx("navbar-item", {
                [`slideInDown-${index + 1}`]: showLinks,
              })}
            >
              <Link
                to={path}
                onClick={handleNavClick}
                className={clsx("navbar-link", {
                  "active-link": location.pathname === path,
                })}
                aria-label={`Navigate to ${label}`}
                ref={index === 0 ? firstLinkRef : null}
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
        aria-expanded={showLinks}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
