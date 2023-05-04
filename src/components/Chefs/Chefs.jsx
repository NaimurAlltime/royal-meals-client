import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const chefs = useLoaderData();
  // console.log(chefs);
  // const navigate = useNavigate();

  // const { loading } = useContext(AuthContext);
  // if (navigate === "loading") {
  return (
    <div className="mt-5">
      <h2 style={{ color: "#43121d" }} className="fs-2 fw-semiBold text-center">
        Explore Our Chefs
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </Row>
    </div>
  );
  // }
};

export default Chefs;
