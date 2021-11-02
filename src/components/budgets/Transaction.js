import React, { useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../../actions/budgetAction';
import { Button } from '@mui/material';
import { deleteTransaction } from "../../actions/budgetAction"
import { clearErrors, setTransactionErrors } from '../../actions/errorAction';



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
        handleErrorDisplay(e)
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

    const handleErrorDisplay = e => {
        const regex = RegExp(/\D/)
        console.log(regex.test(e.key))
        // const nums = [0,1,2,3,4,5,6,7,8,9]
        // nums.includes(e.key)
        if (regex.test(e.key) && e.keyCode !== 8 && e.keyCode !== 13) {
            const errors = ["Budgeted and Actual must be a number"]
            dispatch(setTransactionErrors(errors))
        }
        else {
            dispatch(clearErrors())
        }
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
              <TableCell align="left"><Input onKeyPress={handleErrorDisplay} type="number" onBlur={handleSubmitChange} value={form.budgeted} name="budgeted" onChange={handleChange}/></TableCell>
              <TableCell align="left"><Input onKeyPress={handleErrorDisplay} type="number" onBlur={handleSubmitChange} value={form.actual} name="actual" onChange={handleChange}/></TableCell>
              <Button style={{display:showDelete}}onClick={handleDelete} variant={'contained'} size="small">Delete</Button>
        </TableRow>
        </>

    )
}

export default Transaction
