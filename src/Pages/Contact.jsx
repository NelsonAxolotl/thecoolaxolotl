import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Importation du hook
import "./Contact.css";
import emailjs from "emailjs-com";
import Nav from "../Components/Nav";
import End from "../Components/End";
import happy from "../Pics/happy.png";
// import watou from "../Vidéos/eau4.mp4";
// import backgroundImage from "../Pics/axopic.png";
import contact from "../Pics/halo.webp";

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Attends 100ms avant de forcer le scroll
  }, []);
  const [showAxolotl, setShowAxolotl] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 350);
    const formTimer = setTimeout(() => setShowForm(true), 400);

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
          src={contact}
          alt="Background"
          width="800"
          height="400"
          className="background-image-contact"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="background-video-contact"
        >
          <source src="/Vidéos/eau8.mp4" type="video/mp4" loading="lazy" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>

      <div className={`nav-container ${showNav ? "fade-in" : ""}`}>
        <section className="appel-action">
          <div className={`form-container ${showForm ? "show-form" : ""}`}>
            <div className="contact-header">
              <h1> {t("contact")}</h1>
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
                  href="https://www.linkedin.com/in/the-cool-axolotl-8555a5351/"
                  aria-label="The cool Axolotl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/thecoolaxoltl/"
                  aria-label="The cool Axolotl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <p>{t("contact-text")}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t("placeholder")}
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
                placeholder={t("subject")}
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={t("message")}
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
                <label htmlFor="consent">{t("label-html")}</label>
              </div>

              <button type="submit" className="submit-button">
                {t("button-submit")}
              </button>
            </form>

            {isSent && showAxolotl && (
              <div className="axolotl-container-happy">
                <img
                  src={happy}
                  alt="Axolotl"
                  className="axolotl-image-happy sent"
                  loading="lazy"
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
