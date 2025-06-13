import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import "./Politic.css";
import Nav from "../Components/Nav";
import End from "../Components/End";

const Politic = () => {
  const { t } = useTranslation();

  return (
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
      <div className="politic">
        <img
          src="Pics/politique.webp"
          alt="axolotl politic"
          width="200"
          height="200"
          className="round-image-politic"
          fetchpriority="high"
          decoding="async"
          loading="eager"
          aria-hidden="true"
          role="presentation"
        />

        <div className="container-politic">
          <h1>{t("privacy.title")}</h1>

          {/* Premier paragraphe rendu séparément pour optimiser LCP */}
          <section id="section-1">
            <h2>{t("privacy.section1.title")}</h2>
            <p className="first-lcp">{t("privacy.section1.content")}</p>
          </section>

          {/* Les autres sections */}
          {[...Array(11)].map((_, i) => {
            const sectionIndex = i + 2;
            const sectionKey = `privacy.section${sectionIndex}`;

            return (
              <section key={sectionIndex} id={`section-${sectionIndex}`}>
                <h2>{t(`${sectionKey}.title`)}</h2>
                {sectionIndex === 12 ? (
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
  );
};

export default Politic;
