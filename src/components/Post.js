import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonsExample() {
  return (
    <>
      

      <InputGroup className="mb-3">
        <Form.Control
          placeholder='Yael Adamson-Brown share some progress...'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          variant="outline-dark"
        />
        <Button variant="danger" id="button-addon2">
          Post
        </Button>
      </InputGroup>

      
    </>
  );
}

export default ButtonsExample;