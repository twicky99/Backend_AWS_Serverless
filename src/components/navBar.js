// navbar component
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-bg.png";
import Slide from "react-reveal/Slide";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl" variant="dark">
      <Slide top>
        <Navbar.Brand>
          <NavLink to="/" style={{ textDecoration: "none" }} className="link">
            <img
              alt="logo"
              src={Logo}
              className="img-fluid"
              style={{ display: "inline-block", maxWidth: "35%" }}
            />
          </NavLink>
        </Navbar.Brand>
      </Slide>
    {/*   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
