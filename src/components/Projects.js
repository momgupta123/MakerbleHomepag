import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function LinkedExampleProjects() {

  return (
    <>
    <div className="d-grid gap-2">
      <Button variant="primary" size="md">
        + New Project
      </Button>
      
    </div>

    <ListGroup>
      <ListGroup.Item action href="#link1">
      <img
              src="makerble_logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
       <span className='text-primary'>A Training Project</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
      <img
              src="makerble_logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
       <span className='text-primary'>A Training Projects</span>
      </ListGroup.Item>
      
    </ListGroup>
    <Nav className="justify-content-center" activeKey="/home">
        
        <Nav.Item>
          
          <Nav.Link href="/home">
           View All
          </Nav.Link>
          
        </Nav.Item>
        
      </Nav>
    </>
  );
}

export default LinkedExampleProjects;