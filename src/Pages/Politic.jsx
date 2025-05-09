import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Politic.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
import politic from "../Pics/politiqueaxo.webp";

const Politic = () => {
  const { t } = useTranslation();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setShowPage(true);
    }, 500);
    return () => clearTimeout(pageTimer);
  }, []);

  return showPage ? (
    <>
      <Nav />
      <div className="politic fade-in-legale">
        <img
          src={politic}
          alt="axolotl politic"
          width="400"
          height="400"
          className="round-image-politic"
        />
        <div className="container-politic">
          <h1>{t("privacy.title")}</h1>

          {[...Array(12)].map((_, i) => {
            const sectionKey = `privacy.section${i + 1}`;
            return (
              <section key={i}>
                <h2>{t(`${sectionKey}.title`)}</h2>
                <p>{t(`${sectionKey}.content`)}</p>
              </section>
            );
          })}
        </div>
      </div>
      <End />
    </>
  ) : null;
};

export default Politic;
