import React, {useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';



const Transaction = ( {transaction} ) => {
    const [form, setForm] = useState({
        name: transaction.name,
        budgeted: transaction.budgeted,
        actual: transaction.actual
    })

    const handleChange = e => {
        setForm({...form,
            [e.target.name]:e.target.value
        })
        
    }


//Make it so that on focus for the <tr> the delete button appears
    return (
        <TableRow
            key={transaction.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Input value={form.name} name="name" onChange={handleChange}/>
              </TableCell>
              <TableCell align="right"><Input type="number" value={form.budgeted} name="budgeted" onChange={handleChange}/></TableCell>
              <TableCell align="right"><Input type="number" value={form.actual} name="actual" onChange={handleChange}/></TableCell>
        </TableRow>

    )
}

export default Transaction
