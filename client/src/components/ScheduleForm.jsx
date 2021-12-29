import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { unregisterEvent } from '../redux/actions/userActions';
import { USER_UNREGISTER_EVENT_RESET } from '../redux/constants/userConstantes';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const ScheduleForm = ({currentEvent}) => {
    const [title,setName] = React.useState(currentEvent.title);
    const [description,setDescription] = React.useState(currentEvent.description);
    const [location,setLocation] = React.useState(currentEvent.location);
    const [start,setStart] = React.useState(currentEvent.start_at);
    const [end,setEnd] = React.useState(currentEvent.end_at);
    const [userName,setUserName] = React.useState(currentEvent.user_name);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eventUnregister = useSelector((state) => state.eventUnregister);
    const { data: success, loading, error } = eventUnregister;


    const handleUnregister = (e) => {
        e.preventDefault();
        dispatch(unregisterEvent({
          event_id: currentEvent.event_id
        }))
    }

    React.useEffect(() => {
        if (success) {
          navigate('/app');
          dispatch({type:USER_UNREGISTER_EVENT_RESET})
        }
      }, [success])

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
                value={title}
                disabled
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
                onClick={handleUnregister}
                fullWidth
                sx={{
                    mb: 1
                }}
            >
            Cancelar
          </Button>
          {loading && <LoadingBox />}
        {error && <MessageBox type="error">{error}</MessageBox>}
        </Box>
    )
}

export default ScheduleForm
