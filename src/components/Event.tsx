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
  title,
  body,
  note,
  titleVariant,
  bodyVariant,
  buttonID,
  buttonKey,
  location,
}: {
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
      {buttonID == '' ? (
        <Typography variant={bodyVariant} sx={{ ...textSX, ...mbSX }} textAlign="center">
          Registration for {location} has closed
        </Typography>
      ) : (
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
