const initialState = true

export const requestingReducer = (state=initialState, action) => {
    switch(action.type) {
        case "REQUESTING":
            return true
        case "FINISHED_REQUESTING":
            return false
        default:
            return state
    }
}
