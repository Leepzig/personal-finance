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