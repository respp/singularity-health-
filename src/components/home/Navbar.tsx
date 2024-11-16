import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css'

export const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg" className='text-regular'>
      <Container>
        <Navbar.Brand href="#home">brand-here</Navbar.Brand>
        {/* Botón hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#franchise">Franchise with Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
