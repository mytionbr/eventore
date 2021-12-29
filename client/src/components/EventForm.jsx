import { Box, Button, Paper, TextField } from '@mui/material';
import { extendSxProp } from '@mui/system';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createEvent } from '../redux/actions/userActions';
import { USER_CREATE_EVENT_RESET } from '../redux/constants/userConstantes';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const EventForm = () => {
    const [title,setName] = React.useState('');
    const [description,setDescription] = React.useState('');
    const [location,setLocation] = React.useState('');
    const [start,setStart] = React.useState('');
    const [end,setEnd] = React.useState('');

    
  const eventCreate = useSelector((state) => state.eventCreate);
  const { data: success, loading, error } = eventCreate;

  const redirect = "/app";
  const navigate = useNavigate();

  const dispatch = useDispatch();

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

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createEvent({
        title: title,
        description: description,
        location: location,
        start_at: moment(start).toISOString(),
        end_at: moment(end).toISOString()
      }))
    };
  
    React.useEffect(() => {
      if (success) {
        navigate(redirect);
        dispatch({type:USER_CREATE_EVENT_RESET})
      }
    }, [success])



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
            title="title"
            variant="outlined"
            label="Nome"
            color="primary"
            fullWidth
            onChange={handleChangeName}
            value={title}
          />
          <TextField
            title="description"
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
            title="location"
            variant="outlined"
            label="Local"
            color="primary"
            fullWidth
            onChange={handleChangeLocation}
            value={location}
          />
          <TextField
            title="start_at"
            variant="outlined"
            label="Começo em"
            color="primary"
            fullWidth
            onChange={handleChangeStart}
            value={start}
          />
          <TextField
            title="end_at"
            variant="outlined"
            label="Termina em"
            color="primary"
            fullWidth
            onChange={handleChangeEnd}
            value={end}
          />

          <Button type="submit" fullWidth onClick={handleSubmit} variant="contained" color="primary">
            Salvar
          </Button>
        </Box>
      </form>
      {loading && <LoadingBox />}
      {error && <MessageBox type="error">{error}</MessageBox>}
    </Paper>
  );
};

export default EventForm;
