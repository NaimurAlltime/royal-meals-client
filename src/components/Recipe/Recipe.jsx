import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import "@smastrom/react-rating/style.css";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, method, rating, img_url } = recipe;
  return (
    <Col>
      <Card style={{ height: "600px" }}>
        <Card.Img variant="top" style={{ height: "200px" }} src={img_url} />
        <Card.Body>
          <Card.Title className="fw-semibold fs-4 mb-3"> {name} </Card.Title>
          <p>
            <span className="fw-semibold mb-2 fs-5">Ingredients:</span>
            <br /> {ingredients}
          </p>
          <p>
            <span className="fw-semibold mb-2 fs-5">Cooking Method:</span>
            <br /> {method}
          </p>
          <div className="d-flex mb-3">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <span className="fw-semibold fs-5 ms-2">{rating}</span>
          </div>
          <div className="text-center">
            <Button
              className="border-0 w-100 fw-semibold fs-5"
              style={{ background: "#a82d49" }}
            >
              Favorite
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
