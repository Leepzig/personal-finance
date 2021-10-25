import { BaseURL } from "../globals"


export const setBudget = (budget) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        dispatch({type:"SET_BUDGET", payload: budget})
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const createBudget = (header, userId) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json", 
                "Accept":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
        },
            body:JSON.stringify(header)
        }
        const response = await fetch(`${BaseURL}/users/${userId}/budgets`, options)
        const data = await response.json()
        // debugger
        dispatch({type:"NEW_BUDGET", payload:data})
        //TODO add a dispatch that adds the new budget to the list of budgets to click on
        //TODO have the totals updated on the frontend instead of the back end
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const addTransaction = (details, budgetId) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        //details are all
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json", 
                "Accept":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
        },
            body:JSON.stringify(details)
        }
        const response = await fetch(`${BaseURL}/budgets/${budgetId}/transactions`, options)
        const data = await response.json()
        if (details.transaction_type === 'expense') {
            dispatch({type:"ADD_EXPENSE", payload:data})
            dispatch({type:"FINISHED_REQUESTING"})
        } else {
            dispatch({type:"ADD_INCOME", payload:data})
            dispatch({type:"FINISHED_REQUESTING"})
        }
    }
}

export const updateExpense = (formInfo, transactionId) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json", 
                "Accept":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
            },
            body:JSON.stringify(formInfo)
        }
        const response = await fetch(`${BaseURL}/transactions/${transactionId}`, options)
        const data = await response.json()
        console.log("DATA RECIVED FROM UPDATING TRANSACTION", data)
        // debugger
        //dispatch with data, confirm data returned is good from the backend, check the route
        //The update expense is the only thing that is different, what can we do to make this reusable?
        dispatch({type:"UPDATING_EXPENSE", payload: data})
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const deleteTransaction = transaction => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json", 
                "Accept":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
        }
    }
        const response = await fetch(`${BaseURL}/transactions/${transaction.id}`, options)
        const data = await response.json()
        console.log(data)

        if (transaction.transaction_type === 'expense') {
            dispatch({type:"DELETE_EXPENSE", payload: transaction.id})
            dispatch({type:"FINISHED_REQUESTING"})
        } else {
            dispatch({type:"DELETE_INCOME", payload: transaction.id})
            dispatch({type:"FINISHED_REQUESTING"})
        }
    }
}
