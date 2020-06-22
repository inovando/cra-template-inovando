import React from 'react';
import Centered from 'components/Centered';
import { useAuth } from 'contexts/auth';
import { Typography, Button, Box } from '@material-ui/core';

function Dashboard() {
  const { signOut, user } = useAuth();
  return (
    <Centered column>
      <Box mb={2}>
        <Typography align="center">Dashboard!</Typography>
        <Typography>Logged in as: {user?.email}</Typography>
      </Box>
      <Button color="primary" variant="contained" onClick={signOut}>
        Sair
      </Button>
    </Centered>
  );
}

export default Dashboard;
