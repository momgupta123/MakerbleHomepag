import Nav from 'react-bootstrap/Nav';

function ShapeExample() {
  return (
    <>
      
      <Nav className="justify-content-center" activeKey="/home">
        
        <Nav.Item>
        
          <Nav.Link href="/home">
          <img
              src="BOT1.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Evelyn Sterling
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="BOT2.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Nathaniel Clarke
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="BOT3.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Isabella Santiago
          </Nav.Link>
          <Nav.Link href="/home">
           View All
          </Nav.Link>
          
        </Nav.Item>
        
      </Nav>
    </>
  );
}

export default ShapeExample;