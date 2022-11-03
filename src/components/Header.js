import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './header.css'

function ColorSchemesExample() {
    return (
        <Navbar bg="light" variant="light">
          <Container>
        <Navbar.Brand href="#home">Demo App v0.1</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/login" className="navLink">Login</Link>
              </Nav.Link>
              <Nav.Link> <Link to="/dashboard" className="navLink">Dashboard</Link></Nav.Link>
            
            
            </Nav>
          </Container>
        </Navbar>
    );
  }
  
  export default ColorSchemesExample;