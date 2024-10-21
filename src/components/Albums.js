import ListGroup from 'react-bootstrap/ListGroup';
import { Nav } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function LinkedExampleAlbums() {

  return (
    <>
    <div className="d-grid gap-2">
      <Button variant="primary" size="md">
        + New Album
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
        <span className='text-primary'>Roberston Trust</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
      <img
              src="makerble_logo.jpeg"
              width="31"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <span className='text-primary'>FASE Funding 2022</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
      <img
              src="makerble_logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <span className='text-primary'>Funded Projects</span>
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

export default LinkedExampleAlbums;