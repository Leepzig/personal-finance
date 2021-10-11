import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'
import { useSelector, useDispatch } from 'react-redux'
import { addExpense, addIncome, setBudget } from '../../actions/budgetAction'

const Budget = () => {
    const dispatch = useDispatch()
    const budget = useSelector(state => state)

    const addNewExpenseLine = () => {
        const blankTransaction = {name:"", budgeted:"", actual:""}
        dispatch(addExpense([...budget.expenses, blankTransaction]))
    }
    const addNewIncomeLine = () => {
        const blankTransaction = {name:"", budgeted:"", actual:""}
        dispatch(addIncome([...budget.income, blankTransaction]))
    }

    useEffect(() => {
        dispatch(setBudget())

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
                    {budget.income.map(incomeTransaction => <Transaction id={incomeTransaction.name } transaction={incomeTransaction}/>)}
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


                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>600</td>
                        <td>570</td>
                    </tr>
                </tfoot>
            </table>
                    <button onClick={addNewIncomeLine}>+ New Income</button>
                    <button onClick={addNewExpenseLine}>+ New Expense</button>
        </div>
    )
}

export default Budget
