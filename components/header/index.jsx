import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <>
    <Navbar bg="light" expand="lg" className="p-5">
      <Container>
        <Navbar.Brand href="/">AWESOME FOOD STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="px-3">
              Eat
            </Nav.Link>
            <Nav.Link href="/about" className="px-3">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default Header;
