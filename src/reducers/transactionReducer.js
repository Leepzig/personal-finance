const initialState = {
    name:"",
    actual:"",
    budgeted:""
}

export const transactionReducer = (state=initialState, action) => {
    switch(action.type) {
        //change add to new
        case "ADD_EXPENSE":
            return {...state, expenses:action.payload}
        case "ADD_INCOME":
            return {...state, income:action.payload}
        case "DELETE_EXPENSE":
            return {...state, expenses:action.payload}
        case "DELETE_INCOME":
            return {...state, income:action.payload}
        default:
            return state
    }

}
export default transactionReducer