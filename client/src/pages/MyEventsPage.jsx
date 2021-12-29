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
} from '@mui/material';
import React from 'react';
import Page from '../components/Page';

const MyEventsPage = () => {
  return (
    <Page title="Meus Eventos">
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Localização</TableCell>
              <TableCell>Inicio</TableCell>
              <TableCell>Fim</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>
                <Typography variant="body1">1</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Blabla</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">São Paulo</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">10/06/2020 20:00h</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">10/06/2020 20:00h</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Page>
  );
};

export default MyEventsPage;
