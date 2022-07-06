import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/App.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar bg-light navbar-expand-lg topbar top-light">
      <div className="container-fluid">
        <div className="logo">
          <Link to={"/"} className="navbar-brand fs-4 nav-link-color">
            Vigil Surveillance
          </Link>
        </div>
        <div className="navbar-nav d-flex">
          <Link to={"/services"} className="nav-link just-links">
            Services
          </Link>
          <Link to={"/quote"} className="nav-link just-links">
            Get Quote
          </Link>
          <a href="#" className="nav-link just-links">
            Vigil Shop
          </a>
          <Link to={"/portfolio"} className="nav-link just-links">
            Portfolio
          </Link>
          <Link to={"/blog"} className="nav-link just-links">
            Blog
          </Link>
          <Link to={"/about"} className="nav-link just-links">
            About
          </Link>
          <a className="btn nav-link menu-btn" href="#" onClick={handleShow}>
            <i className="bi bi-list fs-2"></i>
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
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/services"} className="nav-link">
              Services
            </Link>
            <Link to={"/quote"} className="nav-link">
              Get Quote
            </Link>
            <a href="#" className="nav-link">
              Vigil Shop
            </a>
            <Link to={"/portfolio"} className="nav-link">
              Portfolio
            </Link>
            <Link to={"blog"} className="nav-link">
              Blog
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* off menu */}
    </div>
  );
};

export default Navbar;
