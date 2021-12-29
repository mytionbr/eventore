import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/userActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const Register = () => {
  const redirect = '/app';
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        email,
        password,
        name,
      })
    );
  };

  React.useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo]);

  return (
    <Paper
      sx={{
        maxWidth: '25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1rem',
      }}
      elevation={11}
    >
      <Avatar sx={{ backgroundColor: '#5A4FCF' }}>
        <AppRegistrationIcon />
      </Avatar>
      <Typography variant="h5">Registro</Typography>
      <form>
        <Box sx={{ p: '0.5rem 0' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            autoFocus
            color="primary"
            value={name}
            onChange={handleChangeName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            color="primary"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            color="primary"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </Box>
        <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" color="primary">
          Registrar-se
        </Button>
      </form>
      {loading && <LoadingBox />}
      {error && <MessageBox type="error">{error}</MessageBox>}
    </Paper>
  );
};

export default Register;
