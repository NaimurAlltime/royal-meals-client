import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefRecipes = () => {
  const chef = useLoaderData();
  const { name, img_url, num_recipes, experience_years, likes, bio, recipes } =
    chef;
  console.log(chef);
  return (
    <Container>
      <Col>
        <Card>
          <Card.Img variant="top" style={{ height: "540px" }} src={img_url} />
          <Card.Body>
            <Card.Title className="fw-semibold fs-4 mb-4"> {name} </Card.Title>
            <div className="d-flex justify-content-between">
              <p className="fw-semibold mb-2">
                <span className="fs-5 text-danger">{experience_years}</span>{" "}
                {""}
                Years of experience
              </p>
              <p className="fw-semibold mb-2">
                Numbers of recipes: <span className="fs-5">{num_recipes}</span>
              </p>
              <p className="fw-semibold fs-5">
                <FcLike className="me-2 mb-1" />
                {likes}
              </p>
            </div>
            <p>
              <span className="fw-semibold fs-5">Short Description:</span>
              <br /> {bio}
            </p>
          </Card.Body>
        </Card>
      </Col>
      <div className="mt-5">
        <h2
          style={{ color: "#43121d" }}
          className="fs-2 fw-semiBold text-center"
        >
          My Recipes
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          {recipes.map((recipe, idx) => (
            <Recipe key={idx} recipe={recipe}></Recipe>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ChefRecipes;
