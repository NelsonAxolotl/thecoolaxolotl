import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Apropos.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
// import marin from "../Vidéos/sousmarin.mp4";
import cuty from "../Pics/axopic.png";
import audioaxo from "../Son/joy.mp3";
import boat from "../Pics/axoaqua.png";
import capitain from "../Pics/capitain.webp";
import relax from "../Pics/relax.webp";

const Apropos = () => {
  const [showPage, setShowPage] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    if (showSection) {
      const timelineItems = document.querySelectorAll(".timeline-item");
      const boatImage = document.querySelector(".round-image2");
      const zoomImage = document.querySelector(".zoom-effect");
      // Intersection Observer pour gérer la visibilité de la timeline
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.3 } // Observer déclenché quand 30% de l'élément est visible
      );

      // Intersection Observer pour l'image ronde (boatImage)
      const imageObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Ajouter la classe visible pour activer la rotation
            boatImage.classList.add("visible");
          }
        },
        { threshold: 0.3 }
      );

      timelineItems.forEach((item) => observer.observe(item));
      imageObserver.observe(boatImage);
      // Intersection Observer pour l'effet de dézoom
      const zoomObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            zoomImage.classList.add("dezoom");
          }
        },
        { threshold: 0.5 }
      );

      if (zoomImage) {
        zoomObserver.observe(zoomImage);
      }
      // Nettoyage de l'observateur lors de la destruction du composant
      return () => {
        observer.disconnect();
        imageObserver.disconnect();
        if (zoomImage) zoomObserver.unobserve(zoomImage);
      };
    }
  }, [showSection]); // Réagir lorsque la section devient visible

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setShowPage(true);
    }, 500);

    const sectionTimer = setTimeout(() => {
      setShowSection(true);
    }, 500);

    const endTimer = setTimeout(() => {
      setShowEnd(true); // Affiche le footer après un délai
    }, 1000); // Vous pouvez ajuster ce délai pour contrôler l'apparition de <End />

    const slowVideo = () => {
      const video = document.querySelector(".background-vid");
      if (video) {
        video.playbackRate = 0.8;
      }
    };

    slowVideo();

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(sectionTimer);
      clearTimeout(endTimer); // Nettoie le timer de <End />
    };
  }, []);

  const [isAudioBlocked, setIsAudioBlocked] = useState();

  const playAudio = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.volume = 0.001; // Appliquer le volume réduit
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsAudioBlocked(false);
          })
          .catch(() => {
            setIsAudioBlocked(true);
          });
      }
    }
  };
  useEffect(() => {
    playAudio();
  }, []);

  return (
    <>
      <Nav />
      <div className={`parcours-container ${showPage ? "fade-in" : ""}`}>
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <video autoPlay muted loop playsInline className="background-vid">
        <source src="/Vidéos/sousmarin.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge les vidéos.
      </video>
      <audio id="background-audio" src={audioaxo} loop />
      <div className="overlay"></div>
      <div className="intro-content">
        <h1 className="parcours-title">Parcours</h1>
        <p className="p-title">
          "Un voyage singulier où chaque étape est un renouveau."
        </p>
      </div>
      {showSection && (
        <>
          <section className="naissance-section">
            <div className="image-container">
              <img
                src={cuty}
                alt="Axolotl ou sous-marin"
                className="round-image"
              />
            </div>
            <div className="text-content">
              <h2 className="section-title">Explorateur</h2>
              <p className="section-description">
                Tout a commencé par une passion pour la créativité et les idées
                uniques. Ce premier élan m'a conduit sur un chemin riche de
                découvertes et d'apprentissages. À l'image de l'axolotl, capable
                de se régénérer et d'évoluer tout en restant fidèle à son
                essence, je m'efforce de rester singulier tout en explorant sans
                cesse de nouvelles idées.
              </p>
            </div>

            {/* Section Mon Évolution */}
            <section className="evolution-section">
              <img
                src={boat}
                alt="Axolotl ou sous-marin"
                className="round-image2"
              />
              <h2 className="section-title2">Navigations</h2>
              <div className="timeline">
                <div className="timeline-item ">
                  <div className="timeline-icon icon-green">
                    <i className="fas fa-music"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">La découverte des notes</h3>
                    <div className="timeline-date">
                      <p>2001 - 2005</p>
                    </div>
                    {/* Date ajoutée ici */}
                    <p>
                      Mon voyage a commencé à Londres, où j'ai poursuivi un DEUG
                      en musicologie en tant que guitariste. Cette expérience a
                      été un tremplin : elle m'a permis de jouer en concert, de
                      perfectionner mes compétences musicales à travers l'étude
                      de divers styles (classique, traditionnel et contemporain)
                      et de collaborer avec des artistes passionnés.
                    </p>
                  </div>
                </div>
                <div className="timeline-item ">
                  <div className="timeline-icon icon-blue">
                    <i className="fa-solid fa-plane"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Les Aventures à Travers le Monde
                    </h3>
                    <div className="timeline-date">
                      <p>2006 - 2009</p>
                    </div>
                    <p>
                      J'ai exploré des cultures riches à travers divers pays
                      différents continents, travaillé dans des environnements
                      multiculturels et occupé une variété de postes. Ces
                      expériences ont élargi ma vision du monde, renforçant mon
                      appréciation des différences culturelles et leur
                      contribution au domaine créatif.
                    </p>
                  </div>
                </div>
                <div className="timeline-item ">
                  <div className="timeline-icon icon-yellow">
                    <i className="fas fa-masks-theater"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      L’Exploration de la Scène
                    </h3>
                    <div className="timeline-date">
                      <p>2010 - 2025</p>
                    </div>
                    <p>
                      Pendant 15 ans, j’ai exercé le métier de régisseur lumière
                      après une licence en techniques du spectacle vivant. J’ai
                      travaillé sur des productions variées : théâtre, concerts,
                      événements en plein air, danse et performances multimédia.{" "}
                      <br />
                      J’y ai acquis une expertise en éclairage scénique, régie
                      de spectacles et gestion des équipes techniques. <br />
                      Ce rôle m’a également permis de collaborer avec des
                      artistes de divers horizons, de comprendre les besoins
                      d’un spectacle et d’anticiper les défis logistiques.{" "}
                      <br />
                      La rigueur, l’anticipation et la capacité à travailler
                      sous pression sont devenues des compétences clés, et mon
                      approche est passée d’une simple application technique à
                      une véritable vision artistique, où l’éclairage devient un
                      moyen d’expression à part entière.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon icon-pink">
                    <i className="fas fa-at"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      La Plongée dans le Numérique
                    </h3>
                    <div className="timeline-date">
                      <p>2023 - présent</p>
                    </div>
                    <p>
                      En quête de renouveau, j'ai plongé dans l'univers du web
                      en me formant au web design et au développement
                      full-stack. Bien que cette transition radicale ait été un
                      défi, elle a été incroyablement enrichissante. <br />
                      J'ai appris à utiliser les outils de design, à coder des
                      sites interactifs, à comprendre l'architecture des
                      applications et à intégrer des solutions numériques
                      adaptées aux utilisateurs. <br />
                      Impliqué dans des projets personnels et professionnels,
                      j'ai expérimenté le design web, l'expérience utilisateur
                      et la programmation. <br />
                      Aujourd'hui, mon parcours numérique me permet de fusionner
                      mes passions pour la technologie, l'art et la créativité,
                      offrant des solutions innovantes via des plateformes
                      digitales.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mission-section">
              <img
                src={capitain}
                alt="Axolotl ou sous-marin"
                className="round-image3 zoom-effect"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <div className="text-content">
                <h2 className="section-title3">Capitaine</h2>
                <p className="section-description">
                  Aujourd’hui, je navigue comme capitaine d’un navire dans les
                  eaux de la créativité. Chaque projet est une exploration
                  unique, guidée par des valeurs fortes comme l’écoute, la
                  persévérance, et la curiosité. <br /> Je suis là pour
                  transformer vos idées en une réalité sur mesure, en mêlant
                  innovation et authenticité.
                </p>
              </div>
              <div className="interactive-section">
                <div
                  className="interactive-item"
                  data-tooltip="Trouver des solutions originales, adaptées à chaque défi."
                >
                  <i className="fas fa-lightbulb"></i>
                  <p>Créativité</p>
                </div>
                <div
                  className="interactive-item"
                  data-tooltip="Comprendre vos besoins pour proposer une approche personnalisée."
                >
                  <i className="fas fa-ear-listen"></i>
                  <p>Écoute</p>
                </div>
                <div
                  className="interactive-item"
                  data-tooltip="Répondre à des demandes variées, dans des contextes changeants."
                >
                  <i className="fas fa-sync-alt"></i>
                  <p>Adaptabilité</p>
                </div>
                <div
                  className="interactive-item"
                  data-tooltip="Transformer chaque obstacle en opportunité de renouveau."
                >
                  <i className="fas fa-leaf"></i>
                  <p>Résilience</p>
                </div>
              </div>
            </section>
          </section>

          {/* Appel à l’Action */}
          <section className="appel-a-action">
            <div className="axolotl-container">
              <img src={relax} alt="Axolotl" className="axolotl-image" />
              <div className="text-parcours">
                <p>
                  "Votre histoire pourrait bien devenir la prochaine étape de
                  mon parcours. <br />
                  Partagez vos idées, et voyons ensemble où cela nous mène !"
                </p>
              </div>
              <Link to="/Contact">
                <div className="bubble-parcours">
                  <p>Prêts à plonger ensemble ?</p>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}
      {showEnd && <End />} {/* Affiche <End /> après le délai */}
    </>
  );
};

export default Apropos;
