import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      className="mt-3"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="fs-3 fw-semibold" href="#home">
          Royal Meals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link
              className="me-4 text-decoration-none text-dark fs-5 fw-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-decoration-none fs-5 text-dark fw-medium"
              to="/blog"
            >
              Blog
            </Link>
          </Nav>
          <Nav>
            <Nav.Link>Profile</Nav.Link>
            <Link to="/login">
              <Button className="px-3" variant="dark">
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
