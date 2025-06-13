import { Trans, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

import "./Politic.css";

const Nav = lazy(() => import("../Components/Nav"));
const End = lazy(() => import("../Components/End"));

const Politic = () => {
  const { t, ready } = useTranslation();

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

      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>

      <main className="politic">
        <div className="image-wrapper">
          <img
            src="Pics/politique.webp"
            alt=""
            width="200"
            height="200"
            className="round-image-politic"
            decoding="async"
            loading="lazy"
            fetchpriority="low"
            aria-hidden="true"
            role="presentation"
          />
        </div>

        <div className="container-politic">
          <h1>{t("privacy.title")}</h1>

          {ready ? (
            [...Array(12)].map((_, i) => {
              const sectionKey = `privacy.section${i + 1}`;
              return (
                <section key={i} id={`section-${i + 1}`}>
                  <h2>{t(`${sectionKey}.title`)}</h2>
                  <p>
                    {i + 1 === 12 ? (
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
                      />
                    ) : (
                      t(`${sectionKey}.content`)
                    )}
                  </p>
                </section>
              );
            })
          ) : (
            // ⚡ Fallback HTML statique pour LCP boost
            <section>
              <h2>Politique de confidentialité</h2>
              <p>
                Nous respectons votre vie privée. Cette politique explique
                comment vos données sont utilisées.
              </p>
            </section>
          )}
        </div>
      </main>

      <Suspense fallback={null}>
        <End />
      </Suspense>
    </>
  );
};

export default Politic;
