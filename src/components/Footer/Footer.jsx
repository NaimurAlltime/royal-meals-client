import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#a82d49" }}
      className="text-center text-white py-5 mt-5"
    >
      <div className="text-center">
        <Link
          className="text-decoration-none fs-5 text-white fw-semibold me-4"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="text-decoration-none fs-5 text-white fw-semibold me-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-decoration-none fs-5 text-white fw-semibold me-4"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="mt-3">
        <FaFacebook className="fs-4 me-3" />
        <FaTwitter className="fs-4 me-3" />
        <FaYoutube className="fs-4 me-3" />
        <FaLinkedin className="fs-4 me-3" />
        <FaInstagram className="fs-4 me-3" />
      </div>
      <div className="mt-4">© 2023 Copyright: All rights Reserved</div>
    </footer>
  );
};

export default Footer;
