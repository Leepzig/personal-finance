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
            return {...state, id: action.payload.id, income:action.payload.income, expenses: action.payload.expenses, header: action.payload.header, incomeTotal: totalReturner(action.payload.income), expenseTotal: totalReturner(action.payload.expenses)}
        case "NEW_BUDGET":
            const blankBudget = {income:[], expenses:[], header:action.payload.header, incomeTotal:{name:"Total", budgeted:0, actual:0}, ExpenseTotal:{name:"Total", budgeted:0, actual:0} }
            return {...state, currentBudget:blankBudget}
        case "ADD_EXPENSE":
            return {...state, expenses:[...state.expenses, action.payload]}
        case "ADD_INCOME":
            return {...state, income:[...state.income, action.payload]}
        case "UPDATING_EXPENSE":
            return {...state, expenses:filterAndReplace(state.expenses, action.payload)}
        case "UPDATING_INCOME":
            return {...state, income:filterAndReplace(state.income, action.payload)}
        case "DELETE_EXPENSE":
            return {...state, expenses: filterDeletedTransaction(state.expenses, action.payload)}
        case "DELETE_INCOME":
            return {...state, income: filterDeletedTransaction(state.income, action.payload)}
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

const totalReturner = (transaction_array) => {
    // debugger
    if (transaction_array !== undefined ) {
        const budgeted_total = transaction_array.map(transaction => transaction.budgeted).reduce((previousValue, currentValue) => previousValue + currentValue)
        const actual_total = transaction_array.map(transaction => transaction.actual).reduce((previousValue, currentValue) => previousValue + currentValue)
        return {name:"Total", budgeted:budgeted_total, actual:actual_total}
    } else {
        return {name:"Total", budgeted:0, actual:0}
    }
}

export default budgetReducer