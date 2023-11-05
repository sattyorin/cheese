import { useState } from 'react';
import { Grid, Avatar } from '@mui/material';
import { Box } from '@mui/material';
import TopBar from '../components/TopBar';
import backgroundImage from './../images/mountains.jpg';

function Users() {
  const [userIds, setUserIds] = useState<number[] | null>();
  const users = [
    // ここにユーザー情報を入れます
    { id: 1, name: 'User 1', image: 'path_to_image1.png' },
    { id: 2, name: 'User 2', image: 'path_to_image2.png' },
    { id: 3, name: 'User 2', image: 'path_to_image2.png' },
    { id: 4, name: 'User 2', image: 'path_to_image2.png' },
    { id: 5, name: 'User 2', image: 'path_to_image2.png' },
    { id: 6, name: 'User 2', image: 'path_to_image2.png' },
  ];

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
        <Box p={3}>
          <Grid container justifyContent="center">
            {users.map(user => (
              <Grid item xs={6} key={user.id} display="flex" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                  <Avatar
                    alt={user.name}
                    src={user.image}
                    sx={{ width: 90, height: 90 }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </div >
    </>
  );
};

export default Users;
