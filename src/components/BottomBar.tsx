import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useNavigate } from 'react-router-dom';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function BottomBar() {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="あなたの記録"
          icon={<TimelineIcon />}
          onClick={() => navigate('/history')}
        />
        <BottomNavigationAction
          label="きょうの旅へ"
          icon={<LocalAirportIcon />}
          onClick={() => navigate('/home')}
        />
        <BottomNavigationAction
          label="旅程"
          icon={<LibraryBooksIcon />}
          onClick={() => navigate('/itinerary')}
        />
      </BottomNavigation>
    </Paper>
  );
}
