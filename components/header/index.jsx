import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Layout = () => (
  <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">PurpleIo - 맛집</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Eat</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default Layout;
