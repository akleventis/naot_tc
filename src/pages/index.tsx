import data from "@/data/data.json";
import {WorkshopData} from "@/utils/interfaces";
import Grid from "@mui/material/Grid";
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
  const workshopData: WorkshopData = data
  return (
    <main>
      <Typography variant="h5" component="h1">
        Upcoming Events
      </Typography>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          {workshopData.items.map((item, i) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <MeetingCard title={item.title} data={item} />
              </Grid>
            );
          })}
        </Grid>
      </ThemeProvider>
    </main>
  );
}
