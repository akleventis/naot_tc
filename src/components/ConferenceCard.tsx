import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";


const handleClick = () => {
  alert("click");
};

function ConferenceCard() {
  return (
    <Card style={{ width: "350px", cursor: "pointer" }} onClick={handleClick}>
      <Card.Header className="bg-secondary fs-5">
        Chicago Casting & Splinting Skills Workshop
      </Card.Header>
      <Card.Body>
        <Card.Text className="mb-1">
          <i className="bi bi-person"></i> In-Person Event
        </Card.Text>
        <Card.Text className="mb-1">
          <i className="bi bi-clipboard2-pulse"></i> CASTING & SPLINTING SKILLS
        </Card.Text>
        <Card.Text className="mb-1">
          <i className="bi bi-calendar-check"></i> June 30, 2023
        </Card.Text>
        <Card.Text className="mb-1">
          <i className="bi bi-geo-fill"></i> Chicago, IL
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ConferenceCard;
