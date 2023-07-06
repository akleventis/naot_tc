import data from '@/data/data.json';
import { WorkshopData } from '@/utils/interfaces';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MeetingCard from '@/components/MeetingCard';
import Typography from '@mui/material/Typography';

const title = 'Upcoming Events';

export default function Home() {
  const theme = useTheme();
  const workshopData: WorkshopData = data;

  const gridSX = { display: 'flex', justifyContent: 'center' };
  const headSX = {
    display: 'inline-block',
    paddingBottom: '.5em',
    marginBottom: '1em',
    color: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
  };

  return (
    <main>
      <Typography variant='h5' component='h1' sx={headSX}>
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
