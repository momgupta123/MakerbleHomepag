import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function LinkedExampleBoards() {
  

  return (
    <>
    <div className="d-grid gap-2">
      <Button variant="primary" size="md">
        + New Board
      </Button>
      
    </div>
    <ListGroup>
      <ListGroup.Item action href="#link1">
      <img
              src="makerble_logo.jpeg"
              width="31"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
       <span className='text-primary'>3315</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
      <img
              src="makerble_logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
       <span className='text-primary'>Angola Production</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
      <img
              src="makerble_logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
       <span className='text-primary'>Attendance Reporting</span>
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

export default LinkedExampleBoards;