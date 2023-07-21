import data from '@/data/data.json';
import { WorkshopData, SharedData } from '@/utils/interfaces';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MeetingCard from '@/components/MeetingCard';
import {Typography, Box} from '@mui/material';

const title = 'Upcoming Events';

export default function Home() {
  const theme = useTheme();
  const workshopData: WorkshopData = data.events;
  const sharedData: SharedData = data.constants;

  const flexCenterSX = { display: 'flex', justifyContent: 'center' };
  const titleSX = {
    display: 'inline-block',
    marginBottom: '1em',
    color: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.secondary.main}`
  };
  const titleContainerSX = {
    '@media (max-width: 500px)': {
      display: 'flex',
      justifyContent: 'center'
    },
  }

  return (
    <main>
      <Box sx={titleContainerSX}> 
        <Typography variant="h5" component="h1" sx={titleSX}>
          {title}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {workshopData.items.map((item, i) => {
          return (
            <Grid key={i} sx={flexCenterSX} item xs={12} sm={6} md={4}>
              <MeetingCard data={item} sharedData={sharedData} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}
