import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <h2>Contato</h2>
      <div className="buttons">
        <button className="linkedin" onClick={() => window.open("https://www.linkedin.com/in/lukas-oliveira-a92b83146/", "_blank")}>
          Linkedin
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="external-link-icon"
          />
        </button>
        <button className="instagram" onClick={() => window.open("https://www.instagram.com/j.lukasoliveira/?hl=pt-br", "_blank")}>
          Instagram
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="external-link-icon"
          />
        </button>
        <button className="whatsapp" onClick={() => window.open("https://api.whatsapp.com/send?phone=5521967040169", "_blank")}>
          WhatsApp
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="external-link-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Contact;
