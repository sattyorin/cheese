import { Paper } from '@mui/material';
import backgroundImage from '../images/road-trip.jpg';

export default function SelectBox(prefs: string[]) {
  return (
    <Paper
      elevation={3}
      style={{ background: `url(${backgroundImage})`, height: '80vh' }}
    >
      <div style={{ background: `url(${backgroundImage})`, height: '80vh' }}>
        よき
      </div>
      CG
    </Paper>
  );
}
