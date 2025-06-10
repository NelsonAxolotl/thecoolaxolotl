import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import "./Services.css";

import Nav from "../Components/Nav";
import End from "../Components/End";
import ServiceGrid from "../Components/ServiceGrid";
import TimelineSection from "../Components/TimelineSection";
import CustomPackageSection from "../Components/CustomPackageSection";
import QuoteForm from "../Components/QuoteForm";

import react from "../Pics/axoreact.webp";
import design from "../Pics/design.webp";
import word from "../Pics/axopress.webp";

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

    send(serviceID, templateID, templateParams, userID)
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
      image: design,
      title: t("ser-vices.design.title"),
      description: t("ser-vices.design.description"),
      features: t("ser-vices.design.features", { returnObjects: true }),
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

          <ServiceGrid services={services} />

          <TimelineSection steps={steps} />
          <CustomPackageSection whyList={whyList} />
          <QuoteForm
            quoteData={quoteData}
            handleQuoteChange={handleQuoteChange}
            handleQuoteSubmit={handleQuoteSubmit}
            quoteSent={quoteSent}
            isSent={isSent}
            showAxolotl={showAxolotl}
            quoteErrorMessage={quoteErrorMessage}
            setQuoteData={setQuoteData}
          />
        </div>
      </div>

      <End />
    </>
  );
};

export default Services;
