const initialState = {
    budgets:[],
    viewedBudget:{
        id:"",
        income:[], 
        expenses:[], 
        header:"",
        incomeTotal:{},
        expenseTotal:{}
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
            return {...state, expenses:[...state.viewedBudget.expenses, payload]}
        case "ADD_INCOME":
            return {...state, income:[...state.viewedBudget.income, payload]}
        case "UPDATING_EXPENSE":
            return {...state, expenses:filterAndReplace(state.viewedBudget.expenses, payload)}
        case "UPDATING_INCOME":
            return {...state, income:filterAndReplace(state.viewedBudget.income, payload)}
        case "DELETE_EXPENSE":
            return {...state, expenses: filterDeletedTransaction(state.viewedBudget.expenses, payload)}
        case "DELETE_INCOME":
            return {...state, income: filterDeletedTransaction(state.viewedBudget.income, payload)}
        case "CLEAR_BUDGETS":
            return initialState
        default:
            return state
    }
}
            // TODO need to filter all transactions to recieve the new one and replace it in the same order that it was recived.

const filterAndReplace = (array, replacement) => {
    return array.map(transaction => {
        if (transaction.id === replacement.id) {
            return replacement
        } else {
            return transaction
        }
    })
}

const filterDeletedTransaction = (array, id) => {
    return array.filter(transaction => transaction.id !== id)
}

export default budgetReducer