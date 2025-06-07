// components/ProjectCard.jsx
import avis from "../Pics/axoavis.webp";

const ProjectCard = ({ project, t }) => {
  return (
    <div
      className="project-wrapper"
      style={{ backgroundColor: project.background }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          <img
            src={project.image}
            alt={t(`projects.${project.id}.title`)}
            loading="lazy"
            className="project-image"
          />
          <div className="click-indicator">
            <div className="arrow-up"></div>
            <span>{t(`projects.${project.id}.arrow`, "Cliquer ici")}</span>
          </div>
        </div>
      </a>

      <div className="project-info">
        <h2 className="project-title" style={{ color: project.titleColor }}>
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

      {project.review && (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={avis}
                alt="Avis client"
                loading="lazy"
                className="avis-image"
              />
            </div>
            <div className="flip-card-back">
              <div className="rating">
                {Array.from({ length: project.review.stars }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p>{t(`projects.${project.id}.review`)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
