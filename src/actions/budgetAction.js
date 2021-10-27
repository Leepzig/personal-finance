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
        // dispatch({type:"REQUESTING"})
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
        // console.log("ROUTE",`${BaseURL}/${userId}/budgets`)
        // dispatch({type:"FINISHED_REQUESTING"})
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
        dispatch({type:"FINISHED_REQUESTING"})
    }
}
//TODO REMOVE REQUESTING FROM ADD TRANSACITON
export const addTransaction = (details, budgetId) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
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
//if working refactor into updateTransaction
//Don't dispatch requesting if things are already loaded!!!
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
