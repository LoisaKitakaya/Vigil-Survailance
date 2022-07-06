import { Link } from "react-router-dom";
import "../css/App.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="navbar topbar bg-light footer-navbar navbar-expand-lg bot-light">
        <div className="container-fluid footer-container">
          <div className="footer-brand">
            <h4>Vigil Surveillance</h4>
            <br />
            <div className="text-dark">
              <p>© 2022 • vigilsurvaillance.com</p>
            </div>
            <br />
            <p>Live Video Surveillance and CCTV Monitoring Center</p>
            <br />
            <div className="social-media">
              <a href="#">
                <i className="bi bi-facebook fs-4 text-link"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter fs-4 text-info"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram fs-4 text-danger"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin fs-4 text-link"></i>
              </a>
            </div>
          </div>
          <div className="navbar-nav">
            <Link to={'/about'} className="nav-link to-be-hid">
              About
            </Link>
            <Link to={'/services'} className="nav-link to-be-hid">
              Services
            </Link>
            <a href="#" className="nav-link">
              Vigil Shop
            </a>
            <Link to={'/work'} className="nav-link">
              Work at Vigil
            </Link>
            <Link to={'/privacy'} className="nav-link">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
