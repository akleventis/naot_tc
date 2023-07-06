import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  useTheme,
} from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const imgPath = `/events`;
const sponsorPath = `/sponsors`;

const containerSX = { marginBottom: "1em" };
const flexCenterSX = { display: "flex", justifyContent: "center" };

export function HeaderImg({ imgSrc }: { imgSrc: string }) {
  const imgSX = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    height: "200px",
    padding: "0px !important",
  };

  return (
    <Box sx={imgSX}>
      <img
        src={`${imgPath}/${imgSrc}`}
        alt={imgSrc}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Box>
  );
}

export function Header({
  title,
  datetime,
}: {
  title: string;
  datetime: string;
}) {
  const theme = useTheme();
  return (
    <>
      <Container sx={{ margin: "5px 0" }}>
        <Typography
          variant="h5"
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={"medium"}
          color={theme.palette.primary.main}
        >
          {title}
        </Typography>
      </Container>
      <Container>
        <Typography variant="body1" textAlign={"center"} color="text.secondary">
          {datetime}
        </Typography>
      </Container>
    </>
  );
}

export function ParagraphBlock({
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
  const theme = useTheme();
  return (
    <Container sx={containerSX}>
      <Typography variant="h6" color={theme.palette.primary.main}>
        {title}
      </Typography>
      <Typography variant={variant} color={color}>
        {text}
      </Typography>
    </Container>
  );
}

export function StandardList({
  title,
  listItems,
}: {
  title: string;
  listItems: string[];
}) {
  const theme = useTheme();
  return (
    <Container sx={containerSX}>
      <Typography variant="h6" color={theme.palette.primary.main}>
        {title}
      </Typography>
      <ul style={{ paddingLeft: "15px" }}>
        {listItems.map((item, i) => {
          return (
            <li key={i} style={{ marginBottom: "5px" }}>
              {item}
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
  chunkSize,
}: {
  title: string;
  listItems: string[];
  chunkSize: number;
}) {
  const theme = useTheme();

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
    <Container sx={containerSX}>
      <Typography variant="h6" color={theme.palette.primary.main}>
        {title}
      </Typography>
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
export function Register({
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
  const theme = useTheme();
  return (
    <Container sx={containerSX}>
      <Typography variant="h6" color={theme.palette.primary.main} id="register">
        {title}
      </Typography>
      <div style={flexCenterSX}>
        <stripe-buy-button
          buy-button-id={buttonID}
          publishable-key={buttonKey}
        />
      </div>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        {body}
      </Typography>
    </Container>
  );
}
export function Location({
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
  const theme = useTheme();
  return (
    <Container sx={containerSX}>
      <Typography variant="h6" color={theme.palette.primary.main}>
        {title}
      </Typography>
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

export function Sponsor({
  title,
  imgSrc,
  url,
}: {
  title: string;
  imgSrc: string;
  url: string;
}) {
  const theme = useTheme();
  return (
    <Container sx={containerSX}>
      <Typography variant="h6" color={theme.palette.primary.main}>
        {title}
      </Typography>
      <div style={flexCenterSX}>
        <a href={url}>
          <img height="70" src={`${sponsorPath}/${imgSrc}`} />
        </a>
      </div>
    </Container>
  );
}
