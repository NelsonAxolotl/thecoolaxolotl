import { useTranslation } from "react-i18next";
import frFlag from "../Pics/fr-flag.png";
import enFlag from "../Pics/uk-flag.png";
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
        width="24"
        height="24"
        onClick={() => changeLanguage("fr")}
        className="flag"
      />
      <img
        src={enFlag}
        alt="English"
        width="24"
        height="24"
        onClick={() => changeLanguage("en")}
        className="flag"
      />
    </div>
  );
};

export default LanguageSwitcher;
