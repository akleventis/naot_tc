import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/logo.svg'


function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light" className="p-0">
        <Container style={{ maxWidth: '1000px' }} className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Navbar.Brand href="/">
              <Image
                src={logo}
                width="55"
                height="55"
                className="d-inline-block align-top"
                alt="NOAT logo"
              />
            </Navbar.Brand>
            National Assocciation of Orthopaedic Technologists
          </div>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;