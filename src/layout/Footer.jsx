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
            <a href="#" className="nav-link to-be-hid">
              About
            </a>
            <a href="#" className="nav-link to-be-hid">
              Contact
            </a>
            <a href="#" className="nav-link">
              Vigil Shop
            </a>
            <a href="#" className="nav-link">
              Work at Vigil
            </a>
            <a href="#" className="nav-link">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
