import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
        </ul>
            
     
    )
}

export default Navbar
