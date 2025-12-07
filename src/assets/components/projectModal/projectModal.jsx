import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./projectModal.css";
import Tag from "../tag/tag";

function ProjectModal({ open, project, onClose }) {
  // bloquear scroll
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // fechar clicando fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("project-modal")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  if (!open || !project) return null;

  // conteúdo do modal
  const content = (
    <div className="project-modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="content">
          <div className="header">
            {project.prints?.length > 0 && (
              <>
                <div className="prints">
                  {project.prints.map((p) => (
                    <img
                      className="print-img"
                      key={p}
                      src={p}
                      alt=""
                      loading="lazy"
                    />
                  ))}
                </div>
              </>
            )}
            <div className="top-infos">
              <div className="tags">
                {project.tags?.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
              <div className="links">
                {project.links && Object.entries(project.links).map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="infos">
              <h2>{project.tittle}</h2>
              <p>{project.description}</p>
              <div className="divider"></div>
              <div className="details">
                {project.details?.map((d, i) => (
                  <p key={i}>• {d}</p>
                ))}
              </div>
            </div>
            <div className="challenges-solutions">
              <h2>Desafios e soluções</h2>
              {project.chalengesSolutions?.map((d, i) => (
                <p key={i}>• {d}</p>
              ))}
            </div>
            <div className="improvements">
              <h2>Melhorias futuras</h2>
              {project.improvements?.map((d, i) => (
                <p key={i}>• {d}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

export default ProjectModal;
