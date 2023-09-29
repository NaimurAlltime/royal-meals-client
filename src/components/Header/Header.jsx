import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Navbar
      className="my-1 mx-3"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      {/* <Container> */}
      <Navbar.Brand
        style={{ color: "#a82d49" }}
        className="fs-3 text-decoration-none fw-semibold"
      >
        Royal Meals
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <NavLink
            style={{ color: "#a82d49" }}
            className="me-4 text-decoration-none fs-5 fw-medium"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{ color: "#a82d49" }}
            className="me-4 text-decoration-none fs-5 fw-medium"
            to="/blog"
          >
            Blog
          </NavLink>
        </Nav>
        <Nav>
          {user ? (
            <>
              <img
                data-tooltip-id="user-name"
                data-tooltip-content={user.displayName}
                style={{ width: "56px", height: "53px" }}
                src={user.photoURL}
                className="rounded-circle"
              />
              <Tooltip id="user-name" />
              <Button
                onClick={handleLogOut}
                className="border-0 ms-2"
                style={{ background: "#a82d49" }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button
                className="border-0 px-4"
                style={{ background: "#a82d49" }}
              >
                Login
              </Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;
