import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
function HeaderAndFooterExample() {
  return (
    <>
    <br/>
    <Card className="text-start">
      
      <Card.Body>
        <Card.Title>
        <img
              src="botFace.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <span className='text-primary'>  Yael Adamson-Brown</span></Card.Title>
        <Card.Text>
          <span className='text-muted'>
        Posted at 08:00 on 18th February 2023
        </span>{' '}
          <Button variant="primary" size="sm" disabled>
          Update
        </Button>{' '}
          <br/>
          1 by Yael Adamson-Brown working at Harvesting starting at 10:00 on 18th February 2023 on Cereal Farming project for Farming Test
        </Card.Text>
        <Button variant="success">Expand Story</Button> {' '}
        
      <Button variant="outline-danger">♡</Button> {' '}
      <Button variant="outline-danger">💬</Button> {' '}
      <Button variant="outline-danger">★</Button> {' '}
    
      </Card.Body>
      <Card.Footer className="text-muted">Posted 1 days ago</Card.Footer>
      <InputGroup className="mb-3">
      <img
              src="botFace.jpeg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Form.Control
          placeholder='Write a comment'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          variant="outline-dark"
        />
        <Button variant="danger" id="button-addon2">
          Post
        </Button>
      </InputGroup>
    </Card>
    <br/>
    <br/>
    <Card className="text-start">
      {/* <Card.Header>NEWSFEED</Card.Header> */}
      <Card.Body>
        <Card.Title>
        <img
              src="botFace.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <span className='text-primary'>  Yael Adamson-Brown</span></Card.Title>
        <Card.Text>
          <span className='text-muted'>Posted at 08:00 on 18th February 2023</span>{' '}
          <Button variant="primary" size="sm" disabled>
          Attendance
        </Button>{' '}
          <br/>
          1 by Yael Adamson-Brown working at Harvesting starting at 10:00 on 18th February 2023 on Cereal Farming project for Farming Test
        </Card.Text>
        <Button variant="success">Expand Story</Button>{' '}
        <Button variant="outline-danger">♡</Button> {' '}
      <Button variant="outline-danger">💬</Button> {' '}
      <Button variant="outline-danger">★</Button> {' '}
      </Card.Body>
      <Card.Footer className="text-muted">Posted 3 days ago</Card.Footer>
      <InputGroup className="mb-3">
      <img
              src="botFace.jpeg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Form.Control
          placeholder='Write a comment'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          variant="outline-dark"
        />
        <Button variant="danger" id="button-addon2">
          Post
        </Button>
      </InputGroup>
    </Card>
    <br/><br/>
    <Card className="text-start">
      
      <Card.Body>
        <Card.Title>
        <img
              src="botFace.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <span className='text-primary'>  Yael Adamson-Brown</span></Card.Title>
        <Card.Text>
          <span className='text-muted'>Posted at 08:00 on 18th February 2023</span>{' '}
          <Button variant="primary" size="sm" disabled>
          Update
        </Button>{' '}
          <br/>
          1 by Yael Adamson-Brown working at Harvesting starting at 10:00 on 18th February 2023 on Cereal Farming project for Farming Test
        </Card.Text>
        <Button variant="success">Expand Story</Button>{' '}
        <Button variant="outline-danger">♡</Button> {' '}
      <Button variant="outline-danger">💬</Button> {' '}
      <Button variant="outline-danger">★</Button> {' '}
      </Card.Body>
      <Card.Footer className="text-muted">Posted 3 days ago
        </Card.Footer>
      <InputGroup className="mb-3">
      <img
              src="botFace.jpeg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Form.Control
          placeholder='Write a comment'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          variant="outline-dark"
        />
        <Button variant="danger" id="button-addon2">
          Post
        </Button>
      </InputGroup>
    </Card>
    <br/><br/>
    <div className="d-grid gap-2">
      <Button variant="outline-success" size="md">
        Lode more...
      </Button>
      <br/><br/>
      
    </div>
  </>
  );
}

export default HeaderAndFooterExample;