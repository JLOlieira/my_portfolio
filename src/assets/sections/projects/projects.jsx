import { useNavigate } from "react-router-dom";
import "./projects.css";
import ProjectCard from "../../components/project-card/project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import projectsData from "../../data/projects.json";

function Projects() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };
  
  return (
    <div className="wrapper">
      <div className="projects">
        {projectsData.destaques.map((project) => (
          <ProjectCard
            key={project.id}
            tittle={project.tittle}
            description={project.description}
            img={project.img}
            techs={project.techs}
            tags={project.tags}
            links={project.links}
          />
        ))}
      </div>
      <button className="btn-more" onClick={handleClick}>
        Ver mais{" "}
        <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
      </button>
    </div>
  );
}

export default Projects;
