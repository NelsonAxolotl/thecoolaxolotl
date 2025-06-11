import { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import "./Politic.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
import privacypolitic from "../Pics/politique.webp";

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
      <Helmet>
        <title>{t("privacy.metaTitle")}</title>
        <meta name="description" content={t("privacy.metaDescription")} />
        <meta property="og:title" content={t("privacy.metaTitle")} />
        <meta
          property="og:description"
          content={t("privacy.metaDescription")}
        />
        <meta
          property="og:image"
          content="https://thecoolaxolotl.com/Picspolitiqueaxo.webp"
        />
      </Helmet>

      <Nav />
      <div className="politic fade-in-legale">
        <img
          src={privacypolitic}
          alt="axolotl politic"
          width="200"
          height="200"
          className="round-image-politic"
          priority
        />
        <div className="container-politic">
          <h1>{t("privacy.title")}</h1>

          {[...Array(12)].map((_, i) => {
            const sectionKey = `privacy.section${i + 1}`;
            const sectionId = i + 1;

            return (
              <section key={i} id={`section-${i + 1}`}>
                <h2>{t(`${sectionKey}.title`)}</h2>
                {i + 1 === 12 ? (
                  <p>
                    <Trans
                      i18nKey={`${sectionKey}.content`}
                      components={{
                        a: (
                          <a
                            href="mailto:thecoolaxolotldesigner@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="email-link"
                          />
                        ),
                      }}
                      values={{ email: "thecoolaxolotldesigner@gmail.com" }}
                    />
                  </p>
                ) : (
                  <p>{t(`${sectionKey}.content`)}</p>
                )}
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
