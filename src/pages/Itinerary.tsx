import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { MyContext } from '../App';
import { Itinerary } from '../models/Interfaces';

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

export default function ItineraryPage() {
  const [data, setData] = useState<Itinerary | null>();
  const { id } = useContext(MyContext);
  const apiUri =
    'https://' +
    process.env.REACT_APP_GETTRABEL_BY_ID +
    '/getTravelById?userId=' +
    id;

  useEffect(() => {
    console.log(apiUri);
    if (id !== '') {
      console.log(apiUri);
      fetch(apiUri)
        .then((res) => {
          return res.json();
        })
        .then((data: Itinerary) => {
          console.log(data);
          setData(data);
        });
    }
  }, [id]);

  return (
    <>
      <TopBar />
      {id === '' ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!id}
        >
          <Typography>先にチェックインしてください。</Typography>
        </Backdrop>
      ) : (
        <>
          <Box height="48px" />
          {data !== null && data !== undefined ? (
            <>
              <Typography variant="h6" p={4} pb={1} align="center">
                {data.sento.name}
              </Typography>
              <Stack direction="row" justifyContent="center" spacing={1} pb={4}>
                {data.sento.tennen && <Chip label="天然温泉" />}
                {data.sento.ganban && <Chip label="岩盤浴" />}
                {data.sento.ganban && data.sento.tennen && (
                  <Chip label="温泉" />
                )}
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
                {data.sento.ganban && data.sento.tennen && (
                  <Chip label="温泉" />
                )}
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
        </>
      )}

      <BottomBar />
    </>
  );
}
