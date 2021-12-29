import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | EVENTORE`}</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={{py: 2}}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Page;
