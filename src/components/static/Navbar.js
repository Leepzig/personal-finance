import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const Navbar = () => {

    return (      
    <Box >
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit"><NavLink to="/">Home</NavLink></Button>
            <Button color="inherit"><NavLink to="/login">Login</NavLink></Button>
            <Button color="inherit"><NavLink to="/signup">Sign up</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box> 
    )
}

export default Navbar
