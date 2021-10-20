//testing data:
// import { BaseURL } from "../globals"
// const budgetInfo = {
//     income:[{
//         name:"mowing lawns",
//         budgeted: 300,
//         actual: 250
//     },
//     {
//         name:"verizon salesman",
//         budgeted: 1200,
//         actual: 1200
//     }, 
//     {
//         name:"verizon salesman 2nd half of the month",
//         budgeted: 1200,
//         actual: 1200
//     }], 
//     expenses:[{
//         name:"electric bill",
//         budgeted: 200,
//         actual: 160
//     },
//     {
//         name:"rent",
//         budgeted: 700,
//         actual: 700
//     }, 
//     {
//         name:"car repair",
//         budgeted: 0,
//         actual: 200
//     }], 
//     header:"October 2021",
//     incomeTotal:{name:"Total", budgeted:2300, actual:2500},
//     expenseTotal:{name:"Total", budgeted: 2500, actual: 2400}
// }


export const setBudget = (budget) => {
    console.log("set budget is running")
    return async dispatch => {
        console.log("async dispatch in setBudget is running")

        dispatch({type:"REQUESTING"})
        // const options = {"Authorization":`Bearer ${localStorage.getItem('jwt')}`}
        // const response = await fetch(`${BaseURL}/users/${currentUser.id}/budgets`, options)
        // const data = await response.json()

        dispatch({type:"SET_BUDGET", payload: budget})
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const addExpense = (details) => {
    return async dispatch => {
        //details are all
        const payload = details
        dispatch({type:"ADD_EXPENSE", payload})
    }
}

export const addIncome = (details) => {
    return async dispatch => {
        const payload = details
        dispatch({type:"ADD_INCOME", payload})
    }

// export const newBudget = () => {
//     return async dispatch => {
//         const payload = ""
//         dispatch({type:"NEW_BUDGET", payload})
//         }
//     }
}