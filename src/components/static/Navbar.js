import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/sessionAction';


const Navbar = () => {
  const dispatch = useDispatch()
  // const currentUser = useSelector(state => state.session.currentUser)
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const handleLogout = e => {
    //Do I need to pass details to logout? pass the current user in?
    dispatch(logout())
  }

    if (loggedIn) { return (      
    <Box >
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit"><NavLink to="/">Home</NavLink></Button>
            <Button color="inherit"><NavLink to="/budgets">Budgets</NavLink></Button>
            <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box> 
    ) }
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
