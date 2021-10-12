import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';



const Transaction = ( {transaction} ) => {
    const [disabledStatus, setDisabledStatus] = useState(false)
    const [form, handleFormChange] = useForm({
        name: transaction.name,
        budgeted: transaction.budgeted,
        actual: transaction.actual
    })

    const changeDisabledStatus = () => {

    }

//MAke it so that on focus for the <tr> the delete button appears
    return (
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick
            >
              <TableCell component="th" scope="row">
                <Input disabled={disabledStatus} value={form.name} name="name" onChange={handleFormChange}/>
              </TableCell>
              <TableCell disabled={disabledStatus} align="right"><Input value={form.budgeted} name="budgeted" onChange={handleFormChange}/></TableCell>
              <TableCell disabled={disabledStatus} align="right"><Input value={form.actual} name="actual" onChange={handleFormChange}/></TableCell>
            {/* <td><input className="transaction-line" aria-label="Field name" type="text" name="name" value={form.name} onChange={handleFormChange}/></td>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="budgeted" value={form.budgeted} onChange={handleFormChange}/></td>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="actual" value={form.actual} onChange={handleFormChange}/></td>
            <td><input aria-label="Field name" type="button" value="Delete" /></td> */}
        </TableRow>

    )
}

export default Transaction
