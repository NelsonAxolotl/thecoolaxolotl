import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next"; // Importation du hook
import { Trans } from "react-i18next";

import "./Services.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
import react from "../Pics/axoreact.webp";
import politic from "../Pics/politic.webp";
import word from "../Pics/axopress.webp"; // Ajoutez une image WordPress si nécessaire
import fly from "../Pics/fly.png";
// import axowork from "../Pics/axowork.webp";
// import know from "../Pics/know.webp";
import proto from "../Pics/proto2.webp";
import dev from "../Pics/production2.webp";
// import deplo from "../Pics/deplo.webp";
// import maintenance from "../Pics/maintenance.webp";
import hand from "../Pics/hand2.webp";
import analyse from "../Pics/analyse.webp";
import update from "../Pics/update.webp";
import int from "../Pics/prototype2.webp";
import boutik from "../Pics/boutik.webp";

const Services = () => {
  const { t } = useTranslation(); // Utilisation du hook pour la traduction
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Attends 100ms avant de forcer le scroll
  }, []);
  const [showNav, setShowNav] = useState(false);

  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    projectType: "",
    otherProjectType: "",
    clientType: "",
    otherClientType: "",
    projectNature: "",
    numberOfPages: "",
    ideas: "",
    consent: false, // Si tu l'utilises pour une case à cocher
  });

  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteErrorMessage, setQuoteErrorMessage] = useState("");
  const [showAxolotl, setShowAxolotl] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.setAttribute("data-inview", "true");
            observer.unobserve(entry.target); // Stoppe l'observation une fois visible
          }
        });
      },
      { threshold: 0.1 } // Déclenche lorsque 10% de l'élément est visible
    );

    const target = document.querySelector(".quote-intro");
    if (target) observer.observe(target);

    const serviceCards = document.querySelectorAll(".service-card"); // Sélectionner toutes les cartes de service
    serviceCards.forEach((card) => observer.observe(card)); // Observer chaque carte

    const timelineItems = document.querySelectorAll(".timeline-item2");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true); // Affiche la navigation après 300ms
    }, 300);

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  const handleQuoteChange = (e) => {
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      projectType,
      otherProjectType,
      clientType,
      otherClientType,
      projectNature,
      numberOfPages,
      ideas,
    } = quoteData;

    const serviceID = "service_8gb8bdg"; // Remplacez par votre ID de service
    const templateID = "template_2tt8tpr"; // Remplacez par votre ID de modèle
    const userID = "gyOAWsFJuZoqM16PD"; // Remplacez par votre ID utilisateur

    const templateParams = {
      name,
      email,
      projectType: projectType === "autre" ? otherProjectType : projectType,
      clientType: clientType === "autre" ? otherClientType : clientType,
      projectNature,
      numberOfPages,
      ideas,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Devis envoyé avec succès:", response);
        setQuoteSent(true);
        setQuoteErrorMessage("");
        setShowAxolotl(true); // Affiche l'axolotl
        setIsSent(true);
        setQuoteData({
          name: "",
          email: "",
          projectType: "",
          otherProjectType: "",
          projectNature: "",
          numberOfPages: "",
          ideas: "",
        });

        setTimeout(() => {
          setQuoteSent(false);
          setShowAxolotl(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du devis:", error);
        setQuoteSent(false);
        setIsSent(true);
        setQuoteErrorMessage(
          "Une erreur est survenue. Veuillez réessayer plus tard."
        );
      });
  };
  useEffect(() => {
    const axolotlImage = document.querySelector(".axolotl-image-happy");
    if (axolotlImage) {
      const handleAnimationEnd = (e) => {
        e.target.classList.remove("sent");
      };
      axolotlImage.addEventListener("animationend", handleAnimationEnd);

      return () => {
        axolotlImage.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [isSent]);

  const services = [
    {
      id: "react",
      image: react,
      title: t("ser-vices.react.title"),
      description: t("ser-vices.react.description"),
      features: t("ser-vices.react.features", { returnObjects: true }),
    },
    {
      id: "design",
      image: politic,
      title: t("ser-vices.design.title"),
      description: t("ser-vices.design.description"),
      features: t("ser-vices.design.features", { returnObjects: true }),
    },
    {
      id: "wordpress",
      image: word,
      title: t("ser-vices.wordpress.title"),
      description: t("ser-vices.wordpress.description"),
      features: t("ser-vices.wordpress.features", { returnObjects: true }),
    },
  ];
  const steps = t("timeline.steps", { returnObjects: true });
  const whyList = t("customPackage.why", { returnObjects: true });

  useEffect(() => {
    const projectTypeField = document.getElementById("projectType");
    const otherProjectTypeField = document.getElementById(
      "otherProjectTypeField"
    );

    if (!projectTypeField || !otherProjectTypeField) return; // Évite l'erreur

    const handleProjectTypeChange = () => {
      otherProjectTypeField.style.display =
        projectTypeField.value === "autre" ? "block" : "none";
    };

    projectTypeField.addEventListener("change", handleProjectTypeChange);

    return () => {
      projectTypeField.removeEventListener("change", handleProjectTypeChange);
    };
  }, []);

  return (
    <>
      <Nav />
      <div className={`nav-container-services ${showNav ? "fade-in" : ""}`}>
        <div className="services-container">
          <h1>{t("prestations")}</h1>
          <p className="intro-text">
            <Trans
              i18nKey="prestationsIntro"
              components={[
                <span key={0}>React</span>,
                <span key={1}>Javascript</span>,
                <span key={2}>Vue.js</span>,
              ]}
            />
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className={`service-card ${
                  service.title.includes("WordPress") ? "future" : ""
                }`}
                key={index}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="service-image"
                />
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Nouvelle section pour Shopify */}
          <div className="shopify-section">
            <img src={boutik} alt="Shopify" className="shopify-image" />
            <h2 className="shopify-title">{t("shopify.title")}</h2>
            <p className="shopify-description">
              {t("shopify.description")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
            <div className="shopflex">
              <ul className="shopify-features">
                {t("shopify.features", { returnObjects: true }).map(
                  (feature, i) => (
                    <li key={i}>{feature}</li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="timeline-container2">
            <h2 className="timeline-title2">{t("timeline.title")}</h2>
            <div className="timeline2">
              {steps.map((step, index) => (
                <div
                  className={`timeline-item2 ${
                    index % 2 === 0 ? "left" : "right"
                  } hidden`}
                  key={index}
                >
                  <span className="timeline-number2">{index + 1}</span>
                  <div className="timeline-content2">
                    <h3 className="timeline-step2">{step.title}</h3>
                    <p className="timeline-description2">{step.description}</p>
                  </div>
                  <div className="timeline-image2">
                    <img
                      src={[hand, analyse, proto, int, dev, update][index]}
                      alt={`Step ${index + 1}`}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End Timeline Section */}
          {/* Avant la section de devis */}
          <div className="quote-intro">
            <h2>{t("customPackage.title")}</h2>
            <p>{t("customPackage.intro")}</p>

            <div className="texte-centre">
              <div className="flex-pack">
                <h3>{t("customPackage.whyTitle")}</h3>
                {whyList.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <br />
              </div>

              <div className="package-sur-mesure">
                <p>
                  <strong>{t("customPackage.offerTitle")}</strong>
                </p>
                <p>{t("customPackage.offerDescription")}</p>
                <p>
                  <strong>
                    <a href="mailto:thecoolaxolotldesigner.com">
                      <span role="img" aria-label="mail">
                        📩
                      </span>
                      {t("customPackage.contact")}
                    </a>
                  </strong>
                </p>
                <p>{t("customPackage.estimation")}</p>
              </div>
            </div>
          </div>
          {/* Devis Section */}
          <div className="quote-section">
            <h2>{t("quote.title")}</h2>

            <p>{t("quote.intro.line1")}</p>
            <p>{t("quote.intro.line2")}</p>
            <p>{t("quote.intro.line3")}</p>
            <div className="tarifs">
              <h3>{t("quote.tarifs.title")}</h3>
              <p>{t("quote.tarifs.description1")}</p>
              <p>{t("quote.tarifs.description2")}</p>
              <p className="tarifs-verts">{t("quote.tarifs.description3")}</p>
              <ul>
                <li>
                  <strong>{t("quote.tarifs.daily.label")}</strong>
                  <p>{t("quote.tarifs.daily.description")}</p>
                  <p>{t("quote.tarifs.daily.description2")}</p>
                </li>
                <li>
                  <strong>{t("quote.tarifs.hourly.label")}</strong>
                  <p>{t("quote.tarifs.hourly.description")}</p>
                  <p>{t("quote.tarifs.hourly.description2")}</p>
                </li>
              </ul>
              <p>{t("quote.tarifs.note")}</p>
            </div>
            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <label htmlFor="name">{t("quote.form.name")} :</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("quote.form.name")}
                value={quoteData.name || ""}
                onChange={handleQuoteChange}
                required
              />

              <label htmlFor="email">{t("quote.form.email")} :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("quote.form.email")}
                value={quoteData.email || ""}
                onChange={handleQuoteChange}
                required
              />

              <label htmlFor="projectType">
                {t("quote.form.projectType")} :
              </label>
              <select
                id="projectType"
                name="projectType"
                value={quoteData.projectType || ""}
                onChange={handleQuoteChange}
                required
              >
                <option value="">{t("quote.form.projectType")} :</option>
                <option value="site vitrine">
                  {t("quote.form.projectTypeOptions.vitrine")}
                </option>
                <option value="plateform web">
                  {t("quote.form.projectTypeOptions.plateform")}
                </option>
                <option value="blog">
                  {t("quote.form.projectTypeOptions.blog")}
                </option>
                <option value="portfolio">
                  {t("quote.form.projectTypeOptions.portfolio")}
                </option>
                <option value="boutique en ligne">
                  {t("quote.form.projectTypeOptions.ecommerce")}
                </option>
                <option value="autre">
                  {t("quote.form.projectTypeOptions.autre")}
                </option>
              </select>

              {quoteData.projectType === "autre" && (
                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="otherProjectType"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: "500",
                    }}
                  >
                    {t("quote.form.otherProjectType")} :
                  </label>
                  <input
                    type="text"
                    id="otherProjectType"
                    name="otherProjectType"
                    placeholder={t("quote.form.otherProjectType")}
                    value={quoteData.otherProjectType || ""}
                    onChange={handleQuoteChange}
                    style={{
                      width: "500px",
                      padding: "10px",
                      fontSize: "16px",
                      height: "40px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              )}

              <label htmlFor="clientType">{t("quote.form.clientType")} :</label>
              <select
                id="clientType"
                name="clientType"
                value={quoteData.clientType || ""}
                onChange={handleQuoteChange}
                required
              >
                <option value="">{t("quote.form.clientType")}</option>
                <option value="particulier">
                  {t("quote.form.clientTypeOptions.particulier")}
                </option>
                <option value="entreprise">
                  {t("quote.form.clientTypeOptions.entreprise")}
                </option>
                <option value="association">
                  {t("quote.form.clientTypeOptions.association")}
                </option>
                <option value="autre">
                  {t("quote.form.clientTypeOptions.autre")}
                </option>
              </select>

              {quoteData.clientType === "autre" && (
                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="otherClientType"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: "500",
                    }}
                  >
                    {t("quote.form.otherClientType")} :
                  </label>
                  <input
                    type="text"
                    id="otherClientType"
                    name="otherClientType"
                    placeholder={t("quote.form.otherClientType")}
                    value={quoteData.otherClientType || ""}
                    onChange={handleQuoteChange}
                    style={{
                      width: "500px",
                      padding: "10px",
                      fontSize: "16px",
                      height: "40px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              )}

              <label htmlFor="projectNature">
                {t("quote.form.projectNature")} :
              </label>
              <select
                id="projectNature"
                name="projectNature"
                value={quoteData.projectNature || ""}
                onChange={handleQuoteChange}
                required
              >
                <option value="">{t("quote.form.projectNature")}</option>
                <option value="maquette">
                  {t("quote.form.projectNatureOptions.maquette")}
                </option>
                <option value="creation">
                  {t("quote.form.projectNatureOptions.creation")}
                </option>
                <option value="autre">
                  {t("quote.form.projectNatureOptions.autre")}
                </option>
              </select>

              <label htmlFor="numberOfPages">
                {t("quote.form.numberOfPages")} :
              </label>
              <input
                type="number"
                id="numberOfPages"
                name="numberOfPages"
                min="0"
                placeholder={t("quote.form.numberOfPages")}
                value={quoteData.numberOfPages || ""}
                onChange={handleQuoteChange}
                required
              />

              <label htmlFor="ideas">{t("quote.form.ideas")}</label>
              <textarea
                id="ideas"
                name="ideas"
                rows="4"
                style={{
                  width: "100%",
                  height: "200px",
                  fontSize: "16px",
                  padding: "10px",
                }}
                placeholder={t("quote.form.ideas")}
                value={quoteData.ideas || ""}
                onChange={handleQuoteChange}
              ></textarea>
              <p>
                <strong>{t("quote.form.domainNote")}</strong>
              </p>

              <button type="submit" className="quote-button">
                {t("quote.form.submit")}
              </button>

              <div className="consent-cont">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={quoteData.consent || false}
                  onChange={(e) =>
                    setQuoteData({ ...quoteData, consent: e.target.checked })
                  }
                  required
                />
                <label htmlFor="consent">{t("quote.form.consent")}</label>
              </div>
            </form>
            {quoteSent && (
              <p className="success-message" style={{ marginTop: "30px" }}>
                {t("quote.messages.success")}
              </p>
            )}
            {isSent && showAxolotl && (
              <div className="axolotl-container-happy2">
                <img
                  src={fly}
                  alt="Axolotl"
                  className="axolotl-image-happy2 sent"
                  onAnimationEnd={(e) => {
                    e.target.classList.remove("sent");
                  }}
                />
              </div>
            )}
            {quoteErrorMessage && (
              <p className="error-message" style={{ marginTop: "20px" }}>
                {t("quote.messages.error")}
              </p>
            )}

            {/* Ajout de la nouvelle section pour envoyer des fichiers par e-mail */}
            <div className="file">
              <p>
                {t("file.sendInstruction")}{" "}
                <a href="mailto:thecoolaxolotldesigner@designer.com">
                  thecoolaxolotldesigner@designer.com
                </a>
              </p>
              <p>{t("file.reliabilityNote")}</p>
            </div>
          </div>
        </div>
      </div>

      <End />
    </>
  );
};

export default Services;
