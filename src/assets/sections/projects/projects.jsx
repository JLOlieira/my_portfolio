import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./projects.css";
import ProjectCard from "../../components/project-card/project-card";
import ProjectModal from "../../components/projectModal/projectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import projectsData from "../../data/projects.json";

function Projects() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <div className="wrapper">
      <div className="projects">
        {projectsData.destaques.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => handleOpenModal(project)}
          />
        ))}
        <ProjectModal
          open={modalOpen}
          project={activeProject}
          onClose={handleCloseModal}
        />
      </div>
      {/* adiciona um botão de ver mais apenas se estiver na pagina inicial */}
      {document.location.pathname === "/" && (
        <button className="btn-more" onClick={handleClick}>
          Ver mais{" "}
          <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
        </button>
      )}
    </div>
  );
}

export default Projects;
