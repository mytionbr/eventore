import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { signout } from '../redux/actions/userActions';
const AppBarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px',
  backgroundColor: '#5A4FCF',
}));

const Navbar = () => {
  const alunoSignin = useSelector((state) => state.userSignin);
  const { userInfo } = alunoSignin;
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled>
        <Typography
          component={Link}
          to="/"
          sx={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}
        >
          EVENTORE
        </Typography>
        {userInfo ? (
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon sx={{color: '#fff'}} />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              component={Link}
              to="/register"
              sx={{ marginRight: '10px' }}
              variant="contained"
              color="primary"
            >
              Registre-se
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Box>
        )}
      </AppBarStyled>
    </Box>
  );
};

export default Navbar;
