import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./Intro.css";

const Intro = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [zoomIn, setZoomIn] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setZoomIn(true), 400);
    setTimeout(() => setShowBubbles(true), 2500);

    const handleAudioPlay = () => {
      if (audioRef.current && !audioPlayed) {
        audioRef.current.volume = 0.05;
        try {
          audioRef.current.play();
          setAudioPlayed(true);
        } catch (error) {
          if (process.env.NODE_ENV === "development") {
            console.warn("🔇 Lecture audio bloquée", error);
          }
        }
      }
    };

    window.addEventListener("click", handleAudioPlay, { once: true });

    return () => {
      window.removeEventListener("click", handleAudioPlay);
    };
  }, [audioPlayed]);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const bubbles = [
    { label: "about", path: "/Parcours", classes: [1, 2, 12, 15, 20] },
    { label: "portfolio", path: "/Portfolio", classes: [3, 4, 9, 13, 21, 22] },
    { label: "services", path: "/Prestations", classes: [5, 6, 11, 14, 19] },
    { label: "contact", path: "/Contact", classes: [7, 10, 18, 23] },
  ];

  return (
    <>
      <Helmet>
        <title>{t("homeTitle")}</title>
        <meta name="description" content={t("homeDescription")} />
        <meta property="og:title" content={t("homeTitle")} />
        <meta property="og:description" content={t("homeDescription")} />
        <meta
          property="og:image"
          content="https://thecoolaxolotl.com/Pics/axolotllogo.webp"
        />
        <meta property="og:url" content="https://thecoolaxolotl.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className={`intro-container ${zoomIn ? "zoom-in" : ""}`}>
        <div className="background-video">
          <video autoPlay muted loop className="background-video">
            <source src="/Videos/waves2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="intro-logo-container">
          <img
            src="/Pics/axolotllogo.webp"
            alt="Logo The Cool Axolotl"
            className="intro-logo"
            width="642"
            height="654"
            loading="eager"
            decoding="async"
            role="img"
            aria-label="Logo The Cool Axolotl"
          />
        </div>

        <audio ref={audioRef} src="/Sons/axoson.mp3" loop preload="auto" />

        {showBubbles && (
          <div className="bubble-container">
            {bubbles.map((bubble, i) => (
              <button
                key={i}
                className={`bubble bubble-${i + 1}`}
                onClick={() => handleLinkClick(bubble.path)}
                aria-label={t(bubble.label)}
                tabIndex="0"
              >
                {t(bubble.label)}
                {bubble.classes.map((n) => (
                  <div
                    key={n}
                    className={`small-bubble small-bubble-${n}`}
                  ></div>
                ))}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Intro;
