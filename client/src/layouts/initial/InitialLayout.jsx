import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  flexDirection: 'column'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  padding: theme.spacing(10),
}));

const InitialLayout = () => {
  return (
    <RootStyle>
      <Navbar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default InitialLayout;
