import "./App.css";
import './../../../responsive.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Projects from "../../sections/projects/projects";
import About from "../../sections/about/about";
import Contact from "../../sections/contact/contact";

function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <h2>Lukas Oliveira</h2>
          <p>Frontend Developer</p>
        </div>
        <h1>
          Primeiro, resolva o problema. <br /> Depois, escreva o código.
        </h1>
        <FontAwesomeIcon icon={faAngleDown} className="arrow" />
        <img src="/Retrato sf.png" alt="Retrato" />
      </div>
      <Projects />
      <About />
      <Contact />
      <footer>
        <p>2025 - Lukas Oliveira</p>
        <p>Esse e outros projetos estão disponíveis no meu <a href="https://github.com/JLOlieira" target="_blank">Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="external-link-icon" /></a></p>
      </footer>
    </>
  );
}

export default App;
