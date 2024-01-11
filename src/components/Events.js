import ListGroup from 'react-bootstrap/ListGroup';


function LinkedExampleEvents() {
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  return (
    <ListGroup>
      <ListGroup.Item action href="#link1">
        <span className='text-primary'>Youth Panel </span> <br/> 13:00 02/03/2023 - 15:30 02/03/2023 <br/><span className='text-muted'> 1 Manager, 0 Workers, 0 Guests</span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
      <span className='text-primary'>Digital Inclusion Event</span> <br/> 10:00 06/03/2023 - 15:00 06/03/2023 <br/><span className='text-muted'> 1 Manager, 5 Workers, 8 Guests </span>
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
      <span className='text-primary'>Youth Panel </span><br/> 13:00 02/04/2023 - 15:30 02/04/2023 <br/><span className='text-muted'> 1 Manager, 0 Workers, 0 Guests</span>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default LinkedExampleEvents;