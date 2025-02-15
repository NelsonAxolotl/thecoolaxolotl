import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const audioRef = useRef(null);
  const navigate = useNavigate(); // ✅ Utilisation de useNavigate

  useEffect(() => {
    setTimeout(() => setZoomIn(true), 400);
    setTimeout(() => setShowBubbles(true), 3000);

    const playAudio = async () => {
      if (audioRef.current && !audioPlayed) {
        audioRef.current.volume = 0.01;
        try {
          await audioRef.current.play();
          setAudioPlayed(true);
        } catch (error) {
          console.warn("🔇 Lecture audio bloquée", error);
        }
      }
    };

    playAudio();
  }, [audioPlayed]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    console.log("🔗 Clique détecté sur :", path);

    setZoomOut(true);
    setFadeOutPage(true);

    // Effet des bulles avant navigation
    for (let i = 0; i < 200; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("transition-bubble");

      bubble.style.left = `${Math.random() * 100}%`;
      const size = 10 + Math.random() * 70;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      if (Math.random() < 0.5) {
        bubble.classList.add("bubble-pink");
      } else {
        bubble.classList.add("bubble-turquoise");
      }

      bubble.style.animationDuration = `${1 + Math.random()}s`;
      bubble.style.animationDelay = `${Math.random() * 0.5}s`;

      document.body.appendChild(bubble);
      bubble.addEventListener("animationend", () => bubble.remove());
    }

    // Navigation après animation
    setTimeout(() => navigate(path), 2000);
  };

  return (
    <div
      onClick={() => {
        if (!audioPlayed) {
          audioRef.current.play();
          setAudioPlayed(true);
        }
      }}
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
          <Link
            to="/Parcours"
            className="bubble bubble-1"
            onClick={(e) => handleLinkClick(e, "/Parcours")}
          >
            Parcours
            <div className="small-bubble small-bubble-1"></div>
            <div className="small-bubble small-bubble-2"></div>
            <div className="small-bubble small-bubble-12"></div>
          </Link>
          <Link
            to="/Portfolio"
            className="bubble bubble-2"
            onClick={(e) => handleLinkClick(e, "/Portfolio")}
          >
            Portfolio
            <div className="small-bubble small-bubble-3"></div>
            <div className="small-bubble small-bubble-4"></div>
            <div className="small-bubble small-bubble-9"></div>
          </Link>
          <Link
            to="/Prestations"
            className="bubble bubble-3"
            onClick={(e) => handleLinkClick(e, "/Prestations")}
          >
            Prestations
            <div className="small-bubble small-bubble-5"></div>
            <div className="small-bubble small-bubble-6"></div>
            <div className="small-bubble small-bubble-11"></div>
          </Link>
          <Link
            to="/Contact"
            className="bubble bubble-4"
            onClick={(e) => handleLinkClick(e, "/Contact")}
          >
            Contact
            <div className="small-bubble small-bubble-7"></div>
            <div className="small-bubble small-bubble-10"></div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Intro;
