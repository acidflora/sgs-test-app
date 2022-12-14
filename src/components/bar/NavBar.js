import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "../routes/Home";
import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">SGS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Task #1" id="basic-nav-dropdown">
                <NavDropdown.Item href="/action/2.1">
                  Continers
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/2.2">
                  Operations
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/2.3">
                  Containers JSON
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/2.4">
                  Operations JSON
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Task #2" id="basic-nav-dropdown">
                <NavDropdown.Item href="/action/3.1">
                  Raw HTML+JS Form
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/3.2">
                  React.js Form
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
