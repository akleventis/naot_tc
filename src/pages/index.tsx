import data from '@/data/data.json';
import { WorkshopData, SharedData } from '@/utils/interfaces';
import { ParagraphBlock } from '@/components/Event';
import Grid from '@mui/material/Grid';
import MeetingCard from '@/components/MeetingCard';

export default function Home() {
  const workshopData: WorkshopData = data.events;
  const sharedData: SharedData = data.constants;

  const flexCenterSX = { display: 'flex', justifyContent: 'center' };

  return (
    <main>
      <ParagraphBlock title={sharedData.main.history_title} body={sharedData.main.history_body} titleVariant='h6' bodyVariant='body1' color='black'/>
      <ParagraphBlock title={sharedData.main.statement_title} body={sharedData.main.statement_body} titleVariant='h6' bodyVariant='body1' color='black'/>
      <ParagraphBlock title={sharedData.main.events_title} body='' titleVariant='h6' bodyVariant='body1' color='black'/>
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
