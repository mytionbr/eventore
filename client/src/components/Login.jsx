import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { signin } from '../redux/actions/userActions';

const Login = () => {
  
  const redirect = "/app";
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const handleChangeEmail = (e) =>{
    const { value } = e.target;
    setEmail(value);
  } 
  const handleChangePassword = (e) =>{
    const { value } = e.target;
    setPassword(value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({
      user_email:email, 
      user_password:password
    }));
  };

  React.useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo])

  return (
    <Paper sx={{
        maxWidth: '25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: 'column',
        padding: '1rem'
    }}
    elevation={11}
    >
      <Avatar sx={{backgroundColor:  '#5A4FCF'}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{p: '0.5rem 0'}}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            color='primary'
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
            color='primary'
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </Box>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Entrar
        </Button>
      </form>
      {loading && <LoadingBox />}
      {error && <MessageBox type="error">{error}</MessageBox>}
    </Paper>
  );
};

export default Login;
