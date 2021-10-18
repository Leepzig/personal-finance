const initialState = {
    loggedIn:false,
    currentUser:null
}

export const sessionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, currentUser:action.payload.user, loggedIn:true}
        case "LOGOUT":
            return {...state, currentUser:null, loggedIn:false}
        default:
            return state
    }
}