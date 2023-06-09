import React from "react";
import { Container } from "react-bootstrap";
import Chefs from "../Chefs/Chefs";
import FAQ from "../FAQ/FAQ";
import Menu from "../Menu/Menu";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Chefs></Chefs>
      <Menu></Menu>
      <FAQ></FAQ>
    </Container>
  );
};

export default Home;
