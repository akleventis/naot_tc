import data from "@/data/data.json";
import { WorkshopData } from "@/utils/interfaces";
import Grid from "@mui/material/Grid";
import MeetingCard from "@/components/MeetingCard";
import Typography from "@mui/material/Typography";

const title = "Upcoming Events";
const gridSX = { display: "flex", justifyContent: "center" };
const headSX = {display: 'inline-block', paddingBottom: '.5em', marginBottom: '1em', color: '#2774AE', borderBottom: '3px solid #FFD100'}

export default function Home() {
  const workshopData: WorkshopData = data;
  return (
    <main>
        <Typography variant="h5" component="h1" sx={headSX}>
          {title}
        </Typography>
        <Grid container spacing={2}>
          {workshopData.items.map((item, i) => {
            return (
              <Grid key={i} sx={gridSX} item xs={12} sm={6} md={4}>
                <MeetingCard data={item} />
              </Grid>
            );
          })}
        </Grid>
    </main>
  );
}
