import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const MyEventForm = ({currentEvent}) => {
    const [name,setName] = React.useState(currentEvent.name);
    const [description,setDescription] = React.useState(currentEvent.description);
    const [location,setLocation] = React.useState(currentEvent.location);
    const [start,setStart] = React.useState(currentEvent.start_at);
    const [end,setEnd] = React.useState(currentEvent.end_at);

    const handleChangeName = (e) => {
        const { value } = e.target;
        setName(value);
    }    

    const handleChangeDescription = (e) => {
        const { value } = e.target;
        setDescription(value);
    }
    
    const handleChangeLocation = (e) => {
        const { value } = e.target;
        setLocation(value);
    }
    
    const handleChangeStart = (e) => {
        const { value } = e.target;
        setStart(value);
    } 

    const handleChangeEnd = (e) => {
        const { value } = e.target;
        setEnd(value);
    } 

    const handleUpdate = ()=>{
        console.log('opa')
    }

    const handleRemove = ()=>{
        console.log('opa')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                '& > *':{
                  my: 1
                 }
            }}
        >
            <Typography variant="h6">Evento</Typography>
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
                name="description"
                variant="outlined"
                label="Descrição"
                color="primary"
                fullWidth
                onChange={handleChangeDescription}
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
                onChange={handleChangeLocation}
                value={location}
            />
            <TextField
                name="start_at"
                variant="outlined"
                label="Começo em"
                color="primary"
                fullWidth
                onChange={handleChangeStart}
                value={start}
            />
            <TextField
                name="end_at"
                variant="outlined"
                label="Termina em"
                color="primary"
                fullWidth
                onChange={handleChangeEnd}
                value={end}
            />
             <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                onClick={handleUpdate}
                fullWidth
                sx={{
                    mb: 1
                }}
            >
            Alterar
          </Button>
          <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleRemove}
                fullWidth
            >
            Excluir
          </Button>
        </Box>
    )
}

export default MyEventForm
