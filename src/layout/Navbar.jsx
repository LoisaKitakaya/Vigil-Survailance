import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

import "../css/App.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar navbar-expand-lg topbar top-light">
      <div className="container-fluid">
        <div className="logo">
          <a href="#" className="navbar-brand fs-4 nav-link-color">
            Vigil Surveillance
          </a>
        </div>
        <div className="navbar-nav d-flex">
          <a href="#" className="nav-link just-links">
            Services
          </a>
          <a href="#" className="nav-link just-links">
            Pricing
          </a>
          <a href="#" className="nav-link just-links">
            Vigil Shop
          </a>
          <a href="#" className="nav-link just-links">
            Portfolio
          </a>
          <a href="#" className="nav-link just-links">
            Blog
          </a>
          <a href="#" className="nav-link just-links">
            About
          </a>
          <a href="#" className="nav-link just-links">
            Contact
          </a>
          <a className="btn nav-link menu-btn" href="#" onClick={handleShow}>
            <i class="bi bi-list fs-2"></i>
          </a>
        </div>
      </div>
      {/* off menu */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="off-menu fs-3">
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              Vigil Shop
            </a>
            <a href="#" className="nav-link">
              Portfolio
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* off menu */}
    </div>
  );
};

export default Navbar;
