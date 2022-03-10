import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-3">
          Q & A
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fs-5 ">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="fs-5">
              About
            </Nav.Link>
            <Nav.Link href="#Signup" className="fs-5">
              Signup
            </Nav.Link>
            <Nav.Link href="#Signin" className="fs-5">
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
