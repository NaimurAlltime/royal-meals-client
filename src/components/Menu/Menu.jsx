import React from "react";
import { Button } from "react-bootstrap";

const Menu = () => {
  return (
    <div className="mt-5">
      <h2 style={{ color: "#43121d" }} className="fs-2 fw-semiBold text-center">
        Explore The Menu
      </h2>
      <p className="text-center">
        We make everything by hand with the best possible ingredients.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=sph"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Chicken Pastas</h5>
              <p className="card-text">
                Pasta of several starchy food preparations frequently associated
                with Italian cuisine and made from semolina, the granular
                product...
              </p>
              <Button variant="outline-danger">View Details </Button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://img.freepik.com/free-photo/top-view-tasty-cooked-fish-with-fresh-vegetables-cutlery-dark-table_140725-143719.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Fish Fry</h5>
              <p className="card-text">
                A fish fry is a meal containing battered or breaded fried fish.
                It usually also includes french fries, coleslaw, macaroni
                salad...
              </p>
              <Button variant="outline-danger">View Details </Button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?size=626&ext=jpg&ga=GA1.2.209329912.1680195530&semt=ais"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Chicken kebab</h5>
              <p className="card-text">
                kebab, also spelled kebob or kabob, dish of Middle Eastern or
                Central Asian origin that typically combines small pieces of
                meat such as...
              </p>
              <Button variant="outline-danger">View Details </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
