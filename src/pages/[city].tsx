import data from '@/data/data.json';
import { WorkshopData, SharedData } from '@/utils/interfaces';
import { useRouter } from 'next/router';
import { Paper, Container } from '@mui/material';
import {
  HeaderImg,
  Header,
  ParagraphBlock,
  StandardList,
  SplitList,
  Register,
  Location,
  Sponsor,
  AtlantaHotelInformation,
} from '@/components/EventComponents';

export default function Event() {
  const workshopData: WorkshopData = data.events;
  const sharedData: SharedData = data.constants;
  
  const router = useRouter();
  const city = router.query.city?.toString();

  // if [slug] does not exist in our dataset, route to index
  const workshopItem = workshopData.items.find((e) => e.title === city);
  if (city !== undefined && workshopItem === undefined) {
    router.push('/');
    return;
  }
  if (workshopItem === undefined) {
    return;
  }

  const paperSX = { maxWidth: '800px', marginBottom: '5em' };
  const flexCenterSX = { display: 'flex', justifyContent: 'center' };

  return (
    <Container sx={flexCenterSX}>
      <Paper elevation={3} sx={paperSX}>
        <HeaderImg imgSrc={workshopItem.img} />
        <Header
          title={workshopItem.heading}
          titleVariant='h6'
          bodyVariant='body1'
          date={workshopItem.date}
          time={workshopItem.time}
        />
        <ParagraphBlock
          title={sharedData.overview.title}
          body={sharedData.overview.body}
          titleVariant='h6'
          bodyVariant='body1'
          color='text.primary'
        />
        <StandardList
          title={sharedData.learning.title}
          listItems={sharedData.learning.items}
          titleVariant='h6'
          listItemsVariant='body1'
        />
        <SplitList
          title={sharedData.topics.title}
          listItems={sharedData.topics.items}
          titleVariant='h6'
          listItemsVariant='body1'
          chunkSize={3}
        />
        <SplitList
          title={sharedData.certs.title}
          listItems={sharedData.certs.items}
          titleVariant='h6'
          listItemsVariant='body1'
          chunkSize={2}
        />
        <ParagraphBlock
          title={sharedData.faculty.title}
          body={sharedData.faculty.body}
          titleVariant='h6'
          bodyVariant='body1'
          color='text.primary'
        />
        <Register
          isLive={workshopItem.isLive}
          title={workshopItem.register.title}
          body={workshopItem.register.body}
          note={workshopItem.register.note}
          titleVariant='h6'
          bodyVariant='body2'
          buttonID={workshopItem.register.buy_id}
          buttonKey={workshopItem.register.buy_key}
          location={workshopItem.location}
        />
        <Location
          title={workshopItem.venue.title}
          titleVariant='h6'
          bodyVariant='body2'
          iframeURL={workshopItem.venue.iframe_url}
          mapsURL={workshopItem.venue.maps_url}
          addressName={workshopItem.address.name}
          addressStreet={workshopItem.address.street}
          addressCityStateZip={workshopItem.address.city_state_zip}
        />
        {workshopItem.title === "atlanta" ? <AtlantaHotelInformation />: <></>}
        <Sponsor
          title={sharedData.sponsor.title}
          titleVariant='h6'
          imgSrc={sharedData.sponsor.img}
          url={sharedData.sponsor.url}
        />
        <ParagraphBlock
          title={sharedData.cancellation.title}
          body={sharedData.cancellation.body}
          titleVariant='h6'
          bodyVariant='body1'
          color='text.secondary'
        />
      </Paper>
    </Container>
  );
}
