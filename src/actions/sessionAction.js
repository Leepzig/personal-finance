import { BaseURL } from "../globals"

export const login = (details) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(details)
        }
        const response = await fetch(`${BaseURL}/login`, options)
        const data = await response.json()

        localStorage.setItem("jwt", data.jwt)
        dispatch({type:"LOGIN", payload: data})
        dispatch({type:"FINISHED_REQUESTING"})
        //TODO a redirect will be needed here
        console.log("DO A REDIRECT!!!")
        console.log(data)
    }
}
export const getCurrentUser = () => {
    console.log('he;llo')

    return async dispatch => {

        dispatch({type:"REQUESTING"})
        console.log("getCurrentUser is running!")
        debugger
        const options = {
            headers: {"Authorization":`Bearer ${localStorage.getItem('jwt')}`}
        }
        const response = await fetch(`${BaseURL}/get-current-user`, options)
        const data  = await response.json()
        console.log(data)
        debugger
        dispatch({type:"CURRENT_USER", payload:data})
        dispatch({type:"FINISHED_REQUESTING"})

    }
}

export const logout = (details) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        dispatch({type:"LOGOUT"})
        localStorage.clear()

        dispatch({type:"FINSIHED_REQUESTING"})
        console.log("USER SHOULD BE LOGGED OUT NOW")
        //TODO a redirect!
    }
}