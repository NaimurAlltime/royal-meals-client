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
        <Navbar.Brand>
          <Link
            style={{ color: "#a82d49" }}
            className="fs-3 text-decoration-none fw-semibold"
            to="/"
          >
            Royal Meals
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link
              style={{ color: "#a82d49" }}
              className="me-4 text-decoration-none fs-5 fw-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ color: "#a82d49" }}
              className="text-decoration-none fs-5 fw-medium"
              to="/blog"
            >
              Blog
            </Link>
          </Nav>
          <Nav>
            <Nav.Link>Profile</Nav.Link>
            <Link to="/login">
              <Button
                className="border-0 px-4"
                style={{ background: "#a82d49" }}
              >
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
