const initialState = {
    errors:[],
    transactionErrors:""
}

const errorReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_ERRORS":
            return {...state, errors: action.payload}
        case "SET_TRANSACTION_ERRORS":
            return {...state, transactionErrors:action.payload}
        case "CLEAR_ERRORS":
            return initialState
        default:
            return state
    }
}
export default errorReducer