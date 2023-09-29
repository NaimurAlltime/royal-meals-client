import React from "react";
import { Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container>
      <div className="mt-5">
        <h2
          style={{ color: "#43121d" }}
          className="fs-2 fw-semiBold text-center"
        >
          Frequently Asked Questions
        </h2>

        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
          <div className="col">
            <h2 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
              ~ Do you have a kids menu?
            </h2>
            <p>
              On average, children only need about 1,200 to 1,800 calories every
              day. That means that a healthy kids' meal should be about 500
              calories or less. Today's savvy parents don't want to order more
              food than their child could eat. Kids' restaurant menus offer
              smaller portions for smaller appetites
            </p>
          </div>
          <div className="col">
            <h2 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
              ~ How good is the customer service?
            </h2>
            <p>
              Great customer service is quick, easy, personalized, and
              empathetic. Companies that deliver excellent customer service take
              the time needed to understand the needs of their unique customer
              base.
            </p>
          </div>
          <div className="col">
            <h2 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
              ~ What about the payment methods?
            </h2>
            <p>
              This includes debit cards, credit cards, electronic funds
              transfers, direct credits, direct debits, internet banking and
              e-commerce payment systems. Payment systems may be physical or
              electronic and each has its own procedures and protocols.
            </p>
          </div>
          <div className="col">
            <h2 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
              ~ Do you take reservations?{" "}
            </h2>
            <p>
              A reservation guarantees diners a table at the restaurant of their
              choice when they arrive. For the most part, diners don't have to
              put down a deposit to reserve a table and the check is settled
              after the meal has ended.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
