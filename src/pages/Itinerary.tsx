import { useEffect, useLayoutEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { Box, Typography } from '@mui/material';

export default function Itinerary() {
  interface Sento {
    distance: number;
    ganban: boolean;
    imageUrl: string[];
    latitude: number;
    name: string;
    sauna: boolean;
    longitude: number;
    tennen: boolean;
  }

  interface Coupon {
    genre: number;
    rank: number;
    title: string;
  }

  interface Restaurant {
    alcohol: boolean;
    distance: number;
    imageUrl: string[];
    latitude: number;
    name: string;
    genre: number;
    longitude: number;
  }

  interface ApiResponse {
    sento: Sento;
    sentoCoupon: Coupon;
    restaurant: Restaurant;
    restaurantCoupon: Coupon;
  }
  const [data, setData] = useState<ApiResponse | null>();
  const apiUri =
    'https://' +
    process.env.REACT_APP_HOSTNAME +
    '/getTravel?moveTime=10&genre=1&sauna=1&tennen=1&rank=3';
  useLayoutEffect(() => {
    console.log(apiUri);
    fetch(apiUri)
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <TopBar />
      <Box height="48px" />
      {data && (
        <>
          <Typography variant="h6" p={4} align="center">
            {data.sento.name}
          </Typography>
          {data.sento.imageUrl.map((url) => (
            <img src={url} width="100%" />
          ))}
          <Typography variant="h6" p={4} align="center">
            {data.restaurant.name}
          </Typography>
          {data.restaurant.imageUrl.map((url) => (
            <img src={url} width="100%" />
          ))}
        </>
      )}
      <Box height="56px" />
      <BottomBar />
    </>
  );
}
