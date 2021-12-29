import { Box, Button, Paper, TextField } from '@mui/material';
import React from 'react'

const ProfileForm = () => {
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const handleChangeName = (e) => {
        const { value } = e.target;
        setName(value);
    }    

    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    
    const handleChangePassword = (e) => {
        const { value } = e.target;
        setPassword(value);
    }
    
    const handleSave= ()=>{
        console.log('opa')
    }



  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1rem',
      }}
    >
      <form>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            overflow: 'auto',
            height: '100%',
            '& > *': {
              my: 1,
            },
          }}
        >
          <TextField
            name="name"
            variant="outlined"
            label="Nome"
            color="primary"
            fullWidth
            onChange={handleChangeName}
            value={name}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            color="primary"
            fullWidth
            onChange={handleChangeEmail}
            type="email"
            value={email}
          />
          <TextField
            name="password"
            variant="outlined"
            label="Senha"
            color="primary"
            fullWidth
            onChange={handleChangePassword}
            value={password}
            type="password"
          />
          <Button type="submit" fullWidth onClick={handleSave} variant="contained" color="primary">
            Salvar
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default ProfileForm
