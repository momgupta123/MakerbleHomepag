import Accordion from 'react-bootstrap/Accordion';
import LinkedExample from './Events';
import LinkedExampleEvents from './Events';
import LinkedExampleContacts from './Contacts';
import LinkedExampleProjects from './Projects';
import LinkedExampleAlbums from './Albums';
import LinkedExampleOrganisations from './Organisations';
import ShapeExample from './Follow';

function AllCollapseExample1() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='text-primary'>Events</span></Accordion.Header>
        <Accordion.Body>
          <LinkedExampleEvents />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='text-primary'>Contacts</span></Accordion.Header>
        <Accordion.Body>
          <LinkedExampleContacts />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='text-primary'>Projects</span></Accordion.Header>
        <Accordion.Body>
        <LinkedExampleProjects />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='text-primary'>Albums</span></Accordion.Header>
        <Accordion.Body>
        <LinkedExampleAlbums />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span className='text-primary'>Organisations</span></Accordion.Header>
        <Accordion.Body>
        <LinkedExampleOrganisations />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><span className='text-primary'>Followers</span></Accordion.Header>
        <Accordion.Body>
        <ShapeExample />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><span className='text-primary'>Following</span></Accordion.Header>
        <Accordion.Body>
        <ShapeExample />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample1;