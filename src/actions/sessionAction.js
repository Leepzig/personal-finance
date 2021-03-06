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
        if (data.message) {
            dispatch({type:"SET_ERRORS", payload:[data.message]})
            dispatch({type:"FINISHED_REQUESTING"})
        } else {
            localStorage.setItem("jwt", data.jwt)
            dispatch({type:"CLEAR_ERRORS"})
            dispatch({type:"LOGIN", payload: data.user})
            dispatch({type:"FINISHED_REQUESTING"})
        }

    }
}
export const getCurrentUser = () => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            headers: {
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type":"applicaiton/json",
                "Accept":"application/json"
            }
        }
        const response = await fetch(`${BaseURL}/get-current-user`, options)
        const data  = await response.json()
        dispatch({type:"CURRENT_USER", payload:data})
        dispatch({type:"FINISHED_REQUESTING"})
    }
}

export const logout = (history) => {
    return dispatch => {
        dispatch({type:"REQUESTING"})
        dispatch({type:"LOGOUT"})
        dispatch({type:"CLEAR_BUDGETS"})
        localStorage.clear()
        dispatch({type:"FINISHED_REQUESTING"})
        history.push('/')
    }
}

export const createNewUser = (userForm, history) => {
    return async dispatch => {
        dispatch({type:"REQUESTING"})
        const options = {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(userForm)
        }
        const response = await fetch(`${BaseURL}/users`, options)
        const data = await response.json()
        if (data.errors) {
            dispatch({type:"SET_ERRORS", payload:data.errors})
        } else {
            localStorage.setItem("jwt", data.jwt)
            dispatch({type:"NEW_USER", payload:data.user})
            dispatch({type:"CLEAR_ERRORS"})
            history.push('/')
            dispatch({type:"FINISHED_REQUESTING"})
        }
    }
}