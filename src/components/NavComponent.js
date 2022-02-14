import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import halfMoon from '../video/half-moon.svg';


function NavComponent() {


  return (
    <header>
      <Navbar className="fixed-top" bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand>
    <img
        src={halfMoon}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
       
      />
    </Navbar.Brand>
    <Navbar.Brand>
    
      Space Flight News</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default NavComponent;