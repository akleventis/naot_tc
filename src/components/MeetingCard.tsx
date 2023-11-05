import * as React from 'react';
import Link from 'next/link';
import { WorkshopItem, SharedData } from '@/utils/interfaces';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';

const imgPath = `/events`;


export default function MeetingCard({
  data,
  sharedData,
}: {
  data: WorkshopItem;
  sharedData: SharedData;
}) {
  const cardSx = {
    maxWidth: 300,
    minWidth: 250,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const greyOutImgSX = {
    WebkitFilter: 'grayscale(100%)',
    MozFilter: 'grayscale(100%)',
    OFilter: 'grayscale(100%)',
    MsFilter: 'grayscale(100%)',
    filter: 'grayscale(100%)'
  };

  return (
    <Link href={{ pathname: `${data.title}` }}>
      <Card sx={cardSx}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='110'
            image={`${imgPath}/${data.img}`}
            alt={data.title}
            sx={data.isLive ? {} : greyOutImgSX}
          />
          <CardContent className='p-2'>
            <Typography gutterBottom variant='body1'>
              {data.heading}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <CalendarMonthIcon />
              {data.date}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <AccessTimeIcon />
              {data.time}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <LocationOnIcon />
              {data.location}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <PaymentIcon />
              {data.isLive ? <>{sharedData.fee}</> : <>Registration closed</>}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
