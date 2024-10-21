import Nav from 'react-bootstrap/Nav';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function LinkedExampleTasks() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <>
      <div className="d-grid gap-2">
      <Form.Select >
        <option >Story Filters</option>
      </Form.Select>
      <Button variant="primary" size="md">
        + New Tasks
      </Button> 
      
    </div>

      {/* <Button variant="primary" size="md" className='d-flex'>
        View All
      </Button> */}
      


    <Form>
      
        <Form.Check type='checkbox' id='default-checkbox' label='follow up call needed' />
        <Form.Check type='checkbox' id='default-checkbox' label='contact the local auth' />
        <Form.Check type='checkbox' id='default-checkbox' label='speak to the GP about the meeting' />

          
        
    </Form>
  

      
      
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

export default LinkedExampleTasks;
