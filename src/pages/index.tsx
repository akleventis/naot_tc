import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MeetingCard from "@/components/MeetingCard";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
  },
});

export default function Home() {
  return (
    <main>
        <Typography variant="h5" component="h1"> Upcoming Events </Typography>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <MeetingCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MeetingCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MeetingCard />
            </Grid>
          </Grid>
        </ThemeProvider>
    </main>
  );
}
