import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ConferenceInfo from "../components/ConferenceInfo";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flyer from "./Flyer";

function HeaderCol({icon, title}: {icon: string, title: string}){
  return (
    <Col xs={12} md={6} lg={4} className="p-0 d-flex justify-content-center align-items-center" style={{textAlign: 'center'}}>
    <Card.Text className='m-0 p-0 pt-2' >
          <i className={`bi ${icon}`}></i> {title}
    </Card.Text>
  </Col>
  )
}

function Header() {
  return (
    <Accordion.Header>
    <div>
      <h5 className="m-0">Chicago Casting & Splinting Skills Workshop</h5>
      <Container className="d-flex">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
          <HeaderCol icon="bi-person" title="In-Person Event" />
          <HeaderCol icon="bi-calendar-check" title="Sat, June 15th, 2023" />
          <HeaderCol icon="bi-bi-alarm" title="8:00am - 5:00pm" />
          <HeaderCol icon="bi-geo-fill" title="Chicago, IL" />
          <HeaderCol icon="bi-clipboard" title="Registration Fee: $100" />
        </Row>
      </Container>
    </div>
  </Accordion.Header>
  )
}

// eventually pass all data through to this component
function Dropdown() {
  return (
    <Accordion>
      {/* increase eventKey upon new entry */}
      <Accordion.Item eventKey="0">
        <Header />
        <Accordion.Body className="m-0">
          {/* <ConferenceInfo /> */}
          <Flyer />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Dropdown;
