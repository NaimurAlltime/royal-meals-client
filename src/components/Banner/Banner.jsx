import React from "react";
import { Button } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-lg-4 col-md-4">
        <h2 style={{ color: "#43121d" }} className="fs-1 fw-bold">
          Good food choices
          <br />
          are good
          <br />
          investments.
        </h2>
        <p className="mt-3 mb-4">
          Becoming a cook is my dream since I was little, and here
          <br />I have found a way to make it happen.
        </p>
        <div className="mt-2 mb-3">
          <Button className="border-0 me-3" style={{ background: "#a82d49" }}>
            Order Now <FaShoppingBasket />
          </Button>
          <Button variant="outline-danger">Learn More</Button>
        </div>
      </div>
      <div className="col-lg-8 col-md-8">
        <img
          className="img-fluid w-100"
          src="https://img.freepik.com/free-photo/vegan-almond-milk-chia-seeds-pudding-with-banana-kiwi_2829-5952.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
