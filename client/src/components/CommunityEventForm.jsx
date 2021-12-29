import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerEvent } from '../redux/actions/userActions';
import { USER_REGISTER_EVENT_RESET } from '../redux/constants/userConstantes';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const CommunityEventForm = ({currentEvent}) => {
    const [title,setTitle] = React.useState(currentEvent.title);
    const [description,setDescription] = React.useState(currentEvent.description);
    const [location,setLocation] = React.useState(currentEvent.location);
    const [start,setStart] = React.useState(currentEvent.start_at);
    const [end,setEnd] = React.useState(currentEvent.end_at);
    const [userName,setUserName] = React.useState(currentEvent.user.name);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const eventRegister = useSelector((state) => state.eventRegister);
    const { data: success, loading, error } = eventRegister;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerEvent({
          event_id: currentEvent.event_id
        }))
    }

    React.useEffect(() => {
        if (success) {
          navigate('/app/schedule');
          dispatch({type:USER_REGISTER_EVENT_RESET})
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
          {loading && <LoadingBox />}
        {error && <MessageBox type="error">{error}</MessageBox>}
        </Box>
    )
}

export default CommunityEventForm
