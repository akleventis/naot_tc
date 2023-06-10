import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import BuyButton from "./BuyButton"
;import "bootstrap-icons/font/bootstrap-icons.css";
import { ReactElement, ReactNode } from "react";

const title: string = "Chicago Casting & Splinting Skills Workshop";
const dateTime: string = "Sat, June 15th, 2023 8:00am - 5:00pm";
const overviewText: string =
  "Learn casting and splinting echniques through intensive hands-on instruction and application from experienced certified orthopaedic technologists!";
const locationDetails: Map<string, string> = new Map([
  [
    "url",
    "https://www.google.com/maps/dir//Sonesta+Chicago+O'Hare+Airport+Rosemont,+10233+W+Higgins+Rd,+Rosemont,+IL+60018/@41.9970347,-87.9644169,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880fb668f8a2f9c7:0xcb7a515297bcb815!2m2!1d-87.8820175!2d41.9970642!3e0?entry=ttu",
  ],
  ["city_state", "Chicago, IL"],
  ["name", "Inn Chicago O'Hare Rosemont"],
  ["street", "10233 West Higgins Rd."],
  ["country_zip", "IL 60018"],
]);
const hotelInfo: string =
  "A special room rate of $99 per night plus tax for a single/double occupancy is available for workshop participants at the Holiday Inn Chicago O'Hare Rosemont. You may make reservations by calling the hotel at 847-954-8600, and be sure to reference the room block for “National Association of Orthopaedic Technologists” to receive the special rate.";
const topicsInfo: string[] = [
  "Cast Complications",
  "Short Arm",
  "Thumb Spica Cast",
  "Ulnar Arm Cast",
  "Long Arm Cast",
  "Short Arm Cast",
];
const learningObjectives: string[] = [
  "Demonstrate proper casting technique for application and removal of upper and lower extremity casts and splints (achieve through lecture, demonstration, and hands-on practice).",
  "Recognize indications for various types of cast/splint treat- ment.",
  "Identify best practices for cast application and removal.",
  "Identify casting/splinting complications and their possible solutions",
  "Learn proper patient care protocols",
];
const facultyInfo: string =
  "Courses instructed by Certified Orthopaedic Technologists (OTC) credentialed by the National Board for Certification of Orthopaedic Technologists (NBCOT). Faculty will be nationally-recognized professionals with many years of experience in the field of orthopaedic technology.";
const certs: string =
  "The Casting & Splinting Skills Workshop has applied for CEUs/CMEs for the following credentials: OTC, OPA-C/OA-C, ATC, PA-C, and BOC.";
const registrationFee: string = "$100";
const registrationEnd: string = "6/30/2023";
const cancellationText: string =
  "Cancellations must be made in writing. Cancelations are permitted up to two weeks prior to workshop date, and are assessed a $25 processing fee. Refunds are not provided for cancellations within two weeks of the scheduled program. Substitutions are permitted at any time.";

function TextBox({ title, text }: { title: string; text: string }) {
  return (
    <Card style={{ width: "350px", cursor: "pointer" }}>
      <Card.Body>
        <Card.Text className="mb-1">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
function ConferenceInfo() {
  return (
    // <Heading>
      <Container className="p-0 m-0 d-flex" >
        <Container className="d-flex">
          <TextBox title="Overview" text={overviewText} />
          <TextBox title="Hotel" text={hotelInfo} />
          <TextBox title="Faculty" text={facultyInfo} />
        {/* </Container> */}
        {/* <Container className="d-flex"> */}
          <TextBox title="CEU/CMEs" text={certs} />
          <TextBox title="Cancellation" text={cancellationText} />
        </Container>
        {/* <BuyButton /> */}
      </Container>
    // </Heading>
  );
}

export default ConferenceInfo;
