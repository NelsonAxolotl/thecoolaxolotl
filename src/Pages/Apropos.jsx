import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./Apropos.css";
import Nav from "../Components/Nav";
import End from "../Components/End";

import cuty from "../Pics/axopic.webp";
import boat from "../Pics/axoaqua.webp";
import capitain from "../Pics/capitain.webp";
import relax from "../Pics/relax.webp";

const Apropos = () => {
  const { t } = useTranslation();
  const [showPage, setShowPage] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    const pageTimer = setTimeout(() => setShowPage(true), 350);
    const sectionTimer = setTimeout(() => setShowSection(true), 200);
    const endTimer = setTimeout(() => setShowEnd(true), 500);

    const slowVideo = () => {
      const video = document.querySelector(".background-vid");
      if (video) video.playbackRate = 0.8;
    };
    slowVideo();

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(sectionTimer);
      clearTimeout(endTimer);
    };
  }, []);

  // Auto-play audio (comme tu l’avais)
  useEffect(() => {
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.volume = 0.01;
      audio.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!showSection) return;

    const timelineItems = document.querySelectorAll(".timeline-item");
    const boatImage = document.querySelector(".round-image2");
    const zoomImage = document.querySelector(".zoom-effect");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) boatImage.classList.add("visible");
      },
      { threshold: 0.3 }
    );

    const zoomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) zoomImage.classList.add("dezoom");
      },
      { threshold: 0.5 }
    );

    timelineItems.forEach((item) => observer.observe(item));
    if (boatImage) imageObserver.observe(boatImage);
    if (zoomImage) zoomObserver.observe(zoomImage);

    return () => {
      observer.disconnect();
      imageObserver.disconnect();
      if (zoomImage) zoomObserver.unobserve(zoomImage);
    };
  }, [showSection]);

  return (
    <>
      <Helmet>
        {/* Titre de la page */}
        <title>{t("about1.metaTitle")}</title>

        {/* Description SEO */}
        <meta name="description" content={t("about1.metaDescription")} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (pour Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={t("about1.metaTitle")} />
        <meta property="og:description" content={t("about1.metaDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecoolaxolotl.com/apropos" />
        <meta
          property="og:image"
          content="https://thecoolaxolotl.com/Pics/axopic.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("about1.metaTitle")} />
        <meta
          name="twitter:description"
          content={t("about1.metaDescription")}
        />
        <meta
          name="twitter:image"
          content="https://thecoolaxolotl.com/Pics/axopic.webp"
        />
      </Helmet>

      <Nav />
      <div className={`parcours-container ${showPage ? "fade-in" : ""}`}>
        <div className="bubbles">
          {Array(10)
            .fill()
            .map((_, i) => (
              <span key={i}></span>
            ))}
        </div>
      </div>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-vid"
        aria-hidden="true"
      >
        <source src="/Videos/sousmarin.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge les vidéos.
      </video>

      <audio id="background-audio" src="/Sons/joy.mp3" loop />

      <div className="overlay" />

      <div className="intro-content">
        <h1 className="parcours-title">{t("title")}</h1>
        <p className="p-title">{t("subtitle")}</p>
      </div>

      {showSection && (
        <>
          <section
            className="naissance-section"
            aria-label="Naissance de l'Axolotl"
          >
            <div className="image-container">
              <img
                src={cuty}
                alt="Axolotl mignon"
                className="round-image"
                width="300"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="text-content">
              <h2 className="section-title">{t("explorer")}</h2>
              <p className="section-description">{t("explorerDescription")}</p>
            </div>

            <section
              className="evolution-section"
              aria-label="Évolution de l'Axolotl"
            >
              <img
                src={boat}
                alt="Axolotl marin"
                className="round-image2"
                width="400"
                height="300"
                loading="lazy"
              />
              <h2 className="section-title2">{t("navigations")}</h2>
              <div className="timeline">
                {[
                  {
                    icon: "music",
                    color: "green",
                    title: t("discover_notes"),
                    date: t("timeline1_date"),
                    text: t("timeline1_text"),
                  },
                  {
                    icon: "plane",
                    color: "blue",
                    title: t("world_adventures"),
                    date: t("timeline2_date"),
                    text: t("timeline2_text"),
                  },
                  {
                    icon: "masks-theater",
                    color: "yellow",
                    title: t("stage_exploration"),
                    date: t("timeline3_date"),
                    text: t("timeline3_text"),
                  },
                  {
                    icon: "at",
                    color: "pink",
                    title: t("digital_dive"),
                    date: t("timeline4_date"),
                    text: t("timeline4_text"),
                  },
                ].map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className={`timeline-icon icon-${item.color}`}>
                      <i
                        className={`fas fa-${item.icon}`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{item.title}</h3>
                      <div className="timeline-date">
                        <p>{item.date}</p>
                      </div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="mission-section"
              aria-label="Mission du capitaine Axolotl"
            >
              <img
                src={capitain}
                alt="Capitaine Axolotl"
                className="round-image3 zoom-effect"
                width="150"
                height="150"
                loading="lazy"
                style={{ borderRadius: "50%" }}
              />
              <div className="text-content">
                <h2 className="section-title3">{t("captain_title")}</h2>
                <p
                  className="section-description"
                  dangerouslySetInnerHTML={{ __html: t("captain_description") }}
                />
              </div>

              <div className="interactive-section">
                {[
                  {
                    icon: "lightbulb",
                    text: t("creativity"),
                    tooltip: t("creative_solutions"),
                  },
                  {
                    icon: "ear-listen",
                    text: t("listening"),
                    tooltip: t("understanding_needs"),
                  },
                  {
                    icon: "sync-alt",
                    text: t("adaptability"),
                    tooltip: t("responding_to_demands"),
                  },
                  {
                    icon: "leaf",
                    text: t("resilience"),
                    tooltip: t("transforming_obstacles"),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="interactive-item"
                    data-tooltip={item.tooltip}
                  >
                    <i className={`fas fa-${item.icon}`} aria-hidden="true"></i>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section
            className="appel-a-action"
            aria-label="Appel à l'action final"
          >
            <div className="axolotl-container">
              <img
                src={relax}
                alt="Axolotl détendu"
                width="400"
                height="400"
                loading="lazy"
                className="axolotl-image"
              />
              <div className="text-parcours">
                <p>{t("story_message")}</p>
              </div>
              <Link to="/Contact" aria-label="Aller à la page Contact">
                <div className="bubble-parcours">
                  <p>{t("call_to_action")}</p>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}

      {showEnd && <End />}
    </>
  );
};

export default Apropos;
