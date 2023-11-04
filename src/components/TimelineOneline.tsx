import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { format } from 'date-fns';

export default function TimelineOneline({
  date,
  time,
  i,
  isEnd,
}: {
  date: Date;
  time: number;
  i: number;
  isEnd?: boolean;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {format(date, 'yy/MM/dd')}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={getDotColor(i)} />
        {isEnd || <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>{time.toString()}min</TimelineContent>
    </TimelineItem>
  );
}
type Color =
  | 'error'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'grey';
function getDotColor(i: number): Color {
  let color: Color;
  switch (i) {
    case 0:
      color = 'primary';
      break;
    case 1:
      color = 'secondary';
      break;
    case 2:
      color = 'success';
      break;
    case 3:
      color = 'warning';
      break;
    case 4:
      color = 'error';
      break;
    default:
      color = 'primary';
  }
  return color;
}
