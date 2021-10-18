const initialState = []

export const errorReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ERRORS":
            return action.payload
        case "CLEAR_ERRORS":
            return initialState
        default:
            return state
    }
}