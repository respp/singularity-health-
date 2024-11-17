import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css'
import { useDispatch } from 'react-redux';
import { setHomeText } from '../../../store/slices';

export const NavbarComponent = () => {
  const dispatch = useDispatch();

  const handleNavItemClick = (item: string) => {
    // Define el texto que debe mostrarse en Home según el ítem del menú
    let newText = '';
    switch (item) {
      case 'Location':
        newText = 'For over 17 Years, Fetch! Pet Care Has been a trusted partner in keeping pets healthy and happy!';
        break;
      case 'Blog':
        newText = 'Explore our blog for pet care tips, and insightful stories about how to make your pet’s life better';
        break;
      case 'Services':
        newText = 'We offer a wide range of pet care services, including grooming, training, and pet sitting.';
        break;
      case 'About Us':
        newText = 'We are a passionate team with over 17 years of experience in pet care! Learn more about us here.';
        break;
      case 'Franchise':
        newText = 'Join Fetch! Pet Care and become part of the nation’s largest and most trusted pet care franchise.';
        break;
      default:
        newText = 'For over 17 Years, Fetch! Pet Care Has been a trusted partner in keeping pets healthy and happy!';
    }
    
    dispatch(setHomeText(newText)); 
  };

  return (
    <Navbar variant="dark" expand="lg" className='text-regular'>
      <Container>
        <Navbar.Brand href="#home">brand-here</Navbar.Brand>
        {/* Botón hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='#Location'  onClick={() => handleNavItemClick('Location')}>Location</Nav.Link>
            <Nav.Link href='#Blog'      onClick={() => handleNavItemClick('Blog')}>Blog</Nav.Link>
            <Nav.Link href='#Services'  onClick={() => handleNavItemClick('Services')}>Services</Nav.Link>
            <Nav.Link href='#About-Us'  onClick={() => handleNavItemClick('About Us')}>About Us</Nav.Link>
            <Nav.Link href='#Franchise' onClick={() => handleNavItemClick('Franchise')}>Franchise with Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
