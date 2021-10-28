import React, { useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../../actions/budgetAction';
import { Button } from '@mui/material';
import { deleteTransaction } from "../../actions/budgetAction"



const Transaction = ( {transaction} ) => {

    const [form, setForm] = useState({
        name: transaction.name,
        budgeted: transaction.budgeted,
        actual: transaction.actual,
        transaction_type: transaction.transaction_type
    })
    const [showDelete, setShowDelete] = useState(false)
    const dispatch = useDispatch()

    const handleChange = e => {
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmitChange = e => {
        const changingInput = {[e.target.name]:e.target.value}
        dispatch(updateTransaction(changingInput, transaction.id))
    }

    const handleDelete = e => {
        dispatch(deleteTransaction(transaction))
    }

//TODO Make it so that on focus for the <tr> the delete button appears

    return (
        <>
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
            >
              <TableCell className="test" component="th" scope="row">
                <Input value={form.name} onBlur={handleSubmitChange} name="name" onChange={handleChange}/>
              </TableCell>
              <TableCell align="right"><Input type="number" onBlur={handleSubmitChange} value={form.budgeted} name="budgeted" onChange={handleChange}/></TableCell>
              <TableCell align="right"><Input type="number" onBlur={handleSubmitChange} value={form.actual} name="actual" onChange={handleChange}/></TableCell>
              {showDelete ? <Button onClick={handleDelete} variant={'contained'} size="small">Delete</Button> : null}
        </TableRow>
        </>

    )
}

export default Transaction
