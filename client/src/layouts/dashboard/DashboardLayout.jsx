import { styled } from '@mui/system';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

const RootStyle = styled('div')({
    height: '100%',
  overflow: 'hidden',
});

const ContainerStyled = styled('div')({
  display: 'flex',
  height: '100%'
});

const MainStyle = styled('div')({
  flexGrow: 1,
  overflow: 'auto',
  height: '100%',
  paddingTop: '2rem',
  paddingBottom: '1rem',
});

const DashboardLayout = () => {
  return (
    <RootStyle>
      <Navbar />
      <ContainerStyled>
        <Sidebar />
        <MainStyle>
          <Outlet />
        </MainStyle>
      </ContainerStyled>
    </RootStyle>
  );
};

export default DashboardLayout;
