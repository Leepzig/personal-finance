import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Budget from './Budget'
import { useDispatch } from 'react-redux'
import { createBudget, loadAllBudgets, setBudget } from '../../actions/budgetAction'
import { useForm } from '../../hooks/useForm'
import { Input } from '@mui/material'
import { Box } from '@mui/system'
import { useHistory } from 'react-router-dom'
import BasicTabs from './BasicTabs'
import Errors from '../static/Errors'

const Dashboard = () => {
    const currentUser = useSelector(state => state.sessions.currentUser)
    const budgets = useSelector(state => state.budgets.budgets)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const dispatch = useDispatch()
    const [form, handleForm, resetForm] = useForm({header:""})
    const [hiddenState, setHiddenState ] = useState(true)
    const history = useHistory()
    //Should I keep track of this in state?
    // let loadedBudget = false
    const handleDisplayBudgetClick = budget => {
        dispatch(setBudget(budget))
        dispatch(loadAllBudgets())
    }

    const handleNewBudgetClick = () => {
        setHiddenState(!hiddenState)
    }
    const handleNewBudgetSubmit = e => {
        e.preventDefault()
        dispatch(createBudget(form, currentUser.id))
        resetForm()
    }
    
    useEffect(()=> {
            dispatch(loadAllBudgets())
            return () => {
                dispatch({type:"CLEAR_ERRORS"})
            }
    }, [dispatch])


    
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
            <Errors />
            { hiddenState ? "" : <Input name="header" value={form.header} onChange={handleForm} placeholder="Budget header..."/>}
            { hiddenState ? "" : <Button variante="text" size="small" type="submit" >Submit New Budget</Button>}
            
            </Box>
            <ul>
                {budgets.map( budget => <li key={budget.id} onClick={() => handleDisplayBudgetClick(budget)}>{budget.header}</li>)}
            </ul>
            {/* <BasicTabs /> */}
            <hr/>
            <Budget />
            {/* { loadedBudget ? < Budget /> : null } */}
        </div>
    )
}

export default Dashboard
