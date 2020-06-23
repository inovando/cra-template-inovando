import React from 'react';
import Centered from 'components/Centered';
import { useAuth } from 'contexts/auth';
import { Typography, Box } from '@material-ui/core';

function Dashboard() {
  const { user } = useAuth();
  return (
    <Centered column>
      <Box mb={2}>
        <Typography align="center">Dashboard!</Typography>
        <Typography>Logged in as: {user?.email}</Typography>
      </Box>
    </Centered>
  );
}

export default Dashboard;
