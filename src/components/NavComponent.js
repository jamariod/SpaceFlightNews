import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';


function NavComponent() {


  return (
    <header>
      <Navbar className="fixed-top" bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand>Space Flight News</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
         />
      
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default NavComponent;