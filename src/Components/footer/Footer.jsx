import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function footer() {
  return (
    <footer className="footer">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
      <a href="https://eazybytes.com" traget="_blank" rel="noreferrer">
        eazybytes
      </a>
    </footer>
  );
}
