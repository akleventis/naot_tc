import * as React from "react";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
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
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginRight: '5px',
        }
      }
    }
  },
});

export default function MeetingCard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/workshops/chicago");
  };

  return (
    <ThemeProvider theme={theme}>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="chicago.png"
            alt="chicago"
          />
          <CardContent className="p-2">
            <Typography gutterBottom variant="body1" component="div">
              Chicago Casting & Splinting Skills Workshop
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CalendarMonthIcon fontSize="small" />
              Sat, June 15th, 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AccessTimeIcon fontSize="small"/>
              8:00am - 5:00pm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <LocationOnIcon fontSize="small"/>
              Chicago, IL
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AttachMoneyIcon fontSize="small" />
              Registration Fee: $100
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}