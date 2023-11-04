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
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import TimelineOneline from '../components/TimelineOneline';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import RankEmblem from './../images/Gold.png';

export default function History() {
  const [nowTime, setNowTime] = useState(format(new Date(), 'HH:mm'));
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
      setNowTime(format(date, 'HH:mm'));
    }, 60000);
  }, []);

  return (
    <>
      <TopBar />
      <Box height="48px" />
      <Grid p={3} spacing={3} container>
        <Grid item xs={12}>
          <Card>
            <Stack alignItems="center">
              <Typography variant="h6" align="center" mt={5}>
                現在時刻
              </Typography>
              <Typography variant="h2" align="center" mb={2}>
                {nowTime}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ paddingX: 3, marginBottom: 5 }}
              >
                開始
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
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
          <Card>
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
    </>
  );
}
