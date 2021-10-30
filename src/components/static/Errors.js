import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Errors = () => {
    const errors = useSelector(state => state.errors)


    return (
        <div>
            {errors.map((error, index )=> <Typography key={index} color="red" variant="h6">{error}</Typography>)}
        </div>
    )
}

export default Errors
