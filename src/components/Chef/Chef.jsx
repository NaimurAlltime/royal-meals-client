import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, name, img_url, num_recipes, experience_years, likes } = chef;
  // console.log(chef);
  return (
    <Col>
      <Card>
        <Card.Img variant="top" style={{ height: "400px" }} src={img_url} />
        <Card.Body>
          <Card.Title className="fw-semibold fs-4 mb-4"> {name} </Card.Title>
          <p className="fw-semibold mb-2">
            <span className="fs-5 text-danger">{experience_years}</span> {""}
            Years of experience
          </p>
          <p className="fw-semibold mb-2">
            Numbers of recipes: <span className="fs-5">{num_recipes}</span>
          </p>
          <p className="fw-semibold fs-5">
            <FcLike className="me-2 mb-1" />
            {likes}
          </p>
          <Link to={`/chef/${id}`}>
            <Button variant="outline-danger">View Recipes </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Chef;
