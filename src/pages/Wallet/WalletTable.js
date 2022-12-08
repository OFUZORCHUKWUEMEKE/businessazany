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
  createData('Paystack 00234',"July 12, 2022","N 800,000"),
  createData('Paystack 00234',"July 12, 2022","N 800,000"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00"),
  createData('Apple Store 0045',"Jan 25, 2022","N 2,000.00")
];

export default function WalletTable() {
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 550 }} aria-label="simple table">
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //           className="bg-gray-100 py-2"
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="center">{row.calories}</TableCell>
    //           <TableCell align="center">{row.fat}</TableCell>
    //           <TableCell align="center">{row.carbs}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    <div>
        <div className="flex items-center justify-between">
            <div className="flex items-center">

            </div>
        </div>
    </div>
  );
}