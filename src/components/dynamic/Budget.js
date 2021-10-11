import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'
import { useSelector, useDispatch } from 'react-redux'
import { setBudget } from '../../actions/budgetAction'

const Budget = () => {
    // const [expenses, setExpenses] = useState([])
    const dispatch = useDispatch()
    const budget = useSelector(state => state)

    const addNewTransactionLine = () => {
        const blankTransaction = {name:"", budgeted:"", actual:""}
        //setExpenses([...expenses, <Transaction transaction={blankTransaction}/>])

    }
    useEffect(() => {
        dispatch(setBudget())

        //no redux
        // setExpenses([
        //     {name:"food", budgeted:"400", actual:""},
        //     {name:"rent", budgeted:"900", actual:"900"},
        //     {name:"electricity", budgeted:"200", actual:"190"},
        // ])
    },[dispatch])
    return (
        <div>
            <h3>Tab Header (October 2021)</h3>
            <h4>Income</h4>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Expected Income</th>
                        <th>Actual Income</th>
                    </tr>
                </thead>
                <tbody>
                    {budget.income.map(expense => <Transaction id={expense.name } transaction={expense}/>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>600</td>
                        <td>570</td>
                    </tr>
                </tfoot>
            </table>
            <h4>Expenses</h4>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Budgeted Amount</th>
                        <th>Acutal Spent</th>
                    </tr>
                </thead>
                <tbody>
                    {budget.expenses.map(expense => <Transaction id={expense.name } transaction={expense}/>)}
                <tr>
                    <button onClick={addNewTransactionLine}>+ New Expense</button>
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>600</td>
                        <td>570</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Budget
