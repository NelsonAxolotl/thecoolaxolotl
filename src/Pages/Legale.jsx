import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importation du hook
import { Helmet } from "react-helmet-async";
import "./Legale.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
import legale from "../Pics/legal.webp";

const Legale = () => {
  const { t } = useTranslation(); // Utilisation du hook pour la traduction
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setShowPage(true);
    }, 500);

    return () => clearTimeout(pageTimer); // Nettoyage du timeout
  }, []);

  return showPage ? (
    <>
      <Helmet>
        <title>{t("legal.metaTitle")}</title>
        <meta name="description" content={t("legal.metaDescription")} />
        <meta property="og:title" content={t("legal.metaTitle")} />
        <meta property="og:description" content={t("legal.metaDescription")} />
        <meta
          property="og:image"
          content="https://thecoolaxolotl.com/Pics/legal.webp"
        />
      </Helmet>
      <Nav />
      <div className="legale fade-in-legale">
        <img
          src={legale}
          alt="Axolotl"
          width="300"
          height="300"
          className="round-image-legale"
        />
        <div className="legal-container">
          <h1>{t("legal.title")}</h1>

          <section>
            <h2>{t("legal.section1.title")}</h2>
            <p>{t("legal.section1.description1")}</p>

            <ul>
              <li>The Cool Axolotl</li>
            </ul>
            <p>
              <strong>{t("legal.section1.address")} :</strong> Montpellier{" "}
              <br />
              <strong>{t("legal.section1.email")} :</strong>{" "}
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                thecoolaxolotldesigner@gmail.com
              </a>{" "}
              <br />
              <strong>{t("legal.section1.phone")} :</strong> 06 17 80 67 15{" "}
              <br />
              <strong>{t("legal.section1.siret")} :</strong>{" "}
              <strong>9430225660001</strong>
            </p>
            <p>
              <strong>{t("legal.section1.director")} :</strong> The Cool Axolotl
            </p>
          </section>

          <section>
            <h2>{t("legal.section2.title")}</h2>
            <p>{t("legal.section2.description")}</p>
            <p>
              <strong>{t("legal.section2.hostName")} : The Cool Axololt</strong>{" "}
              <br />
              <br />
              <strong>{t("legal.section2.phone")} : 06 17 80 67 15</strong>
            </p>
          </section>

          <section>
            <h2>{t("legal.section3.title")}</h2>
            <p>{t("legal.section3.text")}</p>
          </section>

          <section>
            <h2>{t("legal.section4.title")}</h2>
            <p>{t("legal.section4.text")}</p>
          </section>

          <section>
            <h2>{t("legal.section5.title")}</h2>
            <p>{t("legal.section5.text")}</p>
          </section>

          <section>
            <h2>{t("legal.section6.title")}</h2>
            <p>{t("legal.section6.text")}</p>
          </section>

          <section>
            <h2>{t("legal.section7.title")}</h2>

            <p>{t("legal.section7.text")}</p>
          </section>
        </div>
      </div>
      <End />
    </>
  ) : null; // Affiche rien tant que `showPage` est false
};

export default Legale;
