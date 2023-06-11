import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flyer from "./Flyer";

const eventTitle = "Chicago Casting & Splinting Skills Workshop"
const eventType = "In-Person Event";
const date = "Sat, June 15th, 2023";
const time = "8:00am - 5:00pm";
const location = "Chicago, IL";
const fee = "Registration Fee: $100";

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
    <Accordion.Header >
    <div>
      <h5 className="m-0">{eventTitle}</h5>
      <Container className="d-flex">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
          <HeaderCol icon="bi-person" title={eventType} />
          <HeaderCol icon="bi-calendar-check" title={date} />
          <HeaderCol icon="bi-bi-alarm" title={time} />
          <HeaderCol icon="bi-geo-fill" title={location} />
          <HeaderCol icon="bi-clipboard" title={fee} />
        </Row>
      </Container>
    </div>
  </Accordion.Header>
  )
}

function Body() {
  return (
    <Accordion.Body className="m-0 p-0">
      <Flyer />
    </Accordion.Body>
  )
}

// eventually pass all data through to this component
function Dropdown() {
  return (
    <Accordion style={{borderBottom: "0"}}>
      <Accordion.Item eventKey="0">
        <Header />
        <Body />
      </Accordion.Item>

      {/* <Accordion.Item eventKey="1">
        <Header />
        <Body />
      </Accordion.Item> */}

    </Accordion>
  );
}

export default Dropdown;
