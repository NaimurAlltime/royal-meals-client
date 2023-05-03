import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { SignInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in user
    SignInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        form.reset();
        setSuccess("User Login Successful!");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Google Sign In Successful!");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  //   github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Github Sign In Successful!");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <Container className="w-25 mx-auto border mt-4 p-4">
      <h2 style={{ color: "#43121d" }}>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link>Forgot password?</Link>
        </Form.Group>
        <Button
          className="w-100 border-0"
          style={{ background: "#a82d49" }}
          type="submit"
        >
          Login
        </Button>
        <br />
        <Form.Text className="text-success mt-3">
          Don't Have An Account ? <Link to="/register">Register</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success">{success}</Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <hr />
      <Button
        onClick={handleGoogleSignIn}
        variant="outline-secondary w-100 mt-2"
      >
        <FcGoogle /> Sign-in With Google
      </Button>
      <Button onClick={handleGithubSignIn} variant="outline-success w-100 mt-3">
        <FaGithub className="ms-1" /> Sign-in With Github
      </Button>
    </Container>
  );
};

export default Login;
