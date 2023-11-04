import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import {
  StaticTimePicker,
  LocalizationProvider,
  MobileTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

import backgroundImage from './../images/mountains.jpg';

export default function Home() {
  const nowTime = new Date();
  nowTime.setHours(nowTime.getHours() + 1);
  const [time, setTime] = useState(nowTime);
  const [timeErrorMessage, setTimeErrorMessage] = useState<string | null>(null);
  const [moveByTrain, setMoveByTrain] = useState('0');
  const [moveTime, setMoveTime] = useState('10');
  const [genre, setGenre] = useState('1');
  const [alcohol, setAlcohol] = useState('0');
  const [sauna, setSauna] = useState('0');
  const [ganban, setGanban] = useState('0');
  const [tennnenn, setTennenn] = useState('0');

  const backgroundImageUrl = 'url(./../images/mountains.jpg)';

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
        <Box p={4}>
          <Card sx={{ opacity: 0.85 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileTimePicker
                value={time}
                onChange={(newValue) => {
                  if (newValue! <= new Date()) {
                    setTimeErrorMessage('未来の時間を選択してください');
                  } else {
                    setTime(newValue!);
                    setTimeErrorMessage(null);
                    console.log(time.toISOString());
                  }
                }}
                views={['hours']}
              />
              {timeErrorMessage && (
                <Typography variant="caption" color="error">
                  {timeErrorMessage}
                </Typography>
              )}
            </LocalizationProvider>

            <br />
            <FormControl>
              <Select
                value={moveByTrain}
                onChange={(e) => {
                  setMoveByTrain(e.target.value);
                }}
              >
                <MenuItem value={0}>徒歩</MenuItem>
                <MenuItem value={1}>電車</MenuItem>
              </Select>
            </FormControl>
            <span>で</span>
            <FormControl>
              <Select
                value={moveTime}
                onChange={(e) => {
                  setMoveTime(e.target.value);
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
            <span>分</span>
            <br />
            <FormControl>
              <Select
                value={genre}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              >
                <MenuItem value={1}>和食</MenuItem>
                <MenuItem value={2}>洋食</MenuItem>
                <MenuItem value={3}>オリエンタル</MenuItem>
                <MenuItem value={4}>中華</MenuItem>
              </Select>
            </FormControl>
            <br />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={alcohol === '1' ? true : false}
                    onChange={(e) => setAlcohol(e.target.checked ? '1' : '0')}
                  />
                }
                label="Alcohol"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ganban === '1' ? true : false}
                    onChange={(e) => setGanban(e.target.checked ? '1' : '0')}
                  />
                }
                label="Ganban"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tennnenn === '1' ? true : false}
                    onChange={(e) => setTennenn(e.target.checked ? '1' : '0')}
                  />
                }
                label="tennnenn"
              />
            </FormGroup>
          </Card>
        </Box>
      </div>

      <BottomBar />

      {/* <Grid container spacing={4} padding={4}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ height: '80vh' }}>
            GG
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            style={{ background: `url(${backgroundImage})`, height: '100%' }}
          >
            よき
          </Paper>
        </Grid>
      </Grid> */}
    </>
  );
}
