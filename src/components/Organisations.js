import ListGroup from 'react-bootstrap/ListGroup';
import { Nav } from 'react-bootstrap';
function LinkedExampleOrganisations() {
  

  return (
    <>
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <span className='text-primary'>An Organisation Demo</span> <br/> Admin
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
        <span className='text-primary'>A Showcase International Development Education Charity</span> <br/> Member
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
      <span className='text-primary'>Oak Tree Secondary School</span> <br/> Admin
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

export default LinkedExampleOrganisations;