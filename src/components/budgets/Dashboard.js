import { Button, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Budget from './Budget'
import { useDispatch } from 'react-redux'
import { createBudget, loadAllBudgets, setBudget } from '../../actions/budgetAction'
import { useForm } from '../../hooks/useForm'
import { Input } from '@mui/material'
import { Box } from '@mui/system'
import Errors from '../static/Errors'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material'
import { clearErrors } from '../../actions/errorAction'


const Dashboard = () => {
    const currentUser = useSelector(state => state.sessions.currentUser)
    const budgets = useSelector(state => state.budgets.budgets)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const dispatch = useDispatch()
    const [form, handleForm, resetForm] = useForm({header:""})
    const [hiddenState, setHiddenState ] = useState(true)
    const [currentBudget, setCurrentBudget] = useState("")

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

    const handleDisplayBudgetClick = e => {
        dispatch(setBudget(e.target.value))
        dispatch(loadAllBudgets())
        debugger
        setCurrentBudget(e.target.value.header)
        dispatch(clearErrors())
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
            <Errors />
            { hiddenState ? "" : <Input name="header" value={form.header} onChange={handleForm} placeholder="Budget header..."/>}
            { hiddenState ? "" : <Button variante="text" size="small" type="submit" >Submit New Budget</Button>}
            
            </Box>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="budget-selector">Budget Label</InputLabel>
                <Select
                labelId="budget-selector"
                id="budget-selector"
                value={currentBudget}
                label="Age"
                onChange={handleDisplayBudgetClick}
                >
                    {budgets.map(budget=> {
                        return <MenuItem value={budget}>{budget.header}</MenuItem>}
                    )}
                </Select>
                <FormHelperText>Choose a Budget or create a new one.</FormHelperText>
            </FormControl>
            <hr/>
            <Budget />
        </div>
    )
}

export default Dashboard
