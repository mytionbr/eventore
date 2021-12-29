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
import ModalRight from '../components/ModalRight';
import MyEventForm from '../components/MyEventForm';
import Page from '../components/Page';

const MyEventsPage = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState(null);

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

  return (
    <Page title="Meus Eventos">
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
            <TableRow hover>
              <TableCell>
                <Typography variant="body1">Blabla</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">São Paulo</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Festa 1</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">10/06/2020 20:00h</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">10/06/2020 20:00h</Typography>
              </TableCell>
              <TableCell>
                <Button onClick={()=>handleClickOptions(
                  {
                    name: 'test',
                    description: 'test',
                    location: 'test',
                    start_at: 'test',
                    end_at: 'test'
                  }
                )} variant='contained'>Opções</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <ModalRight 
        openModal={openModal}
        handleOpenModal={handleOpenModal}
        form={form}
      />
    </Page>
  );
};

export default MyEventsPage;
