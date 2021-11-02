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
import { clearErrors } from '../../actions/errorAction'


const Dashboard = () => {
    const currentUser = useSelector(state => state.sessions.currentUser)
    const budgets = useSelector(state => state.budgets.budgets)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const dispatch = useDispatch()
    const [form, handleForm, resetForm] = useForm({header:""})
    const [hiddenState, setHiddenState ] = useState(true)
    const [currentBudget, setCurrentBudget] = useState(null)
    const [selectedBudget, setSelectedBudget] = useState("")

    const handleNewBudgetClick = () => {
        setHiddenState(!hiddenState)
    }

    const handleNewBudgetSubmit = e => {
        e.preventDefault()
        dispatch(createBudget(form, currentUser.id, budgets.length))
        resetForm()
        setCurrentBudget(true)
        setSelectedBudget(e.target.value)
    }
    
    useEffect(()=> {
        dispatch(loadAllBudgets())
        return () => {
            dispatch({type:"CLEAR_ERRORS"})
        }
    }, [dispatch])

    const handleDisplayBudgetClick = e => {
        dispatch(loadAllBudgets())
        dispatch(setBudget(e.target.value))
        setSelectedBudget(e.target.value)
        setCurrentBudget(true)
        dispatch(clearErrors())
    }
    
    if (!loggedIn) return (
        <div>
            Welcome! Please login, or create an account!
        </div>
    )
    return (
        <Box sx={{
            marginTop: 8,
            marginLeft:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Typography variant="h4">DashBoard</Typography>
            <Button variant="text"size="small" onClick={handleNewBudgetClick}>New Budget</Button>
            <Box component="form" onSubmit={handleNewBudgetSubmit}>
            <Errors />
            { hiddenState ? "" : <Input name="header" value={form.header} onChange={handleForm} placeholder="Budget header..."/>}
            { hiddenState ? "" : <Button variante="text" size="small" type="submit" >Submit New Budget</Button>}
            
            </Box>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <Select
                labelId="budget-selector"
                id="budget-selector"
                value={selectedBudget}
                onChange={handleDisplayBudgetClick}
                defaultValue="Choose a Budget"
                >
                    {budgets.map((budget, index )=> {
                        return <MenuItem key={budget.id} value={index}>{budget.header}</MenuItem>}
                    )}
                </Select>
                <FormHelperText>Choose a Budget or create a new one.</FormHelperText>
            </FormControl>
            <hr/>
            {currentBudget ? <Budget /> : null}
        </Box>
    )
}

export default Dashboard
