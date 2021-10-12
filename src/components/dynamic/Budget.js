import React, { useEffect } from 'react'
import Transaction from './Transaction'
import { useSelector, useDispatch } from 'react-redux'
import { addExpense, addIncome, setBudget } from '../../actions/budgetAction'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Budget = () => {
    const dispatch = useDispatch()
    const budget = useSelector(state => state)
    // const income = useSelector(state => state.income)

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

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
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Item>

        <TableContainer component={Paper}>
                <Typography variant="h4">Tab Header (October 2021)</Typography>
                <Typography align="left" variant="h6">Income</Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Expected Income</TableCell>
            <TableCell align="right">Actual Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {budget.income.map(incomeTransaction => <Transaction id={incomeTransaction.name } transaction={incomeTransaction}/>)}
        <TableRow >
            <TableCell >{budget.incomeTotal.name}</TableCell>
            <TableCell align="right">{budget.incomeTotal.budgeted}</TableCell>
            <TableCell align="right">{budget.incomeTotal.actual}</TableCell>
        </TableRow>
        </TableBody>
        <Typography align="left" variant="h6">Expenses</Typography>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Expected Income</TableCell>
            <TableCell align="right">Actual Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {budget.expenses.map(expense => <Transaction id={expense.name } transaction={expense}/>)}
        <TableRow >
            {/* <TableCell>{budget.expensesTotal.name}</TableCell>
            <TableCell>{budget.expensesTotal.budgeted}</TableCell>
        <TableCell>{budget.expensesTotal.actual}</TableCell> */}
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
                <button onClick={addNewIncomeLine}>+ New Income</button>
                <button onClick={addNewExpenseLine}>+ New Expense</button>
        </Item>
      </Grid>
        </Grid>
      </Box>
        </div>
    )
}

export default Budget
