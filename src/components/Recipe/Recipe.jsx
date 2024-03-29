import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import { toast, ToastContainer } from "react-toastify";

import "@smastrom/react-rating/style.css";

const Recipe = ({ recipe }) => {
  const [click, setClick] = useState(true);
  // console.log(recipe);
  const handleButton = (event) => {
    toast("This recipe is my favorite!");
    setClick(event.target.checked);
  };

  const { name, ingredients, method, rating, img_url } = recipe;
  return (
    <Col>
      <Card className="h-100" style={{ width: "384px" }}>
        <LazyLoad>
          <Card.Img variant="top" style={{ height: "200px" }} src={img_url} />
        </LazyLoad>
        <Card.Body>
          <Card.Title className="fw-semibold fs-4 mb-3"> {name} </Card.Title>
          <p>
            <span className="fw-semibold mb-2 fs-5">Ingredients:</span>
            <br /> {ingredients}
          </p>
          <p>
            <span className="fw-semibold mb-1 fs-5">Cooking Method:</span>
            <br /> {method}
          </p>
          <div className="d-flex mb-4">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <span className="fw-semibold fs-5 ms-2">{rating}</span>
          </div>
          <div className="text-center pt-4">
            <Button
              className="border-0 position-absolute bottom-0 my-2 end-0 w-100 fw-semibold fs-5"
              onClick={handleButton}
              disabled={!click}
              style={{ background: "#a82d49" }}
            >
              Favorite
            </Button>
            <ToastContainer />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
