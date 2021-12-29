import { Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Register = () => {
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
            <AppRegistrationIcon />
          </Avatar>
          <Typography variant="h5">Registro</Typography>
          <form>
            <Box sx={{p: '0.5rem 0'}}>
              
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoFocus
                color='primary'
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
              Registrar-se
            </Button>
          </form>
        </Paper>
    )
}

export default Register
