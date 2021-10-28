import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Errors = () => {
    const errors = useSelector(state => state.errors)
    return (
        <div>
            <Typography variant="h6">{errors}</Typography>
        </div>
    )
}

export default Errors
