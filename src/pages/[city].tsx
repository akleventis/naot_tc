import data from '@/data/data.json';
import { WorkshopData, SharedData } from '@/utils/interfaces';
import { useRouter } from 'next/router';
import {Paper, Container } from '@mui/material';
import {HeaderImg, Header, ParagraphBlock, StandardList, SplitList, Register, Location, Sponsor} from '@/components/Event'

export default function Event() {
  const router = useRouter();
  const city = router.query.city?.toString();
  const workshopData: WorkshopData = data.events;
  const sharedData: SharedData = data.constants

  // if [slug] does not exist in our dataset, route to index
  const workshopItem = workshopData.items.find((e) => e.title === city);
  if (city !== undefined && workshopItem === undefined) {
    router.push('/');
    return;
  }
  if (workshopItem === undefined) {
    return;
  }
  
  const flexCenterSX = {display: 'flex', justifyContent: 'center'}
  const paperSX = {
    maxWidth: '800px',
    marginBottom: '5em'
  };

  return (
      <Container sx={flexCenterSX}>
        <Paper elevation={3} sx={paperSX}>
          <HeaderImg imgSrc={workshopItem.img} />
          <Header
            title={workshopItem.heading}
            date={workshopItem.date}
            time={workshopItem.time}
          />
            <ParagraphBlock
              title={sharedData.overview.title}
              text={sharedData.overview.body}
              variant='body1'
              color='text.primary'
            />
            <StandardList
              title={sharedData.learning.title}
              listItems={sharedData.learning.items}
            />
            <SplitList
              title={sharedData.topics.title}
              listItems={sharedData.topics.items}
              chunkSize={3}
            />
            <SplitList
              title={sharedData.certs.title}
              listItems={sharedData.certs.items}
              chunkSize={3}
            />

            <ParagraphBlock
              title={sharedData.faculty.title}
              text={sharedData.faculty.body}
              variant='body1'
              color='text.primary'
            />
            {/* <ParagraphBlock
              title={workshopItem.hotel.title}
              text={workshopItem.hotel.body}
              variant='body1'
              color='text.primary'
            /> */}
            <Register
              title={workshopItem.register.title}
              buttonID={workshopItem.register.buy_id}
              buttonKey={workshopItem.register.buy_key}
              body={workshopItem.register.body}
            />
            <Location
              title={workshopItem.venue.title}
              iframeURL={workshopItem.venue.iframe_url}
              mapsURL={workshopItem.venue.maps_url}
              addressName={workshopItem.address.name}
              addressStreet={workshopItem.address.street}
              addressCityStateZip={workshopItem.address.city_state_zip}
            />
            <Sponsor
              title={sharedData.sponsor.title}
              imgSrc={sharedData.sponsor.img}
              url={sharedData.sponsor.url}
            />
            <ParagraphBlock
              title={sharedData.cancellation.title}
              text={sharedData.cancellation.body}
              variant='body2'
              color='text.secondary'
            />
        </Paper>
      </Container>
  );
}
