import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header-styles.css";

export default function Header() {
  return (
    <div className="nav-bar nav-header-container">
      <Navbar bg="light" expand="xl" fixed="top">
        <div className="d-flex flex-grow-1">
          <Navbar.Brand as={Link} to="/">Motorry</Navbar.Brand>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/main-page" className="link-color">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="link-color">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/forums" className="link-color">
              Forums
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="link-color">
              Sell a vehicle
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
