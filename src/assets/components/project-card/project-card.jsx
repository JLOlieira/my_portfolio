import "./project-card.css";
import Tag from "../tag/tag";

function ProjectCard({ project, onOpen }) {
  if (!project) return null; // evita erro quando project é undefined
  const { id, tittle, description, img, tags } = project;

  return (
    <div className="project-card" id={id}>
      <img className="project-img" src={img} alt="Project" />

      <div className="project-info">
        <h3 className="project-title">{tittle}</h3>
        <p className="project-description">{description}</p>

        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>

        <div className="project-buttons">
          <button onClick={onOpen}>Detalhes</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
