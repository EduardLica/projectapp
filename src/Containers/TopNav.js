import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./../assets/CSS/TopNav.css";
import logo from "./../assets/img/logoh.png";

function TopNav() {
  return (
    <Navbar
      expand="lg"
      className="bg-body"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <Container>
        <Link to="/" className="text-secondary">
          <img src={logo} alt="Logo" className="logo-image" />
          Mierea Ursului
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-links" to="/about">
              Povestea Noastra
            </Link>
            <Link className="nav-links" to="/produse">
              Produse
            </Link>
            <Link className="nav-links" to="/produse-favorite">
              Lista Favorite
            </Link>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
