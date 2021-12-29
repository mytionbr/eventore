import React from 'react';
import { CssBaseline } from '@mui/material';
import Router from './routes';
import { styled } from '@mui/system';

const RootStyle = styled('div')({
  height: '100vh',
  width: '100vw',
  overflow: 'auto'
});

const App = () => {
  return (
      <RootStyle>
        <CssBaseline />
        <Router />
      </RootStyle>
  );
};

export default App;
