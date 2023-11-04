import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: 'center' }}
          onClick={() => navigate('/home')}
        >
          Tokyo Urban Escapes
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex' }}>
          <IconButton size="large" color="inherit">
            <EmailIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
