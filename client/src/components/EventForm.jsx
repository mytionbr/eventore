import { Box, Button, Paper, TextField } from '@mui/material';
import React from 'react';

const EventForm = () => {
    const [name,setName] = React.useState('');
    const [description,setDescription] = React.useState('');
    const [location,setLocation] = React.useState('');
    const [start,setStart] = React.useState('');
    const [end,setEnd] = React.useState('');

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
              my: 1.2,
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

          <Button type="submit" fullWidth onClick={handleSave} variant="contained" color="primary">
            Salvar
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default EventForm;
