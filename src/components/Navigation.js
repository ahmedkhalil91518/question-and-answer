import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navigation">
      <Container>
        <Navbar.Brand className="fs-3">
          <Link to="/" className="link ">
            Q & A
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="fs-5 link" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="fs-5 link" to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} className="fs-5 link" to="/Signup">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} className="fs-5 link" to="/Signin">
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
