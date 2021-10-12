import React from 'react'
import { useForm } from '../../hooks/useForm'

const Transaction = ( {transaction} ) => {
    const [form, handleFormChange] = useForm({
        name: transaction.name,
        budgeted: transaction.budgeted,
        actual: transaction.actual
    })


    return (
        <tr>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="name" value={form.name} onChange={handleFormChange}/></td>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="budgeted" value={form.budgeted} onChange={handleFormChange}/></td>
            <td><input className="transaction-line" aria-label="Field name" type="text" name="actual" value={form.actual} onChange={handleFormChange}/></td>
            {/* <td><input aria-label="Field name" type="button" placeholder="Delete Transaction"/></td> */}
        </tr>
    )
}

export default Transaction
