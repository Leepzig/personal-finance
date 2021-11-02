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
    const [showDelete, setShowDelete] = useState('none')
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

    return (
        <>
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onMouseEnter={() => setShowDelete('block')}
            onMouseLeave={() => setShowDelete('none')}
            
            >
              <TableCell className="test" component="th" scope="row">
                <Input value={form.name} onBlur={handleSubmitChange} name="name" onChange={handleChange}/>
              </TableCell>
              <TableCell align="left"><Input type="number" onBlur={handleSubmitChange} value={form.budgeted} name="budgeted" onChange={handleChange}/></TableCell>
              <TableCell align="left"><Input type="number" onBlur={handleSubmitChange} value={form.actual} name="actual" onChange={handleChange}/></TableCell>
              <Button style={{display:showDelete}}onClick={handleDelete} variant={'contained'} size="small">Delete</Button>
        </TableRow>
        </>

    )
}

export default Transaction
