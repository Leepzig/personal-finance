
export const setErrors = (errors) => {
    return dispatch => {
        dispatch({type:"SET_ERRORS", payload: errors})
    }
}

export const setTransactionErrors = (errors) => {
    return dispatch => {
        dispatch({type:"SET_TRANSACTION_ERRORS", payload: errors})
    }
}

export const clearErrors = () => {
    return dispatch => {
        dispatch({type:"CLEAR_ERRORS"})
    }
}