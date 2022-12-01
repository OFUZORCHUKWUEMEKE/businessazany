import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein,status) {
  return { name, calories, fat, carbs, protein,status };
}

const rows = [
  createData('Jeremiah Ade',"x345","VIP","26/02/2001 12:00pm", 4.0,2.0,"sucessful"),
  createData('Jeremiah Ade',"x345","VIP","26/02/2001 12:00pm", 4.3,2.0,"sucessful"),
  createData('Jeremiah Ade',"x345", "VIP","26/02/2001 12:00pm", 6.0,2.0,"sucessful"),
  createData('Jeremiah Ade',"x345","VIP","26/02/2001 12:00pm", 4.3,2.0,"sucessful"),
  createData('Jeremiah Ade',"x345", "VIP","26/02/2001 12:00pm", 3.9,2.0,"sucessful"),
];

export default function TransactionTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-white shadow-lg">
            <TableCell>Customer Name</TableCell>
            <TableCell align="center">Ticket Id</TableCell>
            <TableCell align="center">Ticket Type</TableCell>
            <TableCell align="center">Purchase Date /Time</TableCell>
            <TableCell align="center">Event date/Time</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="bg-gray-100 py-2"
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}