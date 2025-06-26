import { useEffect, useState } from "react";
import './scrollToTopBtn.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopBtn() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`scroll-to-top ${show ? "show" : ""}`} onClick={handleClick}>
            <span>
                <FontAwesomeIcon icon={faAngleUp} />
            </span>
        </div>
    );
}

export default ScrollToTopBtn;