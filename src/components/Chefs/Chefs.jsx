import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData, useNavigation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const chefs = useLoaderData();
  // console.log(chefs);
  const navigate = useNavigation();
  // console.log(navigate);

  if (navigate.state === "loading") {
    return (
      <div className="text-center text-danger">
        <ClipLoader color="#FF0000" />
      </div>
    );
  }

  return (
    <Container>
      <div className="mt-5">
        <h2
          style={{ color: "#43121d" }}
          className="fs-2 fw-semiBold text-center"
        >
          Explore Our Chefs
        </h2>
        <Row xs={1} md={2} lg={3} className="g-5 mt-2">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Chefs;
