import Accordion from 'react-bootstrap/Accordion';
import LinkedExample from './Events';
import LinkedExampleEvents from './Events';
import LinkedExampleContacts from './Contacts';
import LinkedExampleProjects from './Projects';
import LinkedExampleAlbums from './Albums';
import LinkedExampleBoards from './Boards';
import WithLabelExample from './PersonalProgress';
import LinkedExampleTasks from './Tasks';

function AllCollapseExample2() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='text-primary'>Boards</span></Accordion.Header>
        <Accordion.Body>
          <LinkedExampleBoards />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='text-primary'>Personal Progress</span></Accordion.Header>
        <Accordion.Body>
          <WithLabelExample />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='text-primary'>Tasks</span></Accordion.Header>
        <Accordion.Body>
        <LinkedExampleTasks />
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default AllCollapseExample2;