import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./projectsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import ProjectCard from "../../components/project-card/project-card";
import projectsData from "../../data/projects.json";
import Contact from "../../sections/contact/contact";
import ScrollToTopBtn from "../../components/scrollToTop/scrollToTopBtn";

function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="projects-page">
      <button className="btn-back-container" onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
        <span>Voltar</span>
      </button>
      <div className="projects-page-content">
        {projectsData.destaques.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              tittle={project.tittle}
              description={project.description}
              img={project.img}
              techs={project.techs}
              tags={project.tags}
              links={project.links}
            />
        ))}
        {projectsData.allProjects.map((project) => (
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
      <Contact />
      <footer>
              <p>2025 - Lukas Oliveira</p>
              <p>
                Esse e outros projetos estão disponíveis no meu{" "}
                <a href="https://github.com/JLOlieira" target="_blank">
                  Github{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="external-link-icon"
                  />
                </a>
              </p>
            </footer>
      <ScrollToTopBtn />
    </div>
  );
}

export default ProjectsPage;
