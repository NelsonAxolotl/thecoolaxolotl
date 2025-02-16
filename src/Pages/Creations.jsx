import "./Creations.css";
import React, { useState, useEffect, useRef } from "react";
import Nav from "../Components/Nav";
import End from "../Components/End";
import wanubida from "../Pics/wanubida.png";
import poly from "../Pics/logo.jpg";
import manu from "../Pics/manu.png";
import rando from "../Pics/rando.jpg";
import game from "../Pics/bg.jpg";
import trip from "../Pics/tripaxo.jpg";
import avis from "../Pics/axoavis.webp";
// import axorando from "../Pics/axorando.webp";
// import axotrip from "../Pics/axotrip.webp";
// import axogame from "../Pics/axogame.webp";
// import jelly from "../Vidéos/underwater.mp4";
import portfolio from "../Pics/portfolio.webp";
import maquette from "../Pics/maquette.webp";
import carnet from "../Pics/carnet.webp";

const Creations = () => {
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
      title: "Compagnie Wanubida",
      subtitle: "Compagnie de Cirque",
      description:
        "Un site immersif reflétant l'énergie et la créativité de la compagnie de cirque Wanubida. Calendrier interactif et galerie dynamique intégrés.",
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
      title: "Gaming",
      description: "Maquette axée sur le monde du gaming",
      image: game,
      link: "https://site-maquette-gaming.netlify.app/", // Exemple de lien
      // avatar: axogame,
    },
    {
      title: "Reproduction TripAdvisor",
      description: "Maquette de reproduction du célèbre site",
      image: trip,
      link: "https://tripadvisorangola-exo.netlify.app/",
      // avatar: axotrip,
    },
    {
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
          <source src="/Vidéos/underwater.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>
      <div className={`portfolio-container ${showPage ? "fade-in" : ""}`}>
        <div className="summary-container">
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="summary-text">
            Je réalise des sites fiables, performants, dotés d’un code propre,
            optimisés pour un bon référencement (SEO), entièrement responsives,
            intuitifs, visuellement attrayants et uniques, en garantissant une
            expérience utilisateur fluide et un design moderne adapté à vos
            besoins.
          </p>
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
          Sites artistiques
        </h2>

        <p className="projects-section-description">
          Découvrez une sélection de sites vitrines sur le monde de l'art et du
          spectacle.
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
                    alt={project.title}
                    width={300}
                    height={300}
                    className={`project-image ${
                      index === projects.length - 1 ? "last-project-image" : ""
                    }`}
                  />
                  {/* Ajout du texte et de la flèche sous le logo */}
                  <div className="click-indicator">
                    <div className="arrow-up"></div>
                    <span>Cliquer ici</span>
                  </div>
                </div>
              </a>

              {/* Contenu de la carte */}
              <div className="project-info">
                <h2
                  className="project-title"
                  style={{ color: project.titleColor }}
                >
                  {project.title}
                </h2>
                <h3
                  className="project-subtitle"
                  style={{ color: project.subtitleColor }}
                >
                  {project.subtitle}
                </h3>
                <p
                  className="project-description"
                  style={{ color: project.descriptionColor }}
                >
                  {project.description}
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
                      <p>{project.review.text}</p>
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
          Maquettes
        </h2>
        <p className="maquettes-section-description">
          Explorez ces maquettes allant de jeux vidéo, reproduction et nature.
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
                    <button className="maquette-button">Visitez le site</button>
                  </a>

                  <div className="content">
                    <h3 className="maquette-title">{maquette.title}</h3>
                    <p className="maquette-description">
                      {maquette.description}
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
          <h2>Carnet de Route</h2>

          <div className="blog-category " ref={blogCategory1Ref}>
            <div className="category-title">
              <h3 className="animate-from-right">
                <span role="img" aria-label="parcours">
                  👨‍💻
                </span>{" "}
                Mes premiers clients
              </h3>
            </div>
            <p className="animate-from-bottom">
              Après ma formation Boot Camp "Le Reacteur", j’ai rapidement
              compris qu’il fallait se démarquer pour trouver mes premiers
              clients. Je voulais créer des sites qui ne soient pas simplement
              fonctionnels, mais qui portent une véritable identité visuelle, à
              l’image des personnes et des projets qu’ils représentent. C’est en
              mettant en avant cette approche que j’ai décroché mes premiers
              contrats !
            </p>
            <p className="animate-from-bottom">
              Très vite, j’ai compris que la meilleure façon d’attirer des
              clients était de me différencier. Plutôt que de proposer des sites
              basiques ou de copier ce qui existait déjà, j’ai décidé de mettre
              en avant une approche plus personnalisée : créer des sites qui
              racontent une histoire, qui capturent l’essence et l’identité de
              mes clients.
            </p>
            <p className="animate-from-bottom">
              Mon premier client est venu grâce au bouche-à-oreille. Un ami
              connaissait quelqu'un qui cherchait à refaire son site, mais il
              voulait quelque chose qui sorte du lot. En discutant avec lui,
              j’ai compris qu’il ne voulait pas juste une "vitrine", mais un
              site qui reflète sa personnalité et sa passion. <br />
              C’est en écoutant attentivement ses besoins et en apportant ma
              vision que j’ai décroché ce premier projet.
            </p>
            <p className="animate-from-bottom">
              Aujourd’hui, j’applique la même approche : chaque site doit être
              unique et marquant, comme une carte de visite numérique qui attire
              immédiatement l’attention et transmet une vraie identité visuelle.
            </p>

            <div className="article-list ">{/* Liste d'articles ici */}</div>
          </div>

          <div className="blog-category" ref={blogCategory2Ref}>
            <h3 className="animate-from-right">
              <span role="img" aria-label="tech">
                💻
              </span>{" "}
              Sites qui sortent du lot
            </h3>
            <p className="animate-from-bottom">
              Dans un monde où tout va très vite et où les modèles préconçus
              dominent, j’ai voulu prendre une autre direction. Mon objectif
              n’est pas seulement de créer des sites, mais de concevoir des
              expériences visuelles qui captivent et marquent les esprits.
            </p>
            <p className="animate-from-bottom">
              Je suis particulièrement attiré par les sites artistiques, car ils
              offrent une liberté de création immense. Ils permettent d’explorer
              des univers graphiques variés, d’expérimenter avec des animations,
              des mises en page audacieuses et des identités visuelles uniques.
              Mais mon intérêt ne s’arrête pas là : chaque métier a sa propre
              identité, et j’aime traduire cette singularité à travers le design
              et l’expérience utilisateur.
            </p>
            <p className="animate-from-bottom">
              Que ce soit un artiste, un artisan, un thérapeute ou un
              entrepreneur, chacun mérite un site qui lui ressemble, qui met en
              avant son savoir-faire et qui se démarque des modèles
              standardisés. C’est ce qui me motive à aller plus loin, à
              repousser les limites du design et à proposer des sites qui ont
              une âme.
            </p>

            <div className="article-list ">{/* Liste d'articles ici */}</div>
          </div>

          <div className="blog-category" ref={blogCategory3Ref}>
            <h3 className="animate-from-right">
              <span role="img" aria-label="freelance">
                🌱
              </span>{" "}
              Une question d'éthique
            </h3>
            <p className="animate-from-bottom">
              Travailler en tant que freelance, c’est aussi faire des choix. Dès
              le début, j’ai voulu rester fidèle à mes valeurs et choisir des
              projets qui ont du sens. Pour moi, un site web n’est pas qu’une
              simple interface : c’est un moyen d’expression, un outil qui
              véhicule une identité, une histoire et des valeurs.
            </p>
            <p className="animate-from-bottom">
              C’est pourquoi je ne travaille pas uniquement pour gagner des
              contrats, mais pour construire des collaborations sincères et
              authentiques. <br />
              J’aime prendre le temps d’échanger avec mes clients, comprendre
              leur vision, leurs besoins et leurs aspirations. Ce n’est qu’en
              étant à l’écoute que je peux proposer un site qui leur correspond
              vraiment, et qui va bien au-delà d’un simple produit technique.
            </p>
            <p className="animate-from-bottom">
              Je préfère travailler avec des indépendants, des artistes, des
              associations, ou encore des entrepreneurs, des entreprises qui
              partagent des valeurs d’authenticité et de créativité.
            </p>
            <p className="animate-from-bottom">
              Mon objectif n’est pas de produire en masse, mais de concevoir des
              sites qui ont une âme, qui apportent une réelle plus-value, et qui
              reflètent la singularité de chaque personne ou entreprise avec qui
              je collabore.
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
