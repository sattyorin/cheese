import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Dialog,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import TimelineOneline from '../components/TimelineOneline';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import RankEmblem from './../images/Gold.png';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './../images/milky-way.jpg';

export default function History() {
  const [nowTime, setNowTime] = useState(new Date());
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const mockData = [
    {
      date: new Date(),
      time: 10,
    },
    {
      date: new Date(),
      time: 20,
    },
    {
      date: new Date(),
      time: 30,
    },
    {
      date: new Date(),
      time: 40,
    },
    {
      date: new Date(),
      time: 50,
      isEnd: true,
    },
  ];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setNowTime(date);
    }, 1000);
  }, []);

  return (
    <>
      <TopBar />
      <Box height="48px" />
      <Grid
        p={3}
        spacing={3}
        container
        sx={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed' /*--背景画像の固定--*/,
          backgroundRepeat: 'no-repeat' /*--背景画像の繰り返し--*/,
          backgroundOosition: 'center center' /*--背景画像の位置--*/,
        }}
      >
        <Grid item xs={12}>
          <Card sx={{ opacity: 0.95 }}>
            <Stack alignItems="center">
              <Typography variant="h6" align="center" mt={5}>
                {startTime === null ? '現在時刻' : '経過時間'}
              </Typography>
              <Typography variant="h2" align="center" mb={2}>
                {startTime === null
                  ? format(nowTime, 'HH:mm')
                  : Math.floor(
                      (nowTime.getTime() - (startTime.getTime() - 1000)) / 1000,
                    )}
                {startTime === null ? (
                  <></>
                ) : (
                  <span style={{ fontSize: 24, marginLeft: 4 }}>秒</span>
                )}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  paddingX: 3,
                  marginBottom: 5,
                  bgcolor: 'white',
                  fontWeight: 'bold',
                }}
                onClick={() => {
                  if (startTime === null) {
                    setStartTime(new Date());
                  } else {
                    setModalOpen(true);
                    setStartTime(null);
                    setTimeout(() => {
                      navigate('/home');
                    }, 3000);
                  }
                }}
              >
                {startTime === null ? '開始' : '終了'}
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ opacity: 0.95 }}>
            <Stack
              direction="row"
              spacing={3}
              paddingY={5}
              paddingX={3}
              alignItems="center"
            >
              <CardMedia
                component="img"
                sx={{ width: 80, height: 75 }}
                image={RankEmblem}
                alt="Live from space album cover"
              />
              <Stack spacing={1}>
                <Typography variant="h6">会員ランク</Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', marginX: 0 }}
                >
                  ゴールド
                </Typography>
                <Stack spacing={1} direction="row">
                  <Chip label="100円引き" size="small" />
                  <Chip label="50円引き" size="small" />
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ opacity: 0.95 }}>
            <Typography variant="h6" align="center" mt={5}>
              利用履歴
            </Typography>
            <Timeline sx={{ marginLeft: '20px' }}>
              {mockData.map((data, i) => (
                <TimelineOneline
                  date={data.date}
                  time={data.time}
                  i={i % 5}
                  isEnd={data.isEnd}
                />
              ))}
            </Timeline>
          </Card>
        </Grid>
      </Grid>
      <Box height="56px" />
      <BottomBar />
      <Dialog onClose={() => setModalOpen(false)} open={modalOpen}>
        <DialogContentText
          paddingX={3}
          fontSize="large"
          fontWeight="bold"
          pt={5}
          pb={1}
        >
          おつかれさまでした。
        </DialogContentText>
        <DialogContentText paddingX={3} pb={5}>
          今日の気分を教えてください。
        </DialogContentText>
      </Dialog>
    </>
  );
}
