import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const TransactionErrors = () => {
    const errors = useSelector(state => state.errorsTransactionerrors)


    return (
        <div>
            <Typography color="red" variant="h6">{errors}</Typography>
        </div>
    )
}

export default TransactionErrors