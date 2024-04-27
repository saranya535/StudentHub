// Importing necessary modules
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Navbar component
export default function MyNavbar() {
  return (
    // Bootstrap Navbar component
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="/">StudentHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left-aligned Nav links */}
          <Nav className="me-auto">
            <Nav.Link href="/createCourse">Add Course</Nav.Link>
            <Nav.Link href="/createStudent">Add Student</Nav.Link>
          </Nav>
          {/* Right-aligned Nav links */}
          <Nav>
            <Nav.Link href="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
