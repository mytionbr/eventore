import {
  Box,
  Container,
  Grid,
  Table,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ModalRight from '../components/ModalRight';
import MyEventForm from '../components/MyEventForm';
import Page from '../components/Page';
import { findEventsByUser } from '../redux/actions/userActions';

const MyEventsPage = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState(null);

  const dispatch = useDispatch();
  const myEvents = useSelector((state) => state.myEvents);
  const { loading, error, data } = myEvents;

  const userSignin = useSelector((state) => state.userSignin);
  const { loading: loadingUser, error: errorUser, userInfo } = userSignin;

  const events = data ? data : [];


  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleClickOptions = (event)=>{
    setCurrentEvent(event)
    handleOpenModal();
  }

  const form = (
    <MyEventForm 
      currentEvent={currentEvent}
    />
  )

  React.useEffect(()=>{
    dispatch(
      findEventsByUser({
        user_id: userInfo.user_id
      })
    );
  },[dispatch, userInfo])

  return (
    <Page title="Meus Eventos">
      {
        loading ? (
          <LoadingBox/>
        ) : error ? (
          <MessageBox type="error">{error}</MessageBox>
        ) : (
          <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Localização</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Inicio</TableCell>
                <TableCell>Fim</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                events.map(event => (
                  <TableRow hover>
                  <TableCell>
                    <Typography variant="body1">{event.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{event.location}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{event.description}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{event.start_at}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{event.end_at}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>handleClickOptions(
                     event
                    )} variant='contained'>Opções</Button>
                  </TableCell>
                </TableRow>
                ))
              }
              
            </TableBody>
          </Table>
        </Paper>
        )
      }
      
      <ModalRight 
        openModal={openModal}
        handleOpenModal={handleOpenModal}
        form={form}
      />
    </Page>
  );
};

export default MyEventsPage;
