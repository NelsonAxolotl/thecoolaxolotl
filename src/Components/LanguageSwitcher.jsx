import { useTranslation } from "react-i18next";
import frFlag from "../Pics/fr.svg";
import enFlag from "../Pics/uk.svg";
import "./LanguageSwitcher.css"; // ajoute cette ligne pour le CSS externe

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className="language-switcher">
      <img
        src={frFlag}
        alt="Français"
        width="32"
        height="20"
        onClick={() => changeLanguage("fr")}
        role="button"
        tabIndex="0"
        className="flag"
        loading="eager"
        decoding="async"
      />
      <img
        src={enFlag}
        alt="English"
        width="32"
        height="20"
        onClick={() => changeLanguage("en")}
        role="button"
        tabIndex="0"
        className="flag"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default LanguageSwitcher;
