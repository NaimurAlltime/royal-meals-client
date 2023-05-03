import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    // password validation
    if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    // create User With Email And Password
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been created successful!");
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <Container className="w-25 mx-auto border mt-4 p-4">
      <h2 style={{ color: "#43121d" }}>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            id="photo"
            name="photo"
            placeholder="Your Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="w-100 border-0"
          style={{ background: "#a82d49" }}
          type="submit"
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-success mt-3">
          Already Have An Account ? <Link to="/login">Login</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success">{success}</Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <hr />
      <Button variant="outline-secondary w-100 mt-2">
        <FcGoogle /> Sign-in With Google
      </Button>
      <Button variant="outline-success w-100 mt-3">
        <FaGithub className="ms-1" /> Sign-in With Github
      </Button>
    </Container>
  );
};

export default Register;
