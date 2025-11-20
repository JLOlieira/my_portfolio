import "./about.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tag from "../../components/tag/tag";

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
        <h4>Em constante aprendizado para entregar código limpo e escalável</h4>
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
          <div className="tags">
            <Tag name="HTML" />
            <Tag name="CSS" />
            <Tag name="JavaScript" />
            <Tag name="React" />
            <Tag name="Git" />
            <Tag name="GitHub" />
            <Tag name="Figma" />
            <Tag name="Adobe XD" />
            <Tag name="UI/UX" />
          </div>
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
