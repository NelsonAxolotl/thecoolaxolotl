import React from "react"; // Ajoutez cette ligne
import { useEffect, useState, useRef } from "react";
import "./Intro.css";
import axo from "../Pics/axolotl2.webp";
import art from "../Pics/art.webp";
// import water from "../Vidéos/waves2.mp4";
import introSound from "../Son/axoson.mp3";

const Intro = () => {
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);
  const [fadeOutPage, setFadeOutPage] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false); // État pour suivre si l'audio a été joué

  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomIn(true);
    }, 400);

    const bubbleTimer = setTimeout(() => {
      setShowBubbles(true);
    }, 3000);

    // Essayer de lire l'audio au chargement de la page
    const playAudio = async () => {
      if (audioRef.current && !audioPlayed) {
        audioRef.current.volume = 0.01; // Volume initial faible
        audioRef.current.currentTime = 0;
        try {
          await audioRef.current.play();
          setAudioPlayed(true); // Marque l'audio comme lu
        } catch (error) {
          console.warn("Lecture automatique bloquée par le navigateur", error);
        }
      }
    };

    playAudio();

    return () => {
      clearTimeout(timer);
      clearTimeout(bubbleTimer);
    };
  }, [audioPlayed]);

  // Lecture du son au premier clic de l'utilisateur si bloqué
  const handlePlayAudioOnClick = () => {
    if (!audioPlayed) {
      audioRef.current.play();
      setAudioPlayed(true); // Empêche la répétition du son après le premier clic
    }
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setZoomOut(true);
    setFadeOutPage(true);

    // Créer 100 bulles
    for (let i = 0; i < 200; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("transition-bubble");

      // Position horizontale aléatoire
      bubble.style.left = `${Math.random() * 100}%`;

      // Taille aléatoire entre 10px et 80px
      const size = 10 + Math.random() * 70;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Appliquer un style de couleur aléatoire (rose ou turquoise)
      if (Math.random() < 0.5) {
        bubble.classList.add("bubble-pink");
      } else {
        bubble.classList.add("bubble-turquoise");
      }

      // Durée aléatoire entre 1s et 2s
      const animationDuration = 1 + Math.random();
      bubble.style.animationDuration = `${animationDuration}s`;

      // Définir un délai aléatoire entre 0s et 0.5s
      const animationDelay = Math.random() * 0.5;
      bubble.style.animationDelay = `${animationDelay}s`;

      // Ajouter la bulle au body
      document.body.appendChild(bubble);

      // Supprimer la bulle après l'animation
      bubble.addEventListener("animationend", () => bubble.remove());
    }

    // Transition de la page après 7 secondes
    setTimeout(() => {
      window.location.href = link;
    }, 2500);
  };
  return (
    <>
      <div
        onClick={handlePlayAudioOnClick} // Lecture du son au premier clic de l'utilisateur
        className={`intro-container ${zoomIn ? "zoom-in" : ""} ${
          zoomOut ? "zoom-out" : ""
        } ${fadeOutPage ? "fade-out-page" : ""}`}
      >
        <img
          src={art}
          alt="abstract"
          width="800"
          height="600"
          className="background-image"
          loading="lazy"
        />
        {/* Vidéo de fond */}
        <div className="background-video">
          <video autoPlay muted loop className="background-video">
            <source src="/Vidéos/waves2.mp4" type="video/mp4" loading="lazy" />
            Votre navigateur ne prend pas en charge les vidéos.
          </video>
        </div>
        {/* Logo avec animation de réduction */}
        <div className="intro-logo-container">
          <img
            src={axo}
            alt="Logo The Cool Axolotl"
            width="600px"
            height="600px"
            className="intro-logo"
          />
        </div>

        {/* Audio de fond (lecture automatique au montage du composant) */}
        <audio ref={audioRef} src={introSound} loop />

        {/* Bulles de navigation */}
        {showBubbles && (
          <div className="bubble-container">
            <a
              href="Parcours"
              className="bubble bubble-1"
              aria-label="Naviguer vers le parcours"
              onClick={(e) => handleLinkClick(e, "Parcours")}
            >
              Parcours
              <div className="small-bubble small-bubble-1"></div>
              <div className="small-bubble small-bubble-2"></div>
              <div className="small-bubble small-bubble-12"></div>
              <div className="small-bubble small-bubble-15"></div>
              <div className="small-bubble small-bubble-20"></div>
            </a>
            <a
              href="Portfolio"
              className="bubble bubble-2"
              aria-label="Naviguer vers le portfolio"
              onClick={(e) => handleLinkClick(e, "Portfolio")}
            >
              Portoflio
              <div className="small-bubble small-bubble-3"></div>
              <div className="small-bubble small-bubble-4"></div>
              <div className="small-bubble small-bubble-9"></div>
              <div className="small-bubble small-bubble-13"></div>
              <div className="small-bubble small-bubble-21"></div>
              <div className="small-bubble small-bubble-22"></div>
            </a>
            <a
              href="Prestations"
              className="bubble bubble-3"
              aria-label="Naviguer vers les prestations"
              onClick={(e) => handleLinkClick(e, "Prestations")}
            >
              Prestations
              <div className="small-bubble small-bubble-5"></div>
              <div className="small-bubble small-bubble-6"></div>
              <div className="small-bubble small-bubble-11"></div>
              <div className="small-bubble small-bubble-14"></div>
              <div className="small-bubble small-bubble-19"></div>
            </a>
            <a
              href="Contact"
              className="bubble bubble-4"
              aria-label="Naviguer vers le contact"
              onClick={(e) => handleLinkClick(e, "Contact")}
            >
              Contact
              <div className="small-bubble small-bubble-7"></div>
              <div className="small-bubble small-bubble-10"></div>
              <div className="small-bubble small-bubble-18"></div>
              <div className="small-bubble small-bubble-23"></div>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Intro;
