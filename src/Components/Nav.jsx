import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import "./Nav.css";
import logo from "../Pics/axolotllogo150.webp";
import corail from "../Pics/algue.webp";

const Nav = () => {
  const { t } = useTranslation();
  const [showLinks, setShowLinks] = useState(false);
  const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const firstLinkRef = useRef(null);

  const isIntroPage = location.pathname === "/";

  // Toggle menu burger
  const toggleMenu = () => setShowLinks((prev) => !prev);

  // Close menu (used on link click or navigation)
  const closeMenu = () => setShowLinks(false);

  // Bloquer le scroll quand menu burger ouvert
  useEffect(() => {
    document.body.style.overflow = showLinks ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLinks]);

  // Fermer menu quand on change de page
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Focus sur le premier lien quand menu ouvert
  useEffect(() => {
    if (showLinks && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [showLinks]);

  // Apparition navbar au scroll > 250px
  useEffect(() => {
    const onScroll = () => setShowNavbarOnScroll(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        "visible-navbar": showNavbarOnScroll,
        "hidden-navbar": !showNavbarOnScroll,
        "show-nav": showLinks,
        "hide-nav": !showLinks,
      })}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="cursor" />

      <div
        className="navbar-logo"
        role="button"
        tabIndex={0}
        aria-label="Retour à l'accueil"
        onClick={() => {
          closeMenu();
          navigate("/");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            closeMenu();
            navigate("/");
          }
        }}
      >
        <img
          src={logo}
          alt="Logo Axolotl"
          width={150}
          height={150}
          loading="eager"
        />
      </div>

      <div className={clsx("navbar-links", { "video-active": showLinks })}>
        {showLinks && (
          <img
            src={corail}
            alt="corail"
            className="navbar-background-image"
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
        )}

        <ul className="navbar-links-list">
          {navLinks.map(({ path, label }, index) => (
            <li
              key={path}
              className={clsx("navbar-item", {
                [`slideInDown-${index + 1}`]: showLinks,
              })}
            >
              <Link
                to={path}
                onClick={closeMenu}
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
        type="button"
        className="navbar-burger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={showLinks}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
};

export default Nav;
