import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CommunityEventForm from '../components/CommunityEventForm';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ModalRight from '../components/ModalRight';
import Page from '../components/Page';
import { findCommunityEvents } from '../redux/actions/userActions';

const CommunityPage = () => {
    const [openModal, setOpenModal] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState(null);

  const dispatch = useDispatch();
  const communityEvents = useSelector((state) => state.communityEvents);
  const { loading, error, data } = communityEvents;

  const events = data ? data : [];

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleClickOptions = (event)=>{
    setCurrentEvent(event)
    handleOpenModal();
  }

  const form = (
    <CommunityEventForm
      currentEvent={currentEvent}
    />
  )

  React.useEffect(()=>{
    dispatch(
      findCommunityEvents()
    );
  },[dispatch])

  return (
    <Page title="Comunidade">
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
                <TableCell>Usuário</TableCell>
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
                    <Typography variant="body1">{event.user.name}</Typography>
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
}

export default CommunityPage
