import { Box, Button, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateEvent } from '../redux/actions/userActions';
import { USER_UPDATE_EVENT_RESET } from '../redux/constants/userConstantes';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const MyEventForm = ({ currentEvent }) => {
  const [title, setTitle] = React.useState(currentEvent.title);
  const [description, setDescription] = React.useState(
    currentEvent.description
  );
  const [location, setLocation] = React.useState(currentEvent.location);
  const [start, setStart] = React.useState(currentEvent.start_at);
  const [end, setEnd] = React.useState(currentEvent.end_at);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const eventUpdate = useSelector((state) => state.eventUpdate);
  const {
    data: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = eventUpdate;

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleChangeDescription = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleChangeLocation = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const handleChangeStart = (e) => {
    const { value } = e.target;
    setStart(value);
  };

  const handleChangeEnd = (e) => {
    const { value } = e.target;
    setEnd(value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        event_id: currentEvent.event_id,
        title: title,
        description: description,
        location: location,
        start_at: moment(start).toISOString(),
        end_at: moment(end).toISOString(),
      })
    );
  };

  const handleRemove = () => {
    console.log('opa');
  };

  React.useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_EVENT_RESET });
      navigate('/app')
    }
  }, [dispatch, successUpdate]);

  return (
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
      <Typography variant="h6">Evento</Typography>
      <TextField
        name="name"
        variant="outlined"
        label="Nome"
        color="primary"
        fullWidth
        onChange={handleChangeTitle}
        value={title}
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
        onClick={handleUpdateSubmit}
        fullWidth
        sx={{
          mb: 1,
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
      {loadingUpdate && <LoadingBox />}
      {errorUpdate && <MessageBox type="error">{errorUpdate}</MessageBox>}
    </Box>
  );
};

export default MyEventForm;
