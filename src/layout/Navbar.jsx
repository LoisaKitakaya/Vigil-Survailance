import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../css/App.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          Vigil Surveillance
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="https://app.hygraph.com/" className="nav-link">
                Vigil shop
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* off menu */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="bg-custom">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-custom">
          <div className="off-menu fs-3 text-center">
            <Link
              to={"/"}
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              Home
            </Link>
            <Link
              to={"/services"}
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              Services
            </Link>
            <Link
              to={"/quote"}
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              Get Quote
            </Link>
            <a
              href="https://loremipsum.io/generator/"
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              Vigil Shop
            </a>
            <Link
              to={"/portfolio"}
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              Portfolio
            </Link>
            <Link
              to={"blog"}
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
              Blog
            </Link>
            <Link
              to={"/about"}
              className="nav-link"
              onClick={() => {
                handleClose();
              }}
            >
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
