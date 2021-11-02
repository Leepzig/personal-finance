import React from 'react'
import Transaction from './Transaction'
import { useSelector, useDispatch } from 'react-redux'
import { addTransaction } from '../../actions/budgetAction'
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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Budget = () => {
  const dispatch = useDispatch()
  const budget = useSelector(state => state.budgets.viewedBudget)
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    
    const addNewIncomeLine = () => {
      const blankTransaction = {name:"", budgeted:0, actual:0, transaction_type:"income"}
      dispatch(addTransaction(blankTransaction, budget.id))
    }

    const addNewExpenseLine = () => {
      const blankTransaction = {name:"", budgeted:0, actual:0, transaction_type:"expense"}
      dispatch(addTransaction( blankTransaction, budget.id))
    }
    
    const totalReturner = (transaction_array) => {
      if (transaction_array[0] !== undefined ) {
          const budgeted_total = transaction_array.map(transaction => transaction.budgeted).reduce((previousValue, currentValue) => previousValue + currentValue)
          const actual_total = transaction_array.map(transaction => transaction.actual).reduce((previousValue, currentValue) => previousValue + currentValue)
          return {name:"Total", budgeted:budgeted_total, actual:actual_total}
      } else {
          return {name:"Total", budgeted:0, actual:0}
      }
  }
 
    return (
      <Box sx={{
            marginTop: 8,
            marginLeft:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          
        <Item>
          <TableContainer >
            <Typography variant="h4">{budget.header}</Typography>
            <Typography align="left" variant="h6">Income</Typography>
            <Table sx={{ minWidth: 750}} aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell variant="header">Title</TableCell>
                  <TableCell variant="header"sx={{}} align="left">Actual Income</TableCell>
                  <TableCell variant="header"align="left">Expected Income</TableCell>
                  <TableCell variant="header"sx={{}} align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {budget.income.map(incomeTransaction => <Transaction key={incomeTransaction.id } transaction={incomeTransaction}/>)}
                <TableRow >
                  <TableCell >Total</TableCell>
                  <TableCell align="left">{totalReturner(budget.income).budgeted}</TableCell>
                  <TableCell align="left">{totalReturner(budget.income).actual}</TableCell>
                </TableRow>
              </TableBody>
              </Table>
              <Typography align="left" variant="h6">Expenses</Typography>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell variant="header">Title</TableCell>
                  <TableCell variant="header" align="left">Expected Expense</TableCell>
                  <TableCell variant="header" align="left">Actual Expense</TableCell>
                  <TableCell variant="header" align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {budget.expenses.map(expense => <Transaction key={expense.id } transaction={expense}/>)}
                <TableRow >
                  <TableCell>Total</TableCell>
                  <TableCell>{totalReturner(budget.expenses).budgeted}</TableCell>
                  <TableCell>{totalReturner(budget.expenses).actual}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={addNewIncomeLine}>+ New Income</Button>
            <Button variant="contained" onClick={addNewExpenseLine}>+ New Expense</Button>
          </ Stack >
        </Item>
      </Box>
    )
}

export default Budget
