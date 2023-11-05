import { useLayoutEffect, useState } from 'react';
import { Itinerary } from '../models/Interfaces';
import TopBar from '../components/TopBar';
import backgroundImage from './../images/mountains.jpg';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import BottomBar from '../components/BottomBar';

function Boards() {
  const [itineraries, setItineraries] = useState<Itinerary[] | null>();
  const apiUri = 'https://' + process.env.REACT_APP_ALBUM_HOSTNAME;
  useLayoutEffect(() => {
    fetch(apiUri)
      .then((res) => res.json())
      .then((data: Itinerary[]) => {
        setItineraries(data);
      });
  }, []);

  return (
    <>
      <TopBar />
      <div
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <Box height="48px" />
        <Box p={3}>
          {itineraries?.map((itinerary, index) => (
            <Card key={index} sx={{ border: '2px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300, marginBottom: 2 }}>
              <CardMedia
                component="img"
                alt={`Image 1 for ${itinerary.sento.name}`}
                image={itinerary.sento.imageUrl[0]}
                sx={{ width: 250, marginTop: 2, marginBottom: 2 }}
              />
              <CardMedia
                component="img"
                alt={`Image 2 for ${itinerary.restaurant.name}`}
                image={itinerary.restaurant.imageUrl[0]}
                sx={{ width: 250, marginTop: 2, marginBottom: 2 }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  id: {itinerary.id}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
      <BottomBar />
    </>
  );
}

export default Boards;
