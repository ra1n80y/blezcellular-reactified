import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNav = () => (
  <Navbar expand="sm" variant="dark" sticky="top" className="navbar-custom">
    <Container>
      <Nav className="mx-auto">
        <Nav.Link as={NavLink} to="/" end>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contact">
          Contacts
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default AppNav;
