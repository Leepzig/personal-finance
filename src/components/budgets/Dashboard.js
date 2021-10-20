import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Budget from './Budget'
import { useDispatch } from 'react-redux'
import { setBudget } from '../../actions/budgetAction'

const Dashboard = () => {
    const budgets = useSelector(state => state.sessions.currentUser.budgets)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const dispatch = useDispatch()

    const handleBudgetClick = budget => {
        dispatch(setBudget(budget))
    }
    
    if (!loggedIn) return (
        <div>
            Welcome! Please login, or create an account!
        </div>
    )
    return (
        <div>
            <Typography variant="h4">DashBoard</Typography>
            <ul>
                {budgets.map( budget => <li key={budget.id} onClick={() => handleBudgetClick(budget)}>{budget.header}</li>)}
            </ul>
            <hr/>
            < Budget />
        </div>
    )
}

export default Dashboard
