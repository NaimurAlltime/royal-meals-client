import React from "react";
import Chefs from "../Chefs/Chefs";
import FAQ from "../FAQ/FAQ";
import Menu from "../Menu/Menu";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    // <Container>
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <Menu></Menu>
      <FAQ></FAQ>
    </div>
    // </Container>
  );
};

export default Home;
