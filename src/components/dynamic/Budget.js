import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'

const Budget = () => {
    const [expenses, setExpenses] = useState([])

    const addNewTransactionLine = () => {
        const blankTransaction = {name:"", budgeted:"", actual:""}
        setExpenses([...expenses, <Transaction transaction={blankTransaction}/>])

    }
    useEffect(() => {
        setExpenses([
            {name:"food", budgeted:"400", actual:""},
            {name:"rent", budgeted:"900", actual:"900"},
            {name:"electricity", budgeted:"200", actual:"190"},
        ])
    },[])
    return (
        <div>
            <h3>Tab Header (October 2021)</h3>
            <h4>Income</h4>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Expected Income</th>
                    <th>Actual Income</th>
                </tr>
                {/* <Transaction />
                <Transaction />
                <Transaction /> */}
                <tr>
                    <td>Total</td>
                    <td>600</td>
                    <td>570</td>
                </tr>
            </table>
            <h4>Expenses</h4>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Budgeted Amount</th>
                    <th>Acutal Spent</th>
                </tr>
                    {expenses.map(expense => <Transaction id={expense.name } transaction={expense}/>)}
                <tr>
                    <button onClick={addNewTransactionLine}>+ New Expense</button>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>600</td>
                    <td>570</td>
                </tr>
            </table>
        </div>
    )
}

export default Budget
