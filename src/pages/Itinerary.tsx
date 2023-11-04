import { useEffect, useLayoutEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';

function getGenreLabelFromNum(genreNum: number) {
  switch (genreNum) {
    case 1:
      return '和食';
    case 2:
      return '洋食';
    case 3:
      return 'オリエンタル';
    case 4:
      return '中華';
  }
}

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
      {data ? (
        <>
          <Typography variant="h6" p={4} pb={1} align="center">
            {data.sento.name}
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={1} pb={4}>
            {data.sento.tennen && <Chip label="天然温泉" />}
            {data.sento.ganban && <Chip label="岩盤浴" />}
            {data.sento.ganban && data.sento.tennen && <Chip label="温泉" />}
          </Stack>
          {data.sento.imageUrl.map((url) => (
            <img src={url} width="100%" />
          ))}
          <Typography variant="h6" p={4} pb={1} align="center">
            {data.restaurant.name}
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={1} pb={4}>
            {data.restaurant.alcohol ? (
              <Chip label="居酒屋" />
            ) : (
              <Chip label="飲食店" />
            )}
            {data.restaurant.genre && (
              <Chip label={getGenreLabelFromNum(data.restaurant.genre)} />
            )}
            {data.sento.ganban && data.sento.tennen && <Chip label="温泉" />}
          </Stack>
          {data.restaurant.imageUrl.map((url) => (
            <img src={url} width="100%" />
          ))}
          <Typography variant="h6" p={4} pb={4} align="center">
            クーポン
          </Typography>
          <Card sx={{ display: 'flex', marginX: 2, mb: 2 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {data.sentoCoupon.title}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={data.sento.imageUrl[0]}
              alt="Live from space album cover"
            />
          </Card>
          <Card sx={{ display: 'flex', marginX: 2, mb: 5 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                {data.restaurantCoupon.title}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={data.restaurant.imageUrl[0]}
              alt="Live from space album cover"
            />
          </Card>
        </>
      ) : (
        <Stack alignContent="center" alignItems="center" mt={4}>
          <CircularProgress />
        </Stack>
      )}
      <Box height="56px" />
      <BottomBar />
    </>
  );
}
