const initialState = {
    budgets:[],
    viewedBudget:{
        id:"",
        income:[], 
        expenses:[], 
        header:"",
    }
}

const budgetReducer = (state=initialState, {payload, type}) => {
    switch(type) {
        case "SET_BUDGET_VIEW":
            return {...state, viewedBudget: {id: payload.id, income:payload.income, expenses: payload.expenses, header: payload.header}}
        case "LOAD_ALL_BUDGETS":
            return {...state, budgets: payload}
        case "NEW_BUDGET":
            const blankBudget = {income:[], expenses:[], header:payload.header}
            return {...state, currentBudget:blankBudget}
        case "ADD_EXPENSE":
            return {...state, viewedBudget:{ ...state.viewedBudget, expenses:[...state.viewedBudget.expenses, payload]}}
        case "ADD_INCOME":
            return {...state, viewedBudget:{ ...state.viewedBudget, income:[...state.viewedBudget.income, payload]}}
        case "UPDATING_EXPENSE":
            return {...state, viewedBudget:{ ...state.viewedBudget, expenses:filterAndReplace(state.viewedBudget.expenses, payload)}}
        case "UPDATING_INCOME":
            return {...state, viewedBudget:{...state.viewedBudget, income:filterAndReplace(state.viewedBudget.income, payload)}}
        case "DELETE_EXPENSE":
            return {...state, viewedBudget:{...state.viewedBudget, expenses: filterDeletedTransaction(state.viewedBudget.expenses, payload)}}
        case "DELETE_INCOME":
            return {...state, viewedBudget:{...state.viewedBudget, income: filterDeletedTransaction(state.viewedBudget.income, payload)}}
        case "CLEAR_BUDGETS":
            return initialState
        default:
            return state
    }
}
//Helper Methods
//Replaces the edited transaction the edited version
const filterAndReplace = (array, replacement) => {
    return array.map(transaction => {
        if (transaction.id === replacement.id) {
            return replacement
        } else {
            return transaction
        }
    })
}
//returns an array without the deleted transaction
const filterDeletedTransaction = (array, id) => {
    return array.filter(transaction => transaction.id !== id)
}

export default budgetReducer