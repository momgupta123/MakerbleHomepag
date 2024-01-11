import logo from './logo.svg';
// import './App.css';
// import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FillExample from './components/Navbar';
import Button from 'react-bootstrap/Button';
import Sidebar from './components/Sidebar';
// import OffCanvasExample from './components/Sidebar';
import HeaderAndFooterExample from './components/NewsFeed';
import OffCanvasExample1 from './components/Sidebar';
import OffCanvasExample2 from './components/Sidebar2';
import FillExampleNF from './components/Grid';
import ButtonsExample from './components/Post';
import BrandExample from './components/Logo';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import AlignmentExample from './components/Footer';

function App() {
  return (
    <>
    <FillExample />
    <br/>
    {/* <Button variant="danger">Danger</Button>{' '} */}
    <ButtonsExample />
      <Form.Select>
        <option>Story Filters</option>
      </Form.Select>
      <br/>
    <OffCanvasExample1 name=" <- " placement="start" /> 
    <span className='text-dark'>NEWSFEED</span> {'  '}
    <OffCanvasExample2 name=" -> " placement="end" /><br/> 

    
    {/* <BrandExample /> */}
    <HeaderAndFooterExample />
    <AlignmentExample />
    
    </>
  );
}

export default App;
