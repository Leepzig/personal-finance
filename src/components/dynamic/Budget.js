import React from 'react'
import Transaction from './Transaction'

const Budget = () => {

    const addNewTransaction = () => {
        
    }

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
                <Transaction />
                <Transaction />
                <Transaction />
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
                <Transaction />
                <Transaction />
                <Transaction />
                <tr>
                    <button>+ New Expense</button>
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
