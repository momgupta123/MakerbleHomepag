import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function WithLabelExample() {
//   const now = 7;
  return( 
  <>
  <div className="d-grid gap-2">
      <Button variant="primary" size="md">
        Go to Board
      </Button>
      <br/>
      
    </div>
    <div>
    {/* <ProgressBar now={now * 10} label={`${now}  `} />; */}
    Are either of your parents living?
    <br/>
      <ProgressBar variant="success" now={70} label={`${7}  `} /> <br/>
      Do you belong to any groups in while...<br/>
      <ProgressBar variant="info" now={60} label={`${6}  `} /><br/>
      {/* <ProgressBar variant="warning" now={60} label={`${now}  `} /> */}
      Any 1-2-1 meetings? <br/>
      <ProgressBar variant="danger" now={20} label={`${2}  `} />
    </div>
    <Nav className="justify-content-center" activeKey="/home">
        
        <Nav.Item>
          
          <Nav.Link href="/home">
           View All
          </Nav.Link>
          
        </Nav.Item>
        
      </Nav>
  </>
  )
}

export default WithLabelExample;
