import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
        <img
              src="FOOTERLOGO.png"
              width="130"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <Nav.Link href="/home">About Us</Nav.Link>
          <Nav.Link href="/home">Terms & Conditions</Nav.Link>
          <Nav.Link href="/home">Privacy & Cookies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="disabled" className='text-dark' disabled>
            ORGANISATIONS
          </Nav.Link>
          <Nav.Link href="/home">Control Panel</Nav.Link>
          <Nav.Link href="/home">Discover the Marketplace</Nav.Link>
          <Nav.Link href="/home">Create Organisation Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="disabled" className='text-dark' disabled>
            YOUR ACCOUNT
          </Nav.Link>
          <Nav.Link href="/home">Library</Nav.Link>
          <Nav.Link href="/home">Profile</Nav.Link>
          <Nav.Link href="/home">Account</Nav.Link>
          <Nav.Link href="/home">Help</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="disabled" className='text-dark' disabled>
            EXPLORE
          </Nav.Link>
          <Nav.Link href="/home">Metrics</Nav.Link>
          <Nav.Link href="/home">Networks</Nav.Link>
          <Nav.Link href="/home">Strategies</Nav.Link>
          <Nav.Link href="/home">Projects</Nav.Link>
          <Nav.Link href="/home">Studies</Nav.Link>
          <Nav.Link href="/home">Surveys</Nav.Link>
          <Nav.Link href="/home">Tips</Nav.Link>
          <Nav.Link href="/home">Vouchers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="disabled" className='text-dark' disabled>
            FOLLOW THE MAKERBLE STORY
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="LINKEDIN.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Click here
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="YT.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Click here
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="IG.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Click here
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="TWITTER.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Click here
          </Nav.Link>
          <Nav.Link href="/home">
          <img
              src="FB.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Click here
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
    </>
  );
}

export default AlignmentExample;