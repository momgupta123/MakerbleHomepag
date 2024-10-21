import ListGroup from 'react-bootstrap/ListGroup';

function Makerble() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <>
    // <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Makerble
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Terms and Conditions
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        About Us
      </ListGroup.Item>
    // </ListGroup>
    </>
  );
}

export default Makerble;