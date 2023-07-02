import * as React from "react";
import { useRouter } from "next/router";
import { WorkshopItem } from "@/utils/interfaces";
import { CardActionArea, createTheme, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 300,
          minWidth: 250,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Corrected box shadow style
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 110,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginRight: "5px",
        },
      },
    },
  },
});

export default function MeetingCard({
  title,
  data,
}: {
  title: string;
  data: WorkshopItem;
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/workshops/${title}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardMedia component="img" image={data.img} alt={title} />
          <CardContent className="p-2">
            <Typography gutterBottom variant="body1" component="div">
              {data.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CalendarMonthIcon fontSize="small" />
              {data.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AccessTimeIcon fontSize="small" />
              {data.time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <LocationOnIcon fontSize="small" />
              {data.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AttachMoneyIcon fontSize="small" />
              Registration: ${data.fee}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}