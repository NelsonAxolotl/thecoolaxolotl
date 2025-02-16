import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
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
      title: "Développement avec React",
      description:
        "Création de sites vitrines modernes, interactifs et performants pour offrir des expériences utilisateur fluides.",
      image: react,
      features: [
        "✨ Design moderne et animation",
        "✨ Performances et le SEO",
        "✨ Adaptabilité totale",
      ],
    },
    {
      title: "Design sur mesure",
      description:
        "Création d'interfaces uniques et sur mesure pour une expérience utilisateur captivante, quel que soit l'outil utilisé.",
      image: politic,
      features: [
        "✨ Étude de votre identité visuelle",
        "✨ Prototypes interactifs",
        "✨ Design responsive",
      ],
    },
    {
      title: "Sites avec WordPress (À venir)",
      description:
        "Prochainement, création de sites vitrines avec WordPress pour gérer vos sites de manière autonome et ludique.",
      image: word,
      features: [
        "✨ Gestion autonome du contenu",
        "✨ Idéal pour les sites vitrines simples",
        "✨ Mise à jour et maintenance",
      ],
    },
  ];

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
          <h1>Prestations</h1>
          <p className="intro-text">
            Passionné par la création de sites vitrines modernes et efficaces,{" "}
            j'utilise des outils puissants comme <span>React</span>,{" "}
            <span>Javascript</span> et <span>Vue.js</span> pour concevoir des
            solutions qui reflètent votre image et répondent à vos besoins. Mon
            engagement est d'apporter un regard frais, de travailler avec
            rigueur, et de m'assurer que chaque projet soit une réussite.
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
            <h2 className="shopify-title">🛍️ Création de sites e-commerce</h2>
            <p className="shopify-description">
              Besoin de créer une boutique en ligne simple, mais performante?
              <br /> Je vous propose des solutions avec des plateformes de
              e-commerce
              <br />
              fiable et flexible, idéale pour gérer votre boutique en ligne en
              toute simplicité. <br />
              Profitez d'une boutique prête à l'emploi, personnalisée selon vos
              besoins, <br />
              et facile à gérer sans compétences techniques.
            </p>
            <div className="shopflex">
              <ul className="shopify-features">
                <li>Création de votre boutique en ligne</li>
                <li>Gestion des produits et commandes</li>
                <li>Design moderne et responsive</li>
                <li>Intégration des moyens de paiement </li>
                <li>Suivi des ventes en temps réel</li>
              </ul>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="timeline-container2">
            <h2 className="timeline-title2">Processus</h2>
            <div className="timeline2">
              <div className="timeline-item2 left hidden">
                <span className="timeline-number2">1</span>
                <div className="timeline-content2">
                  <h3 className="timeline-step2">Faisons connaissance</h3>
                  <p className="timeline-description2">
                    Prenons le temps d’échanger sur votre projet afin de cerner
                    vos besoins, vos aspirations et vos objectifs, et de vous
                    proposer la solution la plus adaptée.
                  </p>
                </div>
                <div className="timeline-image2">
                  <img
                    src={hand}
                    alt="Axolotl Step 1"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="timeline-item2 right hidden">
                <span className="timeline-number2">2</span>
                <div className="timeline-content2">
                  <h3 className="timeline-step2">
                    Analyse de votre produit et secteur
                  </h3>
                  <p className="timeline-description2">
                    Lors de la phase de découverte, j'explore votre métier, vos
                    attentes et vos besoins spécifiques. J'analyse vos
                    utilisateurs et les tendances du marché pour définir des
                    objectifs clairs et concevoir une solution sur-mesure.
                  </p>
                </div>
                <div className="timeline-image2">
                  <img
                    src={analyse}
                    alt="Axolotl Step 2"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="timeline-item2 left hidden">
                <span className="timeline-number2">3</span>
                <div className="timeline-content2">
                  <h3 className="timeline-step2">Conception et prototype</h3>
                  <p className="timeline-description2">
                    Je conçois des prototypes pour vous permettre de visualiser
                    votre futur projet. Vos retours et préférences guident
                    ensuite la création des designs finaux.
                  </p>
                </div>
                <div className="timeline-image2">
                  <img
                    src={proto}
                    alt="Axolotl Step 1"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="timeline-item2 right hidden">
                <span className="timeline-number2">4</span>
                <div className="timeline-content2">
                  <h3 className="timeline-step2">
                    Développement et intégration
                  </h3>
                  <p className="timeline-description2">
                    J'implante les fonctionnalités définies, intégrons les
                    modèles et les contenus, et déployons une plateforme
                    provisoire pour collecter vos retours et effectuer les
                    ajustements nécessaires.
                  </p>
                </div>
                <div className="timeline-image2">
                  <img
                    src={int}
                    alt="Axolotl Step 1"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="timeline-item2 left hidden">
                <span className="timeline-number2">5</span>
                <div className="timeline-content2">
                  <h3 className="timeline-step2">
                    Déploiement/mise en production
                  </h3>
                  <p className="timeline-description2">
                    Une fois validé, Je déploie votre projet dans un
                    environnement optimisé, assurant sa robustesse, sa stabilité
                    et ses performances.
                  </p>
                </div>
                <div className="timeline-image2">
                  <img
                    src={dev}
                    alt="Axolotl Step 1"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="timeline-item2 right hidden">
                <span className="timeline-number2">6</span>
                <div className="timeline-content2">
                  <h3 className="timeline-step2">Maintenance</h3>
                  <p className="timeline-description2">
                    J'offre une maintenance personnalisée pour assurer des
                    améliorations continues et préserver votre présence en ligne
                    en accord avec les dernières tendances.
                  </p>
                </div>
                <div className="timeline-image2">
                  <img
                    src={update}
                    alt="Axolotl Step 6"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End Timeline Section */}
          {/* Avant la section de devis */}
          <div className="quote-intro">
            <h2>🌟 Package Sur Mesure 🌟</h2>
            <p>
              Chaque projet est unique, et je comprends que certains besoins
              sont plus simples que d'autres. <br />
              Je propose des solutions personnalisées adaptées à la complexité
              de votre projet et budget.
            </p>

            <div className="texte-centre">
              <div className="flex-pack">
                <h3>💡 Pourquoi un package sur mesure ?</h3>
                <p>✔️ Un tarif ajusté selon vos besoins réels</p>
                <p>✔️ Une solution flexible et évolutive</p>
                <p>✔️ Un accompagnement pour votre projet</p>
                <br />
              </div>

              <div className="package-sur-mesure">
                <p>
                  <strong>🔹 Un package sur mesure !</strong>
                </p>
                <p>
                  Plutôt qu’un tarif à la journée ou à l’heure, j'adapte la
                  prestation <br />à vos besoins réels, pour une solution plus
                  économique et efficace. 🚀
                </p>
                <p>
                  <strong>
                    📩{" "}
                    <a href="mailto:thecoolaxolotldesigner.com">
                      Contactez-moi
                    </a>
                  </strong>{" "}
                </p>
                <p>pour une estimation personnalisée !</p>
              </div>
            </div>
          </div>

          {/* Devis Section */}
          <div className="quote-section">
            <h2>Demander un devis</h2>

            <p>
              Si vous êtes intéressé par mes services et souhaitez obtenir{" "}
              <br />
              un devis personnalisé, remplissez le formulaire ci-dessous.{" "}
            </p>
            <p>Je reviendrais vers vous dans les plus brefs délais.</p>

            <div className="tarifs">
              <h3>💰 Tarifs standards :</h3>

              <p>
                Je propose diverses prestations de développement front-end avec
                React <br />à des tarifs adaptés en fonction de la durée et de
                la complexité du projet.
              </p>
              <p>
                Voici mes <strong>tarifs standards</strong> :
              </p>
              <ul>
                <li>
                  <strong>200€ / jour</strong> : <br />
                  <p>
                    Cela inclut une journée complète de travail, généralement de
                    7 heures. <br />
                    Ce tarif est parfait pour des missions de courte ou moyenne
                    durée (1 à 3 jours).
                  </p>{" "}
                </li>
                <li>
                  <strong>30€ / heure</strong> : <br />
                  <p>
                    Pour des missions ponctuelles ou des tâches plus
                    spécifiques, je facture à l'heure. <br />
                    Ce tarif est adapté pour les projets nécessitant des
                    interventions ponctuelles ou des consultations techniques.
                  </p>
                </li>
              </ul>
              <p>
                Les prix sont <strong>hors taxes</strong> et peuvent varier en
                fonction de la durée de la mission, de la complexité et des
                délais.
              </p>
            </div>
            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <label htmlFor="name">Votre nom :</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Entrez votre nom"
                value={quoteData.name || ""}
                onChange={handleQuoteChange}
                required
              />

              <label htmlFor="email">Votre email :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrez votre email"
                value={quoteData.email || ""}
                onChange={handleQuoteChange}
                required
              />

              <label htmlFor="projectType">Type de projet :</label>
              <select
                id="projectType"
                name="projectType"
                value={quoteData.projectType || ""}
                onChange={handleQuoteChange}
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="site vitrine">Site vitrine</option>
                <option value="plateform web">Plateforme web</option>
                <option value="blog">Blog</option>
                <option value="portfolio">Portfolio</option>
                <option value="boutique en ligne">Boutique en ligne</option>
                <option value="autre">Autre</option>
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
                    Précisez votre projet :
                  </label>
                  <input
                    type="text"
                    id="otherProjectType"
                    name="otherProjectType"
                    placeholder="Décrivez le type de projet"
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

              <label htmlFor="clientType">Type de client :</label>
              <select
                id="clientType"
                name="clientType"
                value={quoteData.clientType || ""}
                onChange={handleQuoteChange}
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="particulier">Particulier</option>
                <option value="entreprise">Entreprise</option>
                <option value="association">Association</option>
                <option value="autre">Autre</option>
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
                    Précisez votre type de client :
                  </label>
                  <input
                    type="text"
                    id="otherClientType"
                    name="otherClientType"
                    placeholder="Décrivez le type de client"
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

              <label htmlFor="projectNature">Nature du projet :</label>
              <select
                id="projectNature"
                name="projectNature"
                value={quoteData.projectNature || ""}
                onChange={handleQuoteChange}
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="maquette">Maquette</option>
                <option value="creation">Création complète</option>
              </select>

              <label htmlFor="numberOfPages">Nombre de pages :</label>
              <input
                type="number"
                id="numberOfPages"
                name="numberOfPages"
                min="0"
                placeholder="Indiquez le nombre de pages"
                value={quoteData.numberOfPages || ""}
                onChange={handleQuoteChange}
                required
              />

              <label htmlFor="ideas">Avez-vous des idées ?</label>
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
                placeholder="Détaillez vos idées"
                value={quoteData.ideas || ""}
                onChange={handleQuoteChange}
              ></textarea>

              <p>
                <strong>
                  Veuillez noter que le coût du nom de domaine n'est pas inclus
                  <br />
                  dans le devis, il sera ajouté selon le fournisseur choisi.
                </strong>
              </p>

              <button type="submit" className="quote-button">
                Demander un devis
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
                <label htmlFor="consent">
                  En soumettant ce formulaire, vous acceptez que les
                  informations saisies soient utilisées pour permettre de vous
                  recontacter en retour dans le cadre d’une demande de devis ou
                  de renseignements.
                </label>
              </div>
            </form>
            {quoteSent && (
              <p className="success-message" style={{ marginTop: "30px" }}>
                Devis envoyé avec succès !
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
                {quoteErrorMessage}
              </p>
            )}

            {/* Ajout de la nouvelle section pour envoyer des fichiers par e-mail */}
            <div className="file">
              <p>
                Pour m'aider à mieux comprendre vos besoins et projets, vous
                pouvez également envoyer des fichiers supplémentaires (images,
                PDF) en pièce jointe à l'adresse :{" "}
                <a href="mailto:thecoolaxolotldesigner.com">
                  thecoolaxolotldesigner.com
                </a>
              </p>
              <p>
                Cette méthode est rapide et permet de garantir que je reçois vos
                fichiers dans leur intégralité.
              </p>
            </div>
          </div>
        </div>
      </div>

      <End />
    </>
  );
};

export default Services;
