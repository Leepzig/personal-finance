const initialState = {
    id:"",
    income:[], 
    expenses:[], 
    header:"",
    incomeTotal:{},
    expenseTotal:{}
}

const budgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_BUDGET":
            return {...state, id: action.payload.id, income:action.payload.income, expenses: action.payload.expenses, header: action.payload.header, incomeTotal: action.payload.income_total, expenseTotal: action.payload.expense_total}
        case "ADD_EXPENSE":
            return {...state, expenses:[...state.expenses, action.payload]}
        case "ADD_INCOME":
            return {...state, income:[...state.income, action.payload]}
        case "UPDATING_EXPENSE":
            // debugger
            // TODO need to filter all transactions to recieve the new one and replace it in the same order that it was recived.
            console.log("New Expenses:", filterAndReplace(state.expenses, action.payload))
            return {...state, expenses:filterAndReplace(state.expenses, action.payload)}
        case "UPDATING_INCOME":
            return {...state, income:filterAndReplace(state.income, action.payload)}
        case "DELETE_EXPENSE":
            return {...state, expenses:action.payload}
        case "DELETE_INCOME":
            return {...state, income:action.payload}
        case "NEW_BUDGET":
            const blankBudget = {income:[], expenses:[], header:"", incomeTotal:{name:"Total", budgeted:0, actual:0}, ExpenseTotal:{name:"Total", budgeted:0, actual:0} }
            return {...state, currentBudget:blankBudget}
        default:
            return state
    }
}
const filterAndReplace = (array, replacement) => {
    return array.map(transaction => {
        if (transaction.id === replacement.id) {
            return replacement
        } else {
            return transaction
        }
    })
}

export default budgetReducer