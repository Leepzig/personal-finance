const initialState = []

const errorReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_ERRORS":
            return action.payload
        case "CLEAR_ERRORS":
            return initialState
        default:
            return state
    }
}
export default errorReducer