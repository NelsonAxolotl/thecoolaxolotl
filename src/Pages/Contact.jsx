import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Nav from "../Components/Nav";
import End from "../Components/End";
import happy from "../Pics/happy.png";
import watou from "../Vidéos/eau4.mp4";
import backgroundImage from "../Pics/axopic.png";

const Contact = () => {
  const [showAxolotl, setShowAxolotl] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 300);
    const formTimer = setTimeout(() => setShowForm(true), 800);

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(formTimer);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false, // Ajout de l'état pour la checkbox
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const serviceID = "service_8gb8bdg";
    const templateID = "template_2tt8tpr";
    const userID = "gyOAWsFJuZoqM16PD";

    const templateParams = { name, email, subject, message };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email envoyé avec succès:", response);
        setIsSent(true);
        setShowAxolotl(true);
        setErrorMessage("");

        setTimeout(() => setShowAxolotl(false), 4000);

        // Réinitialisation du formulaire après soumission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          consent: false, // Réinitialisation de la checkbox
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error);
        setIsSent(false);
        setErrorMessage(
          "Une erreur est survenue. Veuillez réessayer plus tard."
        );
      });
  };

  return (
    <>
      <Nav />
      <div className="video-background-contact">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image-contact"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="background-video-contact"
        >
          <source src={watou} type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>

      <div className={`nav-container ${showNav ? "fade-in" : ""}`}>
        <section className="appel-action">
          <div className={`form-container ${showForm ? "show-form" : ""}`}>
            <div className="contact-header">
              <h1>Contact</h1>
              <p>
                <a
                  href="mailto:thecoolaxolotldesigner@gmail.com"
                  className="contact-email"
                >
                  thecoolaxolotldesigner@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+33617806715" className="contact-phone">
                  06 17 80 67 15
                </a>
              </p>
              <div className="social-icons">
                <a
                  href="https://linkedin.com/in/votreprofil"
                  aria-label="The cool Axolotl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com/votreprofil"
                  aria-label="The cool Axolotl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <p>
              "Envie de faire de votre projet une exploration unique et sur
              mesure ? <br />
              Rejoignez l’aventure et donnons vie à vos idées avec créativité et
              authenticité."
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="consent-container">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="consent">
                  En soumettant ce formulaire, vous acceptez que les
                  informations saisies soient utilisées pour permettre de vous
                  recontacter en retour dans le cadre d’une demande de devis ou
                  de renseignements.
                </label>
              </div>

              <button type="submit" className="submit-button">
                Plongez avec moi !
              </button>
            </form>

            {isSent && showAxolotl && (
              <div className="axolotl-container-happy">
                <img
                  src={happy}
                  alt="Axolotl"
                  className="axolotl-image-happy sent"
                />
                <div className="bubble-happy">Message envoyé !</div>
              </div>
            )}

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </section>
      </div>

      <End />
    </>
  );
};

export default Contact;
