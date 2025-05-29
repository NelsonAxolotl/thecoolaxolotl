import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importer le hook
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
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Attends 100ms avant de forcer le scroll
  }, []);
  const { t, i18n } = useTranslation(); // Utiliser le hook pour obtenir `t` et `i18n`
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
    }, 350);

    const sectionTimer = setTimeout(() => {
      setShowSection(true);
    }, 200);

    const endTimer = setTimeout(() => {
      setShowEnd(true); // Affiche le footer après un délai
    }, 500); // Vous pouvez ajuster ce délai pour contrôler l'apparition de <End />

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
  }, [showPage]);

  const [isAudioBlocked, setIsAudioBlocked] = useState();

  const playAudio = () => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.volume = 0.01; // Appliquer le volume réduit
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
        <source src="/Videos/sousmarin.mp4" type="video/mp4" loading="lazy" />
        Votre navigateur ne prend pas en charge les vidéos.
      </video>
      <audio id="background-audio" src={audioaxo} loop />
      <div className="overlay"></div>
      <div className="intro-content">
        <h1 className="parcours-title">{t("title")}</h1>
        <p className="p-title">{t("subtitle")}</p>
      </div>
      {showSection && (
        <>
          <section className="naissance-section">
            <div className="image-container">
              <img
                src={cuty}
                alt="Axolotl ou sous-marin"
                className="round-image"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="text-content">
              <h2 className="section-title">{t("explorer")}</h2>
              <p className="section-description">{t("explorerDescription")}</p>
            </div>

            {/* Section Mon Évolution */}
            <section className="evolution-section">
              <img
                src={boat}
                alt="Axolotl ou sous-marin"
                className="round-image2"
                width="400"
                height="400"
                loading="lazy"
              />
              <h2 className="section-title2">{t("navigations")}</h2>
              <div className="timeline">
                <div className="timeline-item ">
                  <div className="timeline-icon icon-green">
                    <i className="fas fa-music"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{t("discover_notes")}</h3>
                    <div className="timeline-date">
                      <p>{t("timeline1_date")}</p>
                    </div>
                    {/* Date ajoutée ici */}
                    <p>{t("timeline1_text")}</p>
                  </div>
                </div>
                <div className="timeline-item ">
                  <div className="timeline-icon icon-blue">
                    <i className="fa-solid fa-plane"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{t("world_adventures")}</h3>
                    <div className="timeline-date">
                      <p>{t("timeline2_date")}</p>
                    </div>
                    <p>{t("timeline2_text")}</p>
                  </div>
                </div>
                <div className="timeline-item ">
                  <div className="timeline-icon icon-yellow">
                    <i className="fas fa-masks-theater"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{t("stage_exploration")}</h3>
                    <div className="timeline-date">
                      <p>{t("timeline3_date")}</p>
                    </div>
                    <p>{t("timeline3_text")}</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon icon-pink">
                    <i className="fas fa-at"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{t("digital_dive")}</h3>
                    <div className="timeline-date">
                      <p>{t("timeline4_date")}</p>
                    </div>
                    <p>{t("timeline4_text")}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mission-section">
              <img
                src={capitain}
                alt="Axolotl ou sous-marin"
                className="round-image3 zoom-effect"
                width="400"
                height="400"
                loading="lazy"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <div className="text-content">
                <h2 className="section-title3">{t("captain_title")}</h2>
                <p
                  className="section-description"
                  dangerouslySetInnerHTML={{
                    __html: t("captain_description"), // Cela permettra de gérer les balises HTML comme <br />
                  }}
                />
              </div>
              <div className="interactive-section">
                <div
                  className="interactive-item"
                  data-tooltip={t("creative_solutions")}
                >
                  <i className="fas fa-lightbulb"></i>
                  <p>{t("creativity")}</p>
                </div>
                <div
                  className="interactive-item"
                  data-tooltip={t("understanding_needs")}
                >
                  <i className="fas fa-ear-listen"></i>
                  <p>{t("listening")}</p>
                </div>
                <div
                  className="interactive-item"
                  data-tooltip={t("responding_to_demands")}
                >
                  <i className="fas fa-sync-alt"></i>
                  <p>{t("adaptability")}</p>
                </div>
                <div
                  className="interactive-item"
                  data-tooltip={t("transforming_obstacles")}
                >
                  <i className="fas fa-leaf"></i>
                  <p>{t("resilience")}</p>
                </div>
              </div>
            </section>
          </section>

          {/* Appel à l’Action */}
          <section className="appel-a-action">
            <div className="axolotl-container">
              <img
                src={relax}
                alt="Axolotl"
                width="400"
                height="400"
                loading="lazy"
                className="axolotl-image"
              />
              <div className="text-parcours">
                <p>{t("story_message")}</p>
              </div>
              <Link to="/Contact">
                <div className="bubble-parcours">
                  <p>{t("call_to_action")}</p>
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
