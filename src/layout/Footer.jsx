import { Link } from "react-router-dom";

import "../css/layout.css";

const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary text-light to-hide">
        <div className="container contact-links">
          <div className="contact-link">
            <div className="top-links">
              <small>
                <i className="bi bi-telephone-fill m-right"></i> +254 725 131
                828
              </small>
            </div>
            <div className="top-links">|</div>
            <div className="top-links">
              <small>
                <i className="bi bi-envelope-fill m-right"></i>{" "}
                kitakayaloisa@gmail.com
              </small>
            </div>
          </div>
          <div className="contact-link">
            <a
              href="https://twitter.com/FreedomLoisa"
              className="contact-icons top-links"
            >
              <i className="bi bi-twitter fs-6 text-light"></i>
            </a>
            <a
              href="https://twitter.com/FreedomLoisa"
              className="contact-icons top-links"
            >
              <i className="bi bi-slack fs-6 text-light"></i>
            </a>
            <a
              href="https://twitter.com/FreedomLoisa"
              className="contact-icons"
            >
              <i className="bi bi-linkedin fs-6 text-light"></i>
            </a>
          </div>
        </div>
      </nav>
      {/* separator */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container row text-light footer">
          <div className="col-auto text-center">
            <Link to={"/about"} className="nav-link">
              About us
            </Link>
          </div>
          <div className="col-auto text-center">
            <Link to={"/services"} className="nav-link">
              Services
            </Link>
          </div>
          <div className="col-auto text-center">
            <Link to={"/blog"} className="nav-link">
              Blog
            </Link>
          </div>
          <div className="col-auto text-center">
            <Link to={"/projects"} className="nav-link">
              Projects
            </Link>
          </div>
          <div className="col-auto text-center">
            <Link to={"/terms_and_conditions"} className="nav-link">
              Terms {"&"} conditions
            </Link>
          </div>
          <div className="col-auto text-center">
            <Link to={"/privacy_policy"} className="nav-link">
              Privacy policy
            </Link>
          </div>
        </div>
      </nav>
      {/* separator */}
      <nav className="navbar navbar-expand-lg bg-secondary top-sub-footer text-light to-hide">
        <div className="container footer-links">
          <div>
            <small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-c-circle"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
              </svg>{" "}
              Copyright 2022 Vigil Surveillance
            </small>
          </div>
          <div>
            <small>
              Developed by{" "}
              <a
                href="https://freedomloisa.netlify.app/"
                className="text-light"
              >
                Freedom Loisa
              </a>
            </small>
          </div>
        </div>
      </nav>
      {/* separator */}
    </div>
  );
};

export default Footer;
