import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { send } from "emailjs-com";

import "./Contact.css";
import Nav from "../Components/Nav";
import End from "../Components/End";
import happy from "../Pics/happy.png";
import contact from "../Pics/contact.webp";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 200);
  }, []);

  const [showAxolotl, setShowAxolotl] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 350);
    const formTimer = setTimeout(() => setShowForm(true), 400);
    if (videoRef.current) videoRef.current.playbackRate = 0.4;
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
    consent: false,
    "bot-field": "",
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

    if (formData["bot-field"]) return; // Anti-spam

    const { name, email, subject, message } = formData;

    send(
      "service_8gb8bdg",
      "template_2tt8tpr",
      { name, email, subject, message },
      "gyOAWsFJuZoqM16PD"
    )
      .then(() => {
        setIsSent(true);
        setShowAxolotl(true);
        setErrorMessage("");
        setTimeout(() => setShowAxolotl(false), 4000);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          consent: false,
          "bot-field": "",
        });
      })
      .catch(() => {
        setIsSent(false);
        setErrorMessage(t("form.error_message"));
      });
  };

  return (
    <>
      <Helmet>
        <title>{t("contact-meta.title")}</title>
        <meta name="description" content={t("contact-meta.description")} />
      </Helmet>

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
          <source src="/Videos/eau8.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>

      <div className={`nav-container ${showNav ? "fade-in" : ""}`}>
        <section className="appel-action">
          <div className={`form-container ${showForm ? "show-form" : ""}`}>
            <div className="contact-header">
              <h1>{t("contact")}</h1>
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
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/thecoolaxoltl/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <p>{t("contact-text")}</p>

            <form onSubmit={handleSubmit}>
              {/* Honeypot */}
              <div className="honeypot">
                <label htmlFor="bot-field" className="sr-only">
                  Ne pas remplir
                </label>
                <input
                  type="text"
                  name="bot-field"
                  id="bot-field"
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData["bot-field"]}
                />
              </div>

              <label htmlFor="name" className="sr-only">
                Nom
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={t("placeholder")}
                aria-label="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject" className="sr-only">
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder={t("subject")}
                aria-label="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("message")}
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

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
                <div className="bubble-happy">{t("form2.message_sent")}</div>
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
