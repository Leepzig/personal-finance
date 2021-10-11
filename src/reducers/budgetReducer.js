const initialState = {
    income:[], 
    expenses:[], 
    header:""
}

export const budgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_BUDGET":
            return {...state, income:action.payload.income, expenses: action.payload.expenses, header: action.payload.header}
        case "ADD_EXPENSE":
            return [...state, action.payload]
        case "ADD_INCOME":
            return [...state, action.payload]
        default:
            return state
    }

}