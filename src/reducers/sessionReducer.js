const initialState = {
    loggedIn:false,
    currentUser:null
}

const sessionReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, currentUser:action.payload.user, loggedIn:true}
        case "CURRENT_USER":
            return {...state, currentUser:action.payload, loggedIn: action.payload.id ? true :false}
        case "NEW_USER":
            return {...state, currentUser:action.payload, loggedIn:true}
        case "LOGOUT":
            return {...state, currentUser:null, loggedIn:false}
        default:
            return state
    }
}
export default sessionReducer