import { useTranslation } from "react-i18next";
import "./End.css";
import { Link } from "react-router-dom";
// import legal from "../Pics/legal.webp";
import axo from "../Pics/axolotllogo150.webp";
import privacypolitic from "../Pics/politique.webp";

const End = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="end">
        <div className="legal">
          <Link to="/Mentions-légales">
            <img
              src="/Pics/legal-160.webp"
              width="80"
              height="80"
              alt={t("end.legalAlt")}
              class="round-image4"
              loading="lazy"
            />
          </Link>{" "}
          <p>{t("end.legal")}</p>
        </div>
        <div className="copy">
          <Link to="/">
            <img
              src={axo}
              width="150"
              height="150"
              alt={t("end.logoAlt")}
              className="round-image5"
            />
          </Link>
          <p>{t("end.copyright")}</p>
        </div>
        <div className="politique">
          <Link to="/Politique-de-confidentialité">
            <img
              src={privacypolitic}
              width="80"
              height="80"
              alt={t("end.politicAlt")}
              className="round-image4"
              loading="lazy"
            />
          </Link>
          <p>{t("end.politic")}</p>
        </div>
      </div>
    </>
  );
};

export default End;
