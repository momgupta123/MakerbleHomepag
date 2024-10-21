import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeaderAndFooterExample from './NewsFeed';
import OffCanvasExample1 from './Sidebar';
import OffCanvasExample2 from './Sidebar2';
// import OffCanvasExample1 from './components/Sidebar';
// import OffCanvasExample2 from './components/Sidebar2';

function FillExampleNF() {
  return (
    <Tabs
      defaultActiveKey="newsfeed"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
        <Tab eventKey="newsfeed" title="NEWSFEED">
        <OffCanvasExample1 name=" <- QuickLinks Hub" placement="start" />
      </Tab>
      <Tab eventKey="newsfeed" title="NEWSFEED">
        <HeaderAndFooterExample />
      </Tab>
      <Tab eventKey="newsfeed" title="NEWSFEED">
      <OffCanvasExample2 name=" <- Your Progess" placement="start" />
      </Tab>
     
      
    </Tabs>
  );
}

export default FillExampleNF;