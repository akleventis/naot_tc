import data from "@/data/data.json";
import { WorkshopData, ValidRoutes } from "@/utils/interfaces";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRouter } from "next/router";
import BuyButton from "@/components/BuyButton";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginBottom: "1em",
        },
      },
    },
    
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h6",
          },
          style: {
            display: 'inline-block',
            borderBottom: '3px solid #FFD100',
            marginBottom: '.5em'
          }
        },
      ],
    },
  },
});

const imgSX = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  height: "200px",
  padding: "0px !important",
};
const paperSX = {
  maxWidth: "800px",
  marginBottom: '5em'
};

function HeaderImg({ imgSrc }: { imgSrc: string }) {
  const imgPath = `../flyerImages/${imgSrc}`;
  return (
    <Box sx={imgSX}>
      <img
        src={imgPath}
        alt={imgSrc}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Box>
  );
}

function Header({ title, datetime }: { title: string; datetime: string }) {
  return (
    <>
      <Container>
        <Typography variant="h6" textAlign={"center"} color='primary'>
          {title}
        </Typography>
      </Container>
      <Container>
        <Typography variant="body1" textAlign={"center"} color='text.secondary'>
          {datetime}
        </Typography>
      </Container>
    </>
  );
}

function ParagraphBlock({
  title,
  text,
  variant,
  color,
}: {
  title: string;
  text: string;
  variant: TypographyProps["variant"];
  color: string;
}) {
  return (
    <Container>
      <Typography variant="h6" color='primary'>{title}</Typography>
      <Typography variant={variant} color={color}>
        {text}
      </Typography>
    </Container>
  );
}

function StandardList({
  title,
  listItems,
}: {
  title: string;
  listItems: string[];
}) {
  return (
    <Container>
      <Typography variant="h6" color='primary'>{title}</Typography>
      <ul style={{ paddingLeft: "15px" }}>
        {listItems.map((item, i) => {
          return <li key={i} style={{marginBottom: '5px'}}>{item}</li>;
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
      <Typography variant="h6" color='primary'>{title}</Typography>
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        {itemChunks.map((chunk, index) => (
          <Grid item xs={6} sm={4} key={index}>
            {chunk.map((item, itemIndex) => (
              <Box key={itemIndex}>
                <ArrowRightIcon fontSize="small" sx={{ marginRight: "5px" }} />
                {item}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
function Register({
  title,
  buttonID,
  buttonKey,
  body,
}: {
  title: string;
  buttonID: string;
  buttonKey: string;
  body: string;
}) {
  return (
    <Container>
      <Typography variant="h6" color='primary' id="register">
        {title}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BuyButton buyButtonID={buttonID} buyButtonKey={buttonKey} />
      </div>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        {body}
      </Typography>
    </Container>
  );
}
function Location({
  title,
  iframeURL,
  mapsURL,
  addressName,
  addressStreet,
  addressCityStateZip,
}: {
  title: string;
  iframeURL: string;
  mapsURL: string;
  addressName: string;
  addressStreet: string;
  addressCityStateZip: string;
}) {
  return (
    <Container>
      <Typography variant="h6" color='primary'>{title}</Typography>
      <iframe
        src={iframeURL.replaceAll("&#39;", "")}
        width="100%"
        height="200"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Button style={{ padding: 0, display: "inline-block" }} href={mapsURL}>
        <Typography variant="body2" color="text.secondary">
          {addressName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {addressStreet}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {addressCityStateZip}
        </Typography>
      </Button>
    </Container>
  );
}

function Sponsor({
  title,
  img,
  url,
}: {
  title: string;
  img: string;
  url: string;
}) {
  const path = `../sponsors/${img}`;
  return (
    <Container>
      <Typography variant="h6" color='primary'>{title}</Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href={url}>
          <img height="70" src={path} />
        </a>
      </div>
    </Container>
  );
}

export default function Event() {
  const router = useRouter();
  const city = router.query.city?.toString();
  const workshopData: WorkshopData = data;
  let validRoutes: ValidRoutes = {};

  // if data does not exist for [slug], route to index
  workshopData.items.map((e) => {
    validRoutes[e.title] = true;
  });
  const workshopItem = workshopData.items.find((e) => e.title === city);

  if (city !== undefined && !validRoutes[city]) {
    router.push("/");
    return;
  }
  if (workshopItem === undefined) {
    return;
  }

  return (
      <Container sx={{ display: "flex", justifyContent: "center"}}>
        <Paper elevation={3} sx={paperSX}>
          <HeaderImg imgSrc={workshopItem.img} />
          <Header
            title={workshopItem.heading}
            datetime={workshopItem.datetime}
          />
          <ThemeProvider theme={theme}>
            <ParagraphBlock
              title={workshopItem.overview.title}
              text={workshopItem.overview.body}
              variant="body1"
              color="text.primary"
            />
            <StandardList
              title={workshopItem.learning.title}
              listItems={workshopItem.learning.items}
            />
            <SplitList
              title={workshopItem.topics.title}
              listItems={workshopItem.topics.items}
              chunkSize={3}
            />
            <SplitList
              title={workshopItem.certs.title}
              listItems={workshopItem.certs.items}
              chunkSize={3}
            />

            <ParagraphBlock
              title={workshopItem.faculty.title}
              text={workshopItem.faculty.body}
              variant="body1"
              color="text.primary"
            />
            <ParagraphBlock
              title={workshopItem.hotel.title}
              text={workshopItem.hotel.body}
              variant="body1"
              color="text.primary"
            />
            <Register
              title={workshopItem.register.title}
              buttonID={workshopItem.register.buy_id}
              buttonKey={workshopItem.register.buy_key}
              body={workshopItem.register.body}
            />
            <Location
              title={workshopItem.venue.title}
              iframeURL={workshopItem.venue.iframe_url}
              mapsURL={workshopItem.venue.maps_url}
              addressName={workshopItem.address.name}
              addressStreet={workshopItem.address.street}
              addressCityStateZip={workshopItem.address.city_state_zip}
            />
            <Sponsor
              title={workshopItem.sponsor.title}
              img={workshopItem.sponsor.img}
              url={workshopItem.sponsor.url}
            />
            <ParagraphBlock
              title={workshopItem.cancellation.title}
              text={workshopItem.cancellation.body}
              variant="body2"
              color="text.secondary"
            />
          </ThemeProvider>
        </Paper>
      </Container>
  );
}
