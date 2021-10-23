import { BaseURL } from "../globals"


export const setBudget = (budget) => {
   
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        // const options = {"Authorization":`Bearer ${localStorage.getItem('jwt')}`}
        // const response = await fetch(`${BaseURL}/users/${currentUser.id}/budgets`, options)
        // const data = await response.json()

        dispatch({type:"SET_BUDGET", payload: budget})
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const addExpense = (details, budgetId) => {
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

        dispatch({type:"ADD_EXPENSE", payload:data})
        //TODO add a route that updates expense/incomeTotal here
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const addIncome = (details, budgetId) => {
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
 
        dispatch({type:"ADD_INCOME", payload:data})
        //TODO add a route that updates expense/incomeTotal here
        dispatch({type:"FINISHED_REQUESTING"})
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
    
