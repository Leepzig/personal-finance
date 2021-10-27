import React, { useEffect, useRef, useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { updateTransaction } from '../../actions/budgetAction';
import { Button } from '@mui/material';
import { deleteTransaction } from "../../actions/budgetAction"



const Transaction = ( {transaction} ) => {
    const focusedName = useRef(null)
    const focusedBudgeted = useRef(null)
    const focusedActual = useRef(null)

    const [autofocus, setAutofocus] = useState({
        name: false,
        budgeted:false,
        actual:false
    })
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

    //set autofocus to true onfocus
    // set auto to false outofocus

    const handleSubmitChange = e => {
        handleChange(e)
        const changingInput = {[e.target.name]:e.target.value}
        dispatch(updateTransaction(changingInput, transaction.id))
    }

    const handleDelete = e => {
        dispatch(deleteTransaction(transaction))
    }

    const handleFocusIn = e => {
        console.log(e.target.name)
        setAutofocus(
            {...autofocus,
            [e.target.name]:true}
        )
    }

    const handleFocusRef = e => {
        if (autofocus.name) {
            focusedName.current.focus()
        }
    }

    const handleFocusOut = e => {
        setAutofocus(
            {...autofocus,
            [e.target.name]:false}
        )
    }

    // useEffect(() => {
    //     setForm({
    //     name: transaction.name,
    //     budgeted: transaction.budgeted,
    //     actual: transaction.actual,
    //     transaction_type: transaction.transaction_type
    // })
    // }, [])

//TODO Make it so that on focus for the <tr> the delete button appears

console.log(autofocus)
    handleFocusRef()
    return (
        <>
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
            >
              <TableCell className="test" component="th" scope="row">
                <Input inputRef={focusedName} autoFocus={autofocus.name} onClick={handleFocusIn} value={form.name} name="name" onChange={handleSubmitChange}/>
              </TableCell>
              <TableCell align="right"><Input ref={focusedBudgeted} autoFocus={autofocus.budgeted} type="number" value={form.budgeted} name="budgeted" onChange={handleSubmitChange}/></TableCell>
              <TableCell align="right"><Input ref={focusedActual} autoFocus={autofocus.actual} type="number" value={form.actual} name="actual" onChange={handleSubmitChange}/></TableCell>
              {showDelete ? <Button onClick={handleDelete} variant={'contained'} size="small">Delete</Button> : null}
        </TableRow>
        </>

    )
}

export default Transaction
