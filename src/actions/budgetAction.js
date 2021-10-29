import { BaseURL } from "../globals"


export const setBudget = (budget) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        dispatch({type:"SET_BUDGET_VIEW", payload: budget})
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const loadAllBudgets = () => {
    return async dispatch => {
        const options = {
            headers:{
                "Content-Type":"application/json", 
                "Accept":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
        }
    }
        const response = await fetch(`${BaseURL}/budgets`, options)
        const data = await response.json()
        dispatch({type:"LOAD_ALL_BUDGETS", payload: data})
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

        if (data.errors) {
            dispatch({type:"SET_ERRORS", payload: data.errors})
        } else {
            dispatch({type:"CLEAR_ERRORS"})
            dispatch({type:"NEW_BUDGET", payload:data})
            dispatch({type:"SET_BUDGET_VIEW", payload:data})
            dispatch(loadAllBudgets())
            dispatch({type:"FINISHED_REQUESTING"})
        }
    }
}
export const addTransaction = (details, budgetId) => {
    return async dispatch => {
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
        } else {
            dispatch({type:"ADD_INCOME", payload:data})
        }
    }
}
export const updateTransaction = (formInfo, transactionId) => {
    return async dispatch => {
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
        if (data.transaction_type === 'expense') {
            dispatch({type:"UPDATING_EXPENSE", payload:data})
        } else {
            dispatch({type:"UPDATING_INCOME", payload:data})
        }
    }
}

export const deleteTransaction = transaction => {
    return async dispatch => {
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
        } else {
            dispatch({type:"DELETE_INCOME", payload: transaction.id})
        }
    }
}
