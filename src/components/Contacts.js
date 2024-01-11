import Nav from 'react-bootstrap/Nav';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

function LinkedExampleContacts() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <>
      <div className="d-grid gap-2">
      <Button variant="primary" size="md">
        + New Contact
      </Button>
      
    </div>

      {/* <Button variant="primary" size="md" className='d-flex'>
        View All
      </Button> */}
      <ListGroup>
        <ListGroup.Item action href="#link1">
          <img
            src="makerble_logo.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className='text-primary'>A11 Frank</span> <br/> Your last update was 6 days ago
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" >
          <img
            src="makerble_logo.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className='text-primary'>A1 Adam android online</span>
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          <img
            src="makerble_logo.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className='text-primary'>A1 demo referral contact</span> <br/> Your last update was 6 days ago
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

export default LinkedExampleContacts;
