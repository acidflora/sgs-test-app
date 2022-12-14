import { Button, Card } from "react-bootstrap";
import kit from "../images/kit_meme.jpg";
import React from "react";

const Task5 = (props) => {
  return (
    <div>
      <Card.Img variant="top" src={kit} />
      <Card.Header>Create a form using Html + JavaScript</Card.Header>
      <Card.Body>
        I did not implement the form in pure html + js, because I have little
        experience with them, which would take a lot of time. Instead, on the
        next page, I implemented the form in react.js
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href="/sgs-test-app/action/3.2">
          Next Task
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Task5;
