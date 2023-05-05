import React from "react";
import { Button, Container } from "react-bootstrap";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();

  return (
    <Container className="mt-4">
      <div className="blog-pdf w-50 mx-auto">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <div className="text-center mb-3">
              <Button variant="danger" onClick={toPdf}>
                Download pdf
              </Button>
            </div>
          )}
        </Pdf>
        <div ref={ref}>
          <h3 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
            1.Tell us the differences between uncontrolled and controlled
            components?
          </h3>
          <p>
            <span className="fs-6 fw-semibold">Ans:</span> A controlled
            component is bound to a value, and its changes will be handled in
            code by using event-based callbacks. Here, the input form element is
            handled by the react itself rather than the DOM. In this, the
            mutable state is kept in the state property and will be updated only
            with setState() method.
            <br />
            Uncontrolled Component is similar to the traditional HTML form
            inputs. Here, the form data is handled by the DOM itself. It
            maintains their own state and will be updated when the input value
            changes. To write an uncontrolled component, there is no need to
            write an event handler for every state update, and you can use a ref
            to access the value of the form from the DOM.
          </p>
          <h3 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
            2.How to validate React props using PropTypes?
          </h3>
          <p>
            <span className="fs-6 fw-semibold">Ans:</span> 1-PropTypes.any : The
            prop can be of any data type.
            <br />
            2-PropTypes.bool : The prop should be a Boolean.
            <br />
            3-PropTypes.number : The prop should be a number.
            <br />
            4-PropTypes.string : The prop should be a string.
            <br />
            5-PropTypes.func : The prop should be a function.
            <br />
            6-PropTypes.array : The prop should be an array.
          </p>
          <h3 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
            3.Tell us the difference between nodejs and express js?
          </h3>
          <p>
            <span className="fs-6 fw-semibold">Ans:</span> Node.js is an open
            source and cross-platform runtime environment for executing
            JavaScript code outside of a browser. You need to remember that
            NodeJS is not a framework and it's not a programming language,
            whereas Express is a framework that sits on top of NodeJS and helps
            us to handle requests and responses.
          </p>
          <h3 style={{ color: "#43121d" }} className="fs-4 fw-semiBold">
            4.What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            <span className="fs-6 fw-semibold">Ans:</span> A custom hook in
            React is a JavaScript function that allows you to extract and reuse
            stateful logic from a component, so that it can be shared between
            components.
            <br />
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
