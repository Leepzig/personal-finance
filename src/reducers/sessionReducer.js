const initialState = {
    loggedIn:false,
    currentUser:null
}

const sessionReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, currentUser:action.payload.user, loggedIn:true}
        case "LOGOUT":
            return {...state, currentUser:null, loggedIn:false}
        default:
            return state
    }
}
export default sessionReducer