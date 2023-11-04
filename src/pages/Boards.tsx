import { useState } from 'react';
import { Itinerary } from '../models/Interfaces';
import TopBar from '../components/TopBar';
import backgroundImage from './../images/mountains.jpg';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function Boards() {
  const [itinerary, setItinerary] = useState<Itinerary[] | null>();

  const image1 = 'https://onsen.nifty.com/cms_image/onsen/255-elizabeth/onsen001499/211110_t01_s.JPG';
  const image2 = 'https://san-tatsu.jp/assets/uploads/2020/08/06144707/d6855078f26a75d301ce7fba8e37be56-1500x1000.jpg';
  const title = 'Title';
  const description = 'Description';
  return (
    <div
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Box height="48px" />
      <Box p={3}>
        <Card sx={{ border: '2px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300 }}>
          <CardMedia
            component="img"
            alt="Image 1"
            image={image1}
            sx={{ width: 250, marginTop: 2, marginBottom: 2 }}
          />
          <CardMedia
            component="img"
            alt="Image 2"
            image={image2}
            sx={{ width: 250, marginTop: 2, marginBottom: 2 }}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>

      </Box>
    </div >
  );
};

export default Boards;
