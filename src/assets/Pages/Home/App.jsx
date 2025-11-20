import { useRef, useEffect, useState } from "react";

import "./App.css";
import "./../../../responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import Projects from "../../sections/projects/projects";
import About from "../../sections/about/about";
import Contact from "../../sections/contact/contact";
import ScrollToTopBtn from "../../components/scrollToTop/scrollToTopBtn";

function App() {
  const projectRef = useRef(null);
  const [scrolledToProjects, setScrolledToProjects] = useState(false);
  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
    setScrolledToProjects(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50 && !scrolledToProjects) {
        scrollToProjects();
      }

      if (scrollY < 50 && scrolledToProjects) {
        setScrolledToProjects(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolledToProjects]);

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="left">
            <h2>Lukas Oliveira</h2>
            <p>{"<"} Frontend Developer {"/>"}</p>
          </div>
          <div className="right">
            <a href="https://github.com/JLOlieira" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lukas-oliveira-a92b83146/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <h1>
          Primeiro, resolva o problema. <br /> Depois, escreva o código.
        </h1>
        <div className="see-projects" onClick={scrollToProjects}>
          <p>Ver projetos</p>
          <FontAwesomeIcon icon={faAngleDown} className="arrow" />
        </div>
        <img src="/Retrato sf.png" alt="Retrato" />
        <img src="/mainbg.jpg" alt="Background" className="background" />
      </div>
      <section ref={projectRef}>
        <Projects />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <section>
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
      </section>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
