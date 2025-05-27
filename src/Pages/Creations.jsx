import "./Creations.css";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Nav from "../Components/Nav";
import End from "../Components/End";
import wanubida from "../Pics/wanubida.png";
import poly from "../Pics/logo.jpg";
import manu from "../Pics/manu.png";
import rando from "../Pics/rando.jpg";
import game from "../Pics/bg.jpg";
import trip from "../Pics/tripaxo.jpg";
import avis from "../Pics/axoavis.webp";
import portfolio from "../Pics/portfolio.webp";
import maquette from "../Pics/maquette.webp";
import carnet from "../Pics/carnet.webp";

const Creations = () => {
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Attends 100ms avant de forcer le scroll
  }, []);
  const [showPage, setShowPage] = useState(false);
  const videoRef = useRef(null);

  const [hasBeenVisible, setHasBeenVisible] = useState({
    blogCategory1: false,
    blogCategory2: false,
    blogCategory3: false,
    imageRef: false,
    imageBlogRef: false,
  });

  const blogCategory1Ref = useRef(null);
  const blogCategory2Ref = useRef(null);
  const blogCategory3Ref = useRef(null);
  const imageRef = useRef(null);
  const imageBlogRef = useRef(null);

  // Un seul useEffect pour observer tous les éléments
  useEffect(() => {
    const elementsToObserve = [
      { ref: blogCategory1Ref, key: "blogCategory1" },
      { ref: blogCategory2Ref, key: "blogCategory2" },
      { ref: blogCategory3Ref, key: "blogCategory3" },
      { ref: imageRef, key: "imageRef" },
      { ref: imageBlogRef, key: "imageBlogRef" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // On vérifie si l'élément est visible pour la première fois
          if (
            entry.isIntersecting &&
            !hasBeenVisible[entry.target.dataset.key]
          ) {
            entry.target.classList.add("visible");
            setHasBeenVisible((prev) => ({
              ...prev,
              [entry.target.dataset.key]: true,
            }));
          }
        });
      },
      { threshold: 0.3 } // Seuil d'intersection de 30% de l'élément visible
    );

    // Observer tous les éléments
    elementsToObserve.forEach(({ ref, key }) => {
      const element = ref.current;
      if (element) {
        element.dataset.key = key; // Ajoute une propriété data-key à chaque élément observé
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach(({ ref }) => {
        const element = ref.current;
        if (element) observer.unobserve(element);
      });
    };
  }, [hasBeenVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      console.log("Vidéo attachée :", videoRef.current); // Vérifie si la référence est bien attachée
      videoRef.current.playbackRate = 0.7; // Ralentit la vidéo
    }
  }, [videoRef.current]); // Déclenchement lorsque la ref change

  const projects = [
    {
      id: "wanubida",
      title: "Compagnie Wanubida",
      subtitle: "Compagnie de Cirque",
      description:
        "Un site immersif reflétant l'énergie, la créativité de la compagnie du cirque Wanubida et une galerie dynamique intégrés.",
      image: wanubida,
      link: "https://www.wanubida.com",
      technologies: ["HTML", "REACT", "JAVASCRIPT", "CSS", "SEO"],
      titleColor: "#fff",
      subtitleColor: "#fff",
      descriptionColor: "#f0f0f0",
      review: {
        text: "Hyper réactif, créatif, précis dans son travail, à l'écoute de nos envies. Notre site est dynamique, simple d'utilisation, très clair. Un suivi parfait à notre image!!!",
        stars: 5,
      },
    },
    {
      id: "polyr",
      title: "Compagnie PolyR",
      subtitle: "Compagnie d'Opéra",
      description:
        "Un site élégant mettant en avant les spectacles à travers une galerie de photos saisissantes et des descriptions détaillées des performances.",
      image: poly,
      link: "https://www.compagniepolyr.fr",
      technologies: ["HTML", "REACT", "JAVASCRIPT", "CSS", "SEO"],
      titleColor: "#fff",
      subtitleColor: "#fff",
      descriptionColor: "#dfe6e9",
      review: {
        text: "L’équipe de la Compagnie Poly R est absolument ravie du travail du Cool Axolotl qui a su créer un site internet sur mesure. Aujourd'hui, la compagnie gagne en visibilité !",
        stars: 5,
      },
    },
    {
      id: "emmanuelle",
      title: "Emmanuelle Ferdyan",
      subtitle: "Portfolio d'Artiste",
      description:
        "Un portfolio minimaliste et visuellement saisissant pour mettre en lumière les œuvres et l'univers unique d'une artiste incroyable.",
      image: manu,
      link: "https://www.emmanuelleferdyan.com",
      technologies: ["HTML", "REACT", "JAVASCRIPT", "CSS", "SEO"],
      titleColor: "#fff",
      subtitleColor: "#fff",
      descriptionColor: "#f0f0f0",
      review: {
        text: "The Cool Axolotl a su créer un site web à mon image et j'en suis totalement satisfaite, surtout très fière ! Nos échanges étaient conviviaux et efficaces à la fois. Un enorme merci !!!",
        stars: 5,
      },
    },
  ];

  const maquettes = [
    {
      id: "gaming",
      title: "Gaming",
      description: "Maquette axée sur le monde du gaming",
      image: game,
      link: "https://site-maquette-gaming.netlify.app/", // Exemple de lien
      // avatar: axogame,
    },
    {
      id: "tripadvisor",
      title: "Reproduction TripAdvisor",
      description: "Maquette de reproduction du célèbre site",
      image: trip,
      link: "https://tripadvisorangola-exo.netlify.app/",
      // avatar: axotrip,
    },
    {
      id: "mountain",
      title: "La Montagne",
      description: "Maquette rando, nature et montagnes",
      image: rando,
      link: "https://site-maquette-rando.netlify.app/",
      // avatar: axorando,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Les éléments deviennent visibles lorsque la section est dans la vue
        }
      },
      {
        threshold: 0.5, // Le seuil est de 50% pour que l'élément soit visible
      }
    );

    const blogContainer = document.querySelector(".blog-container");
    if (blogContainer) observer.observe(blogContainer);

    return () => {
      if (blogContainer) observer.unobserve(blogContainer);
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="background-video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.playbackRate = 0.7; // Ajustez la vitesse ici (0.5 = 50% plus lent)
            }
          }}
        >
          <source src="/Videos/underwater.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>
      <div className={`portfolio-container ${showPage ? "fade-in" : ""}`}>
        <div className="summary-container">
          <h1 className="portfolio-title">{t("port.title")}</h1>
          <p className="summary-text">{t("port.summary")}</p>
        </div>

        <h2 className="projects-section-title">
          <img
            ref={imageRef}
            src={portfolio}
            width={300}
            height={300}
            alt="Icône artistique"
            className="title-icon"
          />
          {t("projects.title")}
        </h2>

        <p className="projects-section-description">
          {t("projects.description")}
        </p>

        {/* Liste des projets */}
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-wrapper"
              style={{
                backgroundColor: project.background,
              }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.id}.title`)}
                    width={300}
                    height={300}
                    className={`project-image ${
                      index === projects.length - 1 ? "last-project-image" : ""
                    }`}
                  />
                  {/* Ajout du texte et de la flèche sous le logo */}
                  <div className="click-indicator">
                    <div className="arrow-up"></div>
                    <span>
                      {t(`projects.${project.id}.arrow`, "Cliquer ici")}
                    </span>
                  </div>
                </div>
              </a>

              {/* Contenu de la carte */}
              <div className="project-info">
                <h2
                  className="project-title"
                  style={{ color: project.titleColor }}
                >
                  {t(`projects.${project.id}.title`)}
                </h2>
                <h3
                  className="project-subtitle"
                  style={{ color: project.subtitleColor }}
                >
                  {t(`projects.${project.id}.subtitle`)}
                </h3>
                <p
                  className="project-description"
                  style={{ color: project.descriptionColor }}
                >
                  {t(`projects.${project.id}.description`)}
                </p>

                <ul className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="technology-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Avis section */}
              {project.review && (
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Face avant avec l'image */}
                    <div className="flip-card-front">
                      <img
                        src={avis}
                        alt="Avis client"
                        width={300}
                        height={300}
                        className="avis-image"
                      />
                    </div>

                    {/* Face arrière avec l'avis */}
                    <div className="flip-card-back">
                      <div className="rating">
                        {Array.from({ length: project.review.stars }).map(
                          (_, idx) => (
                            <span key={idx}>★</span>
                          )
                        )}
                      </div>
                      <p>{t(`projects.${project.id}.review`)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="maquettes-section-title">
          <img
            ref={imageRef}
            src={maquette}
            width={500}
            height={500}
            alt="Icône artistique"
            className="title-icon"
          />
          {t("mockups.title")}
        </h2>
        <p className="maquettes-section-description">
          {t("mockups.description")}
        </p>

        {/* Liste des maquettes */}
        <div className="maquettes-container">
          <div className="maquettes-grid">
            {maquettes.map((maquette, index) => (
              <div key={index} className="maquette-item">
                <div
                  className="maquette-card"
                  style={{ backgroundImage: `url(${maquette.image})` }} // Image de fond dynamique
                >
                  {/* Lien avec le bouton */}
                  <a
                    href={maquette.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    {/* Bouton Positionné en haut */}
                    <button className="maquette-button">
                      {" "}
                      {t(`mockups.${maquette.id}.visiting`)}
                    </button>
                  </a>

                  <div className="content">
                    <h3 className="maquette-title">
                      {t(`mockups.${maquette.id}.title`)}
                    </h3>
                    <p className="maquette-description">
                      {t(`mockups.${maquette.id}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`blog-container ${isVisible ? "visible" : "hidden"}`}>
          <img
            src={carnet}
            alt="Icône"
            width={300}
            height={300}
            className="title-icon"
          />
          <h2>{t(`blog.journal`)}</h2>

          <div className="blog-category " ref={blogCategory1Ref}>
            <h3 className="animate-from-right">
              <span role="img" aria-label="parcours">
                👨‍💻
              </span>{" "}
              {t(`blog.category1.title`)}
            </h3>

            <p className="animate-from-bottom">
              {" "}
              {t(`blog.category1.content1`)}
            </p>
            <p className="animate-from-bottom">
              {" "}
              {t(`blog.category1.content2`)}
            </p>
            <p className="animate-from-bottom">
              {" "}
              {t(`blog.category1.content3`)}
            </p>

            <div className="article-list ">{/* Liste d'articles ici */}</div>
          </div>

          <div className="blog-category" ref={blogCategory2Ref}>
            <h3 className="animate-from-right">
              <span role="img" aria-label="tech">
                💻
              </span>{" "}
              {t(`blog.category2.title`)}
            </h3>
            <p className="animate-from-bottom">
              {t(`blog.category2.content1`)}
            </p>
            <p className="animate-from-bottom">
              {t(`blog.category2.content2`)}
            </p>
            <p className="animate-from-bottom">
              {t(`blog.category2.content3`)}
            </p>
            <p className="animate-from-bottom">
              {t(`blog.category2.content4`)}
            </p>

            <div className="article-list ">{/* Liste d'articles ici */}</div>
          </div>

          <div className="blog-category" ref={blogCategory3Ref}>
            <h3 className="animate-from-right">
              <span role="img" aria-label="freelance">
                🌱
              </span>{" "}
              {t(`blog.category3.title`)}
            </h3>
            <p className="animate-from-bottom">
              {t(`blog.category3.content1`)}
            </p>
            <p className="animate-from-bottom">
              {t(`blog.category3.content2`)}
            </p>
            <p className="animate-from-bottom">
              {t(`blog.category3.content3`)}
            </p>

            <div className="article-list ">{/* Liste d'articles ici */}</div>
          </div>
        </div>
      </div>
      <End />
    </>
  );
};

export default Creations;
