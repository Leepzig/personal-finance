import { BaseURL } from "../globals"


export const setBudget = (budget) => {
    console.log("set budget is running")
    console.log("Budget Data", budget)
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

// export const newBudget = () => {
//     return async dispatch => {
//         const payload = ""
//         dispatch({type:"NEW_BUDGET", payload})
//         }
//     }
