
import { useState } from 'react'

export const useForm = (initalState) => {

    const [state, setState] = useState(initalState)

    const handleChange = e => {
        setState(
            {...state,
            [e.target.name]:e.target.value}
        )
    }

    const resetForm = () => {
        setState(initalState)
    }

    return [state, handleChange, resetForm]
}