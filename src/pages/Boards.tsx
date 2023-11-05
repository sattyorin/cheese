import { useLayoutEffect, useState, useEffect } from 'react';
import { Itinerary } from '../models/Interfaces';
import TopBar from '../components/TopBar';
import backgroundImage from './../images/mountains.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import BottomBar from '../components/BottomBar';

function Boards() {
  const [itineraries, setItineraries] = useState<Itinerary[] | null>();
  const apiUri =
    'https://' + process.env.REACT_APP_ALBUM_HOSTNAME + '/getAlbum';
  const apiLikeUri = 'https://' + process.env.REACT_APP_ALBUM_HOSTNAME;
  const [position, setPosition] = useState(0);
  const [myUserId, setMyUserId] = useState(1);

  useLayoutEffect(() => {
    AOS.init();
    fetch(apiUri)
      .then((res) => res.json())
      .then((data: Itinerary[]) => {
        setItineraries(data);
      });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [position]);

  const handleButtonClick = (likedUserId: string) => {
    const requestData = {
      myUserId,
      likedUserId,
    };

    // fetch('/like-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(requestData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <>
      <TopBar />
      <div
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        <Box height="48px" />
        <Box p={3}>
          {itineraries?.map((itinerary, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 2,
              }}
              data-aos="fade-up"
            >
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
                  id: {itinerary.userId}
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#f0f0f0',
                    marginTop: '12px',
                    marginBottom: '12px',
                  }}
                  onClick={() => handleButtonClick(itinerary.userId)}
                >
                  行きたい
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box height="52px" />
      </div>
      <BottomBar />
    </>
  );
}

export default Boards;
