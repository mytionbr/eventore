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

const Login = () => {
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
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Login</Typography>
      <form>
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
          />
        </Box>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Entrar
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
