import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";
import axo from "../Pics/axolotllogo.webp";
import art from "../Pics/arty.webp";
import introSound from "../Son/axoson.mp3";

const Intro = () => {
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);
  const [fadeOutPage, setFadeOutPage] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false); // ✅ Empêche le double clic

  const audioRef = useRef(null);
  const navigate = useNavigate();

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
          console.warn("🔇 Lecture audio bloquée", error);
        }
      }
    };

    // Attendre un premier clic ou une interaction utilisateur pour lancer l'audio
    window.addEventListener("click", handleAudioPlay, { once: true });

    // Nettoyage au moment où le composant est démonté
    return () => {
      window.removeEventListener("click", handleAudioPlay);
    };
  }, [audioPlayed]);

  const handleLinkClick = (path) => {
    if (isNavigating) return; // ✅ Empêche le double-clic
    setIsNavigating(true);
    console.log("🔗 Clique détecté sur :", path);

    setZoomOut(true);
    setFadeOutPage(true);

    // ✅ Scroll en haut avant la navigation
    window.scrollTo({ top: 0, behavior: "instant" });

    // ✅ Effet des bulles sans ralentir la navigation
    for (let i = 0; i < 100; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("transition-bubble");

      bubble.style.left = `${Math.random() * 100}%`;
      const size = 10 + Math.random() * 50;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      bubble.classList.add(
        Math.random() < 0.5 ? "bubble-pink" : "bubble-turquoise"
      );

      bubble.style.animationDuration = `${0.8 + Math.random()}s`;
      bubble.style.animationDelay = `${Math.random() * 0.3}s`;

      document.body.appendChild(bubble);
      bubble.addEventListener("animationend", () => bubble.remove());
    }

    setTimeout(() => {
      navigate(path);
      setIsNavigating(false); // ✅ Permet de cliquer à nouveau après la navigation
    }, 800);
  };

  return (
    <div
      className={`intro-container ${zoomIn ? "zoom-in" : ""} ${
        zoomOut ? "zoom-out" : ""
      } ${fadeOutPage ? "fade-out-page" : ""}`}
    >
      <img
        src={art}
        alt="abstract"
        className="background-image"
        loading="lazy"
      />

      <div className="background-video">
        <video autoPlay muted loop className="background-video">
          <source src="/Vidéos/waves2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="intro-logo-container">
        <img
          src={axo}
          alt="Logo The Cool Axolotl"
          className="intro-logo"
          loading="eager"
        />
      </div>

      <audio ref={audioRef} src={introSound} loop />

      {showBubbles && (
        <div className="bubble-container">
          <button
            className="bubble bubble-1"
            onClick={() => handleLinkClick("/Parcours")}
          >
            Parcours
            <div className="small-bubble small-bubble-1"></div>
            <div className="small-bubble small-bubble-2"></div>
            <div className="small-bubble small-bubble-12"></div>
            <div className="small-bubble small-bubble-15"></div>
            <div className="small-bubble small-bubble-20"></div>
          </button>
          <button
            className="bubble bubble-2"
            onClick={() => handleLinkClick("/Portfolio")}
          >
            Portfolio
            <div className="small-bubble small-bubble-3"></div>
            <div className="small-bubble small-bubble-4"></div>
            <div className="small-bubble small-bubble-9"></div>
            <div className="small-bubble small-bubble-13"></div>
            <div className="small-bubble small-bubble-21"></div>
            <div className="small-bubble small-bubble-22"></div>
          </button>
          <button
            className="bubble bubble-3"
            onClick={() => handleLinkClick("/Prestations")}
          >
            Prestations
            <div className="small-bubble small-bubble-5"></div>
            <div className="small-bubble small-bubble-6"></div>
            <div className="small-bubble small-bubble-11"></div>
            <div className="small-bubble small-bubble-14"></div>
            <div className="small-bubble small-bubble-19"></div>
          </button>
          <button
            className="bubble bubble-4"
            onClick={() => handleLinkClick("/Contact")}
          >
            Contact
            <div className="small-bubble small-bubble-7"></div>
            <div className="small-bubble small-bubble-10"></div>
            <div className="small-bubble small-bubble-18"></div>
            <div className="small-bubble small-bubble-23"></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Intro;
