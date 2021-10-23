import React, { useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../../actions/budgetAction';



const Transaction = ( {transaction} ) => {
    const [form, setForm] = useState({
        name: transaction.name,
        budgeted: transaction.budgeted,
        actual: transaction.actual
    })
    const dispatch = useDispatch()

    const handleChange = e => {
        setForm({...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmitChange = e => {
        // handleChange(e)
        const changingInput = {[e.target.name]:e.target.value}
        handleUpdate(changingInput, transaction.id)
    }

    const handleUpdate = (form, id) => {
        if (transaction.transaction_type === "expense" ) {
            dispatch(updateExpense(form, id))
        } else {
            //dispatch(updateIncome(form, transaction.id))
        }
    }


//TODO Make it so that on focus for the <tr> the delete button appears
    return (
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Input value={form.name} name="name" onChange={handleSubmitChange}/>
              </TableCell>
              <TableCell align="right"><Input type="number" value={form.budgeted} name="budgeted" onChange={handleSubmitChange}/></TableCell>
              <TableCell align="right"><Input type="number" value={form.actual} name="actual" onChange={handleChange}/></TableCell>
        </TableRow>

    )
}

export default Transaction
