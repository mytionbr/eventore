import { Box, Container } from '@mui/material';
import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeigth: '100%',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
        <Login />
    </Box>
  );
};

export default LoginPage;
