import "./project-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ id, tittle, description, img, techs, links }) {

  const techsIcons = [...new Set(techs)];

  return (
    <div className="project-card" id={id}>
      <img className="project-img" src={img} alt="Project" />
      <div className="project-info">
        <h3 className="project-title">{tittle}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {techsIcons.map((tech) => (
            <span className="project-tech" key={tech}>
              <img src={`/techs/${tech}.png`} alt={tech} />
              <span className="tooltip">{tech}</span>
            </span>
          ))}
        </div>
        <div className="project-buttons">
          {Object.entries(links).map(([name, url]) => (
            <button key={name} onClick={() => window.open(url, "_blank")}>
              {name}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="external-link-icon"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
