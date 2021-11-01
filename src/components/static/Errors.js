import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const TransactionErrors = () => {
    const errors = useSelector(state => state.errors.errors)

    return (
        <div>
            {errors.map((error, index )=> <Typography key={index} color="red" variant="h6">{error}</Typography>)}
        </div>
    )
}

export default TransactionErrors
