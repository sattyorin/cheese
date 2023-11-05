import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useNavigate } from 'react-router-dom';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';

export default function BottomBar() {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="記録"
          icon={<TimelineIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="きょうの旅"
          icon={<LocalAirportIcon />}
          onClick={() => navigate('/home/')}
        />
        <BottomNavigationAction
          label="旅程"
          icon={<PhotoAlbumIcon />}
          onClick={() => navigate('/itinerary/')}
        />
        {/* <BottomNavigationAction
          label="アルバム"
          icon={<LibraryBooksIcon />}
          onClick={() => navigate('/boards/')}
        /> */}
      </BottomNavigation>
    </Paper>
  );
}
