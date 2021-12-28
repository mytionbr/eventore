import { Box } from '@mui/material';
import React from 'react'
import Register from '../components/Register';

const RegisterPage = () => {
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
          <Register />
      </Box>
    );
}

export default RegisterPage
