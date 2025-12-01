import "./project-card.css";
import ProjectModal from "../projectModal/projectModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "../tag/tag";

function ProjectCard({ id, tittle, description, img, tags }) {
  /* const techsIcons = [...new Set(techs)]; */

  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(id);

  const handleClick = () => {
    setModalId(Number(id));
    setModalOpen(true);
  };

  return (
    <div className="project-card" id={id}>
      <img className="project-img" src={img} alt="Project" />
      <div className="project-info">
        <h3 className="project-title">{tittle}</h3>
        <p className="project-description">{description}</p>
        {/* <div className="project-technologies">
          {techsIcons.map((tech) => (
            <span className="project-tech" key={tech}>
              <img src={`/techs/${tech}.png`} alt={tech} />
              <span className="tooltip">{tech}</span>
            </span>
          ))}
        </div> */}
        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <div className="project-buttons">
          <button onClick={() => handleClick(id)}>Detalhes</button>
        </div>

        {/* <button className="details">Ver mais</button> */}
      </div>
      {modalOpen && (
        <ProjectModal id={modalId} open={modalOpen} setOpen={setModalOpen} />
      )}
    </div>
  );
}

export default ProjectCard;
