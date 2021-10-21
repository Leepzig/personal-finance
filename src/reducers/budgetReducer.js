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

export default budgetReducer