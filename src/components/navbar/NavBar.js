import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src='logo192.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo Marca"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Principal</Nav.Link>
            <Nav.Link href="#link">Promociones</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tecnología</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Electro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Climatización</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Novedades
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget cantidad="10"/>
    </Navbar>
  );
}

export default NavBar;