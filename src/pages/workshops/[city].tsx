import data from '@/data/data.json'
import { WorkshopData } from "@/utils/interfaces";
import { useEffect } from "react";
import { useRouter } from "next/router";
import BuyButton from "@/components/BuyButton";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const buyButtonID = "buy_btn_1NH9ViD6jiafmpE3gsUN6AHN";
const buyButtonKey =
  "pk_test_51NFfY3D6jiafmpE38xBE78d7ToSPLZd4s1P9idrr7Y9AE4VjjTwK1BdqmVFZMSmZ2vO8vUNXt9VosK5ty5DZmIDf00HQv2fvZv";

// map of city: city data
// if val not in map, route to home screen && clear query params
// use map to fill out all flyer details
// separate json file, json -> map conversion
// wrap in theme
const imgContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  height: "200px",
  padding: "0px !important",
};
function HeaderImg() {
  return (
    <Container sx={imgContainer}>
      <img
        src="../chicago.png"
        alt="hi"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Container>
  );
}
function Header() {
  return (
    <>
      <Container>
        <Typography variant="h6" component="div" textAlign={"center"}>
          Casting & Splinting Skills Workshop in Chicago, IL
        </Typography>
      </Container>
      <Container>
        <Typography variant="subtitle1" textAlign={"center"}>
          Sat July 15th, 2023 8:00am - 5:00pm
        </Typography>
      </Container>
    </>
  );
}

function ParagraphBlock({title, text, variant }: { title: string; text: string; variant: TypographyProps['variant']; }) {
  return (
    <Container>
      <Typography variant="h6">{title}</Typography>
      <Typography variant={variant}>{text}</Typography>
    </Container>
  );
}

function StandardList() {
  let list = [
    "Demonstrate proper casting technique for application and removal of upper and lower extremity casts and splints achieve through lecture, demonstration, and hands-on practice.",
    "Recognize indications for various types of cast/splint treatment.",
    "Identify best practices for cast application and removal.",
    "Identify casting/splinting complications and their possible solutions.",
    "Learn proper patient care protocols."
  ];
  return (
    <Container>
      <Typography variant="h6">OVERALL LEARNING OBJECTIVES</Typography>
      <ul style={{paddingLeft: "15px"}}>
        {list.map((item, i) => {
          return (
            <li key={i}>{item}</li>
          )
        })}
        </ul>
    </Container>
  );
}
function SplitList({
  title,
  listItems,
  chunkSize,
}: {
  title: string;
  listItems: string[];
  chunkSize: number;
}) {
  // Helper function to divide the listItems array into chunks of size 'chunkSize'
  const chunkArray = (arr: string[]) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Divide the listItems array into chunks of 3 items each
  const itemChunks = chunkArray(listItems);

  return (
    <Container>
      <Typography variant="h6">{title}</Typography>
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        {itemChunks.map((chunk, index) => (
          <Grid item xs={6} sm={4} key={index}>
            {chunk.map((item, itemIndex) => (
              <Box key={itemIndex}>
                <ArrowRightIcon fontSize="small" sx={{marginRight: '5px'}}/>
                {item}
                </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
function Register() {
  return (
    <Container>
      <Typography variant="h6" id="register">
        Register
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BuyButton buyButtonID={buyButtonID} buyButtonKey={buyButtonKey} />
      </div>
      <Typography variant="body2">*Registration ends 6/30/2023</Typography>
    </Container>
  );
}
function Location() {
  return (
    <Container>
      <Typography variant="h6">Venue</Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.5444457610254!2d-87.88509156111455!3d41.998367786129364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb668f8a2f9c7%3A0xcb7a515297bcb815!2sSonesta%20Chicago%20O&#39;Hare%20Airport%20Rosemont!5e0!3m2!1sen!2sus!4v1688080368304!5m2!1sen!2sus"
        width="100%"
        height="200"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Button
        style={{ padding: 0, display: "inline-block" }}
        href="https://www.google.com/maps/place/10233+W+Higgins+Rd,+Rosemont,+IL+60018/@41.9970519,-87.8846421,17z/data=!3m1!4b1!4m6!3m5!1s0x880fb668567ca9d5:0xa2a33cbd58fd3bb1!8m2!3d41.9970479!4d-87.8820672!16s%2Fg%2F11bw40ky74?entry=ttu"
      >
        <Typography variant="body2" color="text.secondary">
          Holiday Inn & Suites
        </Typography>
        <Typography variant="body2" color="text.secondary">
          10233 West Higgins Rd.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rosemont, IL 60018
        </Typography>
      </Button>
    </Container>
  );
}

export default function Event() {
  return (
    <main>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} sx={{ maxWidth: "800px" }}>
          <HeaderImg />
          <Header />
          <ParagraphBlock
            title="Overview"
            text="Learn casting and splinting techniques through intensive hands-on instruction and application from experienced certified orthopaedic technologists. This workshop is organized by the National Association of Orthopaedic Technologists (NAOT) and will be held on Sat July 15th, 2023, at the Holiday Inn & Suites in Rosemont, Illinois."
            variant="body1"
          />
          <StandardList />
          <SplitList
            title="Topics and Applications"
            listItems={[
              "Cast Complications",
              "Short Arm",
              "Thumb Spica Cast",
              "Ulnar Gutter Cast",
              "Long Arm Cast",
              "Short Leg Cast",
            ]}
            chunkSize={3}
          />
          <SplitList
            title="CEU/CME's"
            listItems={["OTC", "OPA-C/OA-C", "ATC", "PA-C", "BOC"]}
            chunkSize={3}
          />

          <ParagraphBlock
            title="Faculty"
            text="Courses instructed by Certified Orthopaedic Technologists (OTC)
            credentialed by the National Board for Certification of
            Orthopaedic Technologists (NBCOT). Faculty will be nationally-
            recognized professionals with many years of experience in the
            field of orthopaedic technology."
            variant="body1"
          />
          <ParagraphBlock
            title="Hotel"
            text="A special room rate of $99 per night plus tax for a single/double
            occupancy is available for workshop participants at the Holiday
            Inn Chicago O'Hare Rosemont. You may make reservations by calling
            the hotel at 847-954-8600, and be sure to reference the room block
            for “National Association of Orthopaedic Technologists” to receive
            the special rate."
            variant="body1"
          />
          <Register />
          <Location />
          <ParagraphBlock
            title="Cancellation"
            text="Cancellations must be made in writing. Cancelations are permitted up to two weeks prior to workshop date, and are assessed a $25 processing fee. Refunds are not provided for cancellations within two weeks of the scheduled program. Substitutions are permitted at any time."
            variant="subtitle1"
          />
        </Paper>
      </Container>
    </main>
  );
}
