import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import ContentCard from "../ui/ContentCard";
import React from "react";

const Home = (props) => {
  return (
    <div>
      <Card.Header>Welcome to my test Web Application</Card.Header>
      <Card.Body>
        <Card.Title>
          <a>
            My name is Artem Kupriyanov. I have make this web app to demonstrate
            my hard skills
          </a>
          <br />
        </Card.Title>

        <Card.Text>
          <a
            target="_blank"
            href="https://hh.kz/resume/4381ae76ff0b18f60c0039ed1f3279714c4a33"
          >
            My hh.kz account
          </a>
          <p>My phone number +7(747)108-50-21</p>
          <p>You could find my solution to the tasks down below</p>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item>
              <Nav.Link href="/sgs-test-app/action/2.1">
                Write scripts to create a table with containers
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/sgs-test-app/action/2.2">
                Write scripts to create a table with operations
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/sgs-test-app/action/2.3">
                Write a query that selects from the first table all container
                data in JSON format without using the built-in function
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/sgs-test-app/action/2.4">
                Write a query that selects from the second table all transaction
                data for a specific container in JSON format without using the
                built-in function
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/sgs-test-app/action/3.1">
                Create a form using Html + JavaScript
              </Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/sgs-test-app/action/3.2">
                Make a similar form in Vue.JS
              </Nav.Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Footer>
    </div>
  );
};

export default Home;
