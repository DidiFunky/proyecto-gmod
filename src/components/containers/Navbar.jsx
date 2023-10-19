import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavbarRes() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="navlink">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarRes;
