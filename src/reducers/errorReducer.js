const initialState = {
    errors:[]
}

const errorReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_ERRORS":
            return {...state, errors: action.payload}
        case "CLEAR_ERRORS":
            return initialState
        default:
            return state
    }
}
export default errorReducer