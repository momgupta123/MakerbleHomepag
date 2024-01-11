import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AllCollapseExample1 from './LeftShortcuts';

function OffCanvasExample1({ name, placement, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><span className=' text-primary'>QuickLinks Hub</span></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AllCollapseExample1 />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample1;
