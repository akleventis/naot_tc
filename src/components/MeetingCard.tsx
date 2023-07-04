import * as React from "react";
import Link from "next/link";
import { WorkshopItem } from "@/utils/interfaces";
import { CardActionArea, createTheme, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from '@mui/icons-material/Payment';

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginRight: "5px",
          fontSize: "small",
        },
      },
    },
  },
});

const cardSx = {
  maxWidth: 300,
  minWidth: 250,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};

export default function MeetingCard({ data }: { data: WorkshopItem }) {
  const imgPath = `/flyerImages/${data.img}`;
  const cardRoute = `/workshops/${data.title}`;
  return (
    <ThemeProvider theme={theme}>
      <Link href={{ pathname: cardRoute }}>
        <Card sx={cardSx}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="110"
              image={imgPath}
              alt={data.title}
            />
            <CardContent className="p-2">
              <Typography gutterBottom variant="body1">
                {data.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <CalendarMonthIcon />
                {data.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <AccessTimeIcon />
                {data.time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOnIcon />
                {data.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <PaymentIcon />
                {data.fee}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </ThemeProvider>
  );
}
