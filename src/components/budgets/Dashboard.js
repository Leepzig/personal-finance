import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Budget from './Budget'
import { useDispatch } from 'react-redux'
import { createBudget, setBudget } from '../../actions/budgetAction'
import { useForm } from '../../hooks/useForm'
import { Input } from '@mui/material'
import { Box } from '@mui/system'

const Dashboard = () => {
    const currentUser = useSelector(state => state.sessions.currentUser)
    const budgets = useSelector(state => state.sessions.currentUser.budgets)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const dispatch = useDispatch()
    const [form, handleForm] = useForm({header:""})
    const [hiddenState, setHiddenState ] = useState(true)
    //Something is wrong....that shouldn't run every key stroke
    console.log("Does this run every update?")

    const handleDisplayBudgetClick = budget => {
        dispatch(setBudget(budget))
    }

    const handleNewBudgetClick = () => {
        setHiddenState(!hiddenState)
    }
    const handleNewBudgetSubmit = e => {
        e.preventDefault()
        dispatch(createBudget(form, currentUser.id))
    }
    
    if (!loggedIn) return (
        <div>
            Welcome! Please login, or create an account!
        </div>
    )
    return (
        <div>
            <Typography variant="h4">DashBoard</Typography>
            <Button variant="text"size="small" onClick={handleNewBudgetClick}>New Budget</Button>
            <Box component="form" onSubmit={handleNewBudgetSubmit}>
            { hiddenState ? "" : <Input name="header" value={form.header} onChange={handleForm} placeholder="Budget header..."/>}
            { hiddenState ? "" : <Button variante="text" size="small" type="submit" >Submit New Budget</Button>}
            
            </Box>
            <ul>
                {budgets.map( budget => <li key={budget.id} onClick={() => handleDisplayBudgetClick(budget)}>{budget.header}</li>)}
            </ul>
            <hr/>
            < Budget />
        </div>
    )
}

export default Dashboard
