import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const imgPath = `/events`;
const sponsorPath = `/sponsors`;

const mbSX = { marginBottom: '.7em' };
const flexCenterSX = { display: 'flex', justifyContent: 'center' };
const textSX = {
  '@media (max-width: 500px)': {
    fontSize: '90%',
  },
};

export function HeaderImg({ imgSrc }: { imgSrc: string }) {
  const boxSX = {
    width: '100%',
    height: '200px',
    alignItems: 'center',
    overflow: 'hidden',
    ...flexCenterSX,
  };

  return (
    <Box sx={boxSX}>
      <img
        src={`${imgPath}/${imgSrc}`}
        alt={imgSrc}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </Box>
  );
}

export function Header({
  title,
  titleVariant,
  bodyVariant,
  date,
  time,
}: {
  title: string;
  titleVariant: TypographyProps['variant'];
  bodyVariant: TypographyProps['variant'];
  date: string;
  time: string;
}) {
  const containerSX = { margin: '5px 0', textAlign: 'center' };
  return (
    <>
      <Container sx={containerSX}>
        <Typography variant={titleVariant} sx={textSX} border={'none'}>
          {title}
        </Typography>
      </Container>
      <Container>
        <Typography variant={bodyVariant} sx={textSX} textAlign={'center'} color="text.secondary">
          {date} {time}
        </Typography>
      </Container>
    </>
  );
}

export function ParagraphBlock({
  title,
  body,
  titleVariant,
  bodyVariant,
  color,
}: {
  title: string;
  body: string;
  titleVariant: TypographyProps['variant'];
  bodyVariant: TypographyProps['variant'];
  color: string;
}) {
  return (
    <Container sx={mbSX}>
      <Typography variant={titleVariant} sx={{ ...mbSX, ...textSX }}>
        {title}
      </Typography>
      <Typography variant={bodyVariant} sx={textSX} color={color}>
        {body}
      </Typography>
    </Container>
  );
}

export function StandardList({
  title,
  listItems,
  titleVariant,
  listItemsVariant,
}: {
  title: string;
  listItems: string[];
  titleVariant: TypographyProps['variant'];
  listItemsVariant: TypographyProps['variant'];
}) {
  return (
    <Container sx={mbSX}>
      <Typography variant={titleVariant} sx={{ ...mbSX, ...textSX }}>
        {title}
      </Typography>
      <ul style={{ paddingLeft: '15px' }}>
        {listItems.map((item, i) => {
          return (
            <li key={i}>
              <Typography variant={listItemsVariant} sx={textSX}>
                {item}
              </Typography>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export function SplitList({
  title,
  listItems,
  titleVariant,
  listItemsVariant,
  chunkSize,
}: {
  title: string;
  listItems: string[];
  titleVariant: TypographyProps['variant'];
  listItemsVariant: TypographyProps['variant'];
  chunkSize: number;
}) {
  // Helper export function to divide the listItems array into chunks of size 'chunkSize'
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
    <Container sx={mbSX}>
      <Typography variant={titleVariant} sx={{ ...mbSX, ...textSX }}>
        {title}
      </Typography>
      <Grid container justifyContent={'center'} spacing={2}>
        {itemChunks.map((chunk, index) => (
          <Grid item xs={6} sm={4} key={index}>
            {chunk.map((item, itemIndex) => (
              <Box key={itemIndex} style={{ lineHeight: 1.5 }}>
                <Typography variant={listItemsVariant} sx={textSX}>
                  <ArrowRightIcon sx={{ marginRight: '5px' }} />
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export function Register({
  isLive,
  title,
  body,
  note,
  titleVariant,
  bodyVariant,
  buttonID,
  buttonKey,
  location,
}: {
  isLive: boolean;
  title: string;
  body: string;
  note: string;
  titleVariant: TypographyProps['variant'];
  bodyVariant: TypographyProps['variant'];
  buttonID: string;
  buttonKey: string;
  location: string;
}) {
  return (
    <Container sx={mbSX}>
      <Typography variant={titleVariant} id="register" sx={{ ...mbSX, ...textSX }}>
        {title}
      </Typography>
      {isLive ? (
        <>
          <div style={flexCenterSX}>
            <stripe-buy-button buy-button-id={buttonID} publishable-key={buttonKey} />
          </div>
          <Typography variant={bodyVariant} sx={{ ...textSX, ...mbSX }} textAlign="center">
            {note}
          </Typography>
          {/* TODO: Uncomment for deadline */}
          <Typography variant={bodyVariant} sx={textSX} textAlign="center" color="text.secondary">
            {body}
          </Typography>
        </>
      ) : (
        <Typography variant={bodyVariant} sx={{ ...textSX, ...mbSX }} textAlign="center">
        Registration for {location} has closed
      </Typography>
      )}
    </Container>
  );
}
export function Location({
  title,
  titleVariant,
  bodyVariant,
  iframeURL,
  mapsURL,
  addressName,
  addressStreet,
  addressCityStateZip,
}: {
  title: string;
  titleVariant: TypographyProps['variant'];
  bodyVariant: TypographyProps['variant'];
  iframeURL: string;
  mapsURL: string;
  addressName: string;
  addressStreet: string;
  addressCityStateZip: string;
}) {
  return (
    <Container sx={mbSX}>
      <Typography variant={titleVariant} sx={{ ...mbSX, ...textSX }}>
        {title}
      </Typography>
      <iframe
        src={iframeURL.replaceAll('&#39;', '')}
        width="100%"
        height="200"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Button style={{ padding: 0, display: 'inline-block' }} href={mapsURL}>
        <Typography variant={bodyVariant} sx={textSX} color="text.secondary">
          {addressName}
        </Typography>
        <Typography variant={bodyVariant} sx={textSX} color="text.secondary">
          {addressStreet}
        </Typography>
        <Typography variant={bodyVariant} sx={textSX} color="text.secondary">
          {addressCityStateZip}
        </Typography>
      </Button>
    </Container>
  );
}

export function Sponsor({
  title,
  titleVariant,
  imgSrc,
  url,
}: {
  title: string;
  titleVariant: TypographyProps['variant'];
  imgSrc: string;
  url: string;
}) {
  return (
    <Container sx={mbSX}>
      <Typography variant={titleVariant} sx={{ ...mbSX, ...textSX }}>
        {title}
      </Typography>
      <div style={flexCenterSX}>
        <a href={url}>
          <img height="45" src={`${sponsorPath}/${imgSrc}`} />
        </a>
      </div>
    </Container>
  );
}

// Custom hotel information for atlanta
export function AtlantaHotelInformation() {
  const titleVariant = 'h6';
  const bodyVariant = 'body1';
  const mtSX = { marginTop: '.5em' };
  const aSX = { color: '#357ab1', textDecoration: 'underline' };
  const fSX = { fontSize: "90%"}
  return (
    <Container sx={mbSX}>
      <Typography variant={titleVariant} sx={{ ...mbSX, ...textSX}}>
        Hotel Information
      </Typography>
      <ol style={{ paddingLeft: '15px'}}>
        <li>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Click on the following online booking link:{' '}
            <a style={aSX} href="https://www.ihg.com/holidayinn/hotels/us/en/atlanta/atlap/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=99801505&icdv=99801505&qSlH=ATLAP&qGrpCd=NC4&setPMCookies=true&qSHBrC=HI&qDest=1380%20Virginia%20Avenue%2C%20Atlanta%2C%20GA%2C%20US&srb_u=1">
              Online Booking Link
            </a>{' '}
            This link will take you directly to their website with the NAOT Casting Workshop code
            already attached.
          </Typography>
        </li>
        <li>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Enter your Arrival and Departure Date and press Enter.
          </Typography>
        </li>
        <li>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Select your preferred Bed Type to make your reservation.
          </Typography>
        </li>
      </ol>

      <br />

      <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
        For those who prefer to make reservations over the phone, you can call their toll-free
        reservations department at <a style={aSX} href="tel:1-855-862-4908">1-855-862-4908</a>. Be sure to
        mention the NAOT Casting Workshop or provide the Group Code NC4 when making your
        reservation.
      </Typography>


      <ul style={{ paddingLeft: '15px' }}>
        <li style={mtSX}>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Cut Off for Reservations: October 27, 2023.
          </Typography>
        </li>
        <li>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Room Rates:
          </Typography>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{...mtSX, ...fSX}}>
              $119.00 + tax per room, per night for a Standard Room with One King Bed or Two Double
              Beds
            </li>
            <li style={{...mtSX, ...fSX}}>
              $149.00 + tax per room, per night for a One Bedroom Suite with One King Bed or Two
              Double Beds
            </li>
          </ul>
        </li>
        <li style={mtSX}>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Self-Parking: $5.00 per room, per night for all overnight guests.
          </Typography>
        </li>
        <li>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            The on-site Restaurant & Bar is open daily from 6 AM to 11 PM, serving Breakfast, Lunch,
            and Dinner.
          </Typography>
        </li>
        <li>
          <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
            Cancellation Policy: If you need to cancel or change your reservation, please do so 24
            hours prior to your date of Arrival.
          </Typography>
        </li>
      </ul>

      <br />

      <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
        If you have any questions or require special accommodations when making your reservations,
        please do not hesitate to contact the hotel directly at{' '}
        <a style={aSX} href="tel:404-669-1203">404-669-1203</a> or via email at{' '}
        <a style={aSX} href="mailto:venita.gorham@hiatlantaairport.com">venita.gorham@hiatlantaairport.com</a>.
      </Typography>

      <br />

      <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
        For your convenience, the hotel offers a complimentary 24-hour shuttle service to and from
        the ATL (Hartsfield Jackson Airport) Domestic Terminal only, departing every 30 minutes.
        Look for our shuttle marked "HOLIDAY INN & SUITES ATLANTA AIRPORT NORTH" in the Ground
        Transportation / Hotel Shuttle area after collecting your luggage.
      </Typography>

      <br />

      <Typography variant={bodyVariant} sx={{...textSX, ...fSX}}>
        For those traveling to or from the International Terminal, you must take the Airport TRAM to
        the Domestic Side of the Airport to access our hotel shuttle.
      </Typography>
    </Container>
  );
}
