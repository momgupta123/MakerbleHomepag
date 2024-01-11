import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src="makerble_logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="My Apps" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Apps</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Explore</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='text-primary'> Create</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='text-primary'>
                Upgrade
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6" className='text-primary'>
                More
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-primary'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className='text-dark'>
            <img
              src="botFace.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
             <span className='text-primary'> Yael Adamson-Brown</span>
            </Nav.Link>
            
          </Nav>
          
          <Form className='d-flex'>
            <Form.Control
              type="search"
              placeholder="Search  for contacts and projects"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;