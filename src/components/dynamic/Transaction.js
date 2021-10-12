import React from 'react'
import { useForm } from '../../hooks/useForm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Transaction = ( {transaction} ) => {
    const [form, handleFormChange] = useForm({
        name: transaction.name,
        budgeted: transaction.budgeted,
        actual: transaction.actual
    })

//MAke it so that on focus for the <tr> the delete button appears
    return (
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {transaction.name}
              </TableCell>
              <TableCell align="right">{transaction.budgeted}</TableCell>
              <TableCell align="right">{transaction.actual}</TableCell>
            {/* <td><input className="transaction-line" aria-label="Field name" type="text" name="name" value={form.name} onChange={handleFormChange}/></td>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="budgeted" value={form.budgeted} onChange={handleFormChange}/></td>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="actual" value={form.actual} onChange={handleFormChange}/></td>
            <td><input aria-label="Field name" type="button" value="Delete" /></td> */}
        </TableRow>

    )
}

export default Transaction
