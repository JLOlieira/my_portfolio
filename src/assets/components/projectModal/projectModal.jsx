import ReactDOM from "react-dom";
import "./projectModal.css";
import Tag from "../tag/tag";
import projectsData from "../../data/projects.json";

function ProjectModal({ id, open, setOpen }) {
  const handleCloseModal = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
    console.log(open);
  };

  if (!open) return null;

  if (open) {
    document.body.style.overflow = "hidden";
  }

  const index = Number(id);
  const project =
    projectsData?.destaques?.find((p) => p.id === index) ??
    projectsData?.destaques?.[index];

  if (!project) return null; // protege contra undefined

  const handleFullScreenImg = (e) => {
    e.target.requestFullscreen();
  };
  const handleExitFullScreenImg = (e) => {
    e.target.onclick = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  };
  document.addEventListener("fullscreenchange", handleExitFullScreenImg);

  if (document.fullscreenElement) {
    document.fullscreenElement.style.cursor = "zoom-out";
  } else {
    document.body.style.cursor = "zomm-in";
  }

  const content = (
    <div className="project-modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <div className="banner">
          <div className="close-btn">
            <button
              onClick={handleCloseModal}
              aria-label="Fechar modal"
              className="close-btn"
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </div>
          <img src={project.img} alt={project.tittle || "Banner"} />
          <div className="links">
            {project.links &&
              Object.entries(project.links).map(([name, url]) => (
                <button
                  key={name}
                  onClick={() => window.open(url, "_blank", "noopener")}
                >
                  {name}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              ))}
          </div>
        </div>

        <div className="content">
          <div className="header">
            <div className="infos">
              <h2>{project.tittle}</h2>
              <p>{project.description}</p>
              <div className="divider"></div>
              <h3>O que eu desenvolvi</h3>
              <div className="details">
                {project.details?.map((d) => (
                  <p key={d}>
                    {"- "}
                    {d}
                  </p>
                ))}
              </div>

              <h3>Desafios e soluções</h3>
              <div>
                {project.chalengesSolutions?.map((c) => (
                  <p key={c}>
                    {"- "}
                    {c}
                  </p>
                ))}
              </div>

              <h3>Melhorias futuras</h3>
              <div>
                {project.improvements?.map((m) => (
                  <p key={m}>
                    {"- "}
                    {m}
                  </p>
                ))}
              </div>

              <div className="prints">
                {project.prints?.map((p) => (
                  <img
                    onClick={handleFullScreenImg}
                    key={p}
                    src={p}
                    alt="Print"
                  />
                ))}
              </div>
            </div>

            <div className="tags">
              {project.tags?.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const mount = document.getElementById("modal-root") || document.body;
  return ReactDOM.createPortal(content, mount);
}
export default ProjectModal;
