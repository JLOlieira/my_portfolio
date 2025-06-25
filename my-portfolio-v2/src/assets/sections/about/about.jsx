import "./about.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function About() {
  const certifications = [
    {
      name: "Imersão Front-End 2ª Edição",
      date: "Alura - 2025",
      url: "https://cursos.alura.com.br/user/lukaspkmn/immersion/certificate/59402",
    },
    {
      name: "Imersão Dev 9ª Edição",
      date: "Alura - 2025",
      url: "https://cursos.alura.com.br/user/lukaspkmn/immersion/certificate/65153",
    },
  ];

  return (
    <div className="about">
      <div className="info">
        <h2>Um pouco sobre mim</h2>
        <p>
          Apaixonado por tudo que envolve tecnologia, conheci a área de
          desenvolvimento há alguns meses e desde então venho mergulhando cada
          vez mais nesse universo. O que começou como uma curiosidade
          rapidamente se transformou em um verdadeiro interesse por criar,
          resolver problemas e dar vida a ideias através do código. Hoje, estou
          focado em me desenvolver como front-end, aprendendo e praticando
          diariamente para construir interfaces modernas, funcionais e bem
          estruturadas.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>
              <img src="techs/react.png" alt="React" />
            </li>
            <li>
              <img src="techs/html.png" alt="HTML" />
            </li>
            <li>
              <img src="techs/css.png" alt="CSS" />
            </li>
            <li>
              <img src="techs/js.png" alt="JavaScript" />
            </li>
          </ul>
        </div>
        <div className="certifications">
          <h3>Certificações</h3>
          {certifications.map((certification) => (
            <div className="certification-card" key={certification.name}>
              <div>
                <p>{certification.name}</p>
                <p>{certification.date}</p>
              </div>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="external-link-icon"
                onClick={() => window.open(certification.url, "_blank")}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="photo">
        <img src="/Retrato.png" alt="Retrato" />
        <span></span>
      </div>
    </div>
  );
}

export default About;
