import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | EVENTORE`}</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ m: 2  }}>
        <Box>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Grid container spacing={3} sx={{ py: 3, }}>
          {children}
        </Grid>
      </Container>
    </>
  );
};

export default Page;
