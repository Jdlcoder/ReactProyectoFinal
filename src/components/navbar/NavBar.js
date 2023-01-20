import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar() {
  return (
    <Navbar className="fixed-top " bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img
              src='./logo192.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo Marca"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/electronics" >Electronics</Nav.Link>
            <Nav.Link as={Link} to="/category/jewelery" >Jewelery</Nav.Link>
            <Nav.Link as={Link} to="/category/mens_clothing" >Men's clothing</Nav.Link>
            <Nav.Link as={Link} to="/category/womens_clothing" >Women's clothing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget cantidad="10"/>
    </Navbar>
  );
}

export default NavBar;