import React from "react";
import { Container } from "react-bootstrap";
import Chefs from "../Chefs/Chefs";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Chefs></Chefs>
    </Container>
  );
};

export default Home;
