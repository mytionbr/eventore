import { AppBar, Box, Button, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

const AppBarStyled = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: '100%',
  padding: '10px',
  backgroundColor: '#5A4FCF'
}));


const Navbar = () => {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBarStyled>
           
            <Typography component={Link} to="/" sx={{fontSize: '2rem',color: '#fff',textDecoration: 'none'}}>
                  EVENTORE
            </Typography>           
                <Box sx={{display: 'flex', alignItems: 'center' }}>
                  <Button component={Link} to="/register" sx={{marginRight:'10px'}} variant="contained" color="primary">Registre-se</Button>
                  <Button component={Link} to="/login" variant="contained" color="primary">Login</Button>
                </Box>
        </AppBarStyled>
        </Box>
    )
}

export default Navbar
