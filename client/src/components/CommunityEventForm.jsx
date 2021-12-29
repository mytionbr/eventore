import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const CommunityEventForm = ({currentEvent}) => {
    const [title,setTitle] = React.useState(currentEvent.title);
    const [description,setDescription] = React.useState(currentEvent.description);
    const [location,setLocation] = React.useState(currentEvent.location);
    const [start,setStart] = React.useState(currentEvent.start_at);
    const [end,setEnd] = React.useState(currentEvent.end_at);
    const [userName,setUserName] = React.useState(currentEvent.user.name);

    const handleRegister = () => {
        console.log('opa')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                overflow: 'auto',
                height: "100%",
                '& > *':{
                  my: 1
                 }
            }}
        >
            <Typography variant="h6">Evento</Typography>
            <TextField
                name="title"
                variant="outlined"
                label="Nome"
                color="primary"
                fullWidth
                disabled
                value={title}
            />
            <TextField
                name="description"
                variant="outlined"
                label="Descrição"
                color="primary"
                fullWidth
                disabled
                rows={3}
                multiline
                value={description}
            />
            <TextField
                name="location"
                variant="outlined"
                label="Local"
                color="primary"
                fullWidth
                disabled
                value={location}
            />
            <TextField
                name="start_at"
                variant="outlined"
                label="Começo em"
                color="primary"
                fullWidth
                disabled
                value={start}
            />
            <TextField
                name="end_at"
                variant="outlined"
                label="Termina em"
                color="primary"
                fullWidth
                disabled
                value={end}
            />
            <TextField
                name="user_name"
                variant="outlined"
                label="Usuário"
                color="primary"
                fullWidth
                value={userName}
                disabled 
            />
             <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                onClick={handleRegister}
                fullWidth
                sx={{
                    mb: 1
                }}
            >
            Registre-se
          </Button>
        </Box>
    )
}

export default CommunityEventForm
