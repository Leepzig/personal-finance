import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createNewUser } from '../../actions/sessionAction';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';
import Errors from '../static/Errors';


const Signup = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)

    const [form, handleFormChange] = useForm({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        password_confirmation:""
    })
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(createNewUser(form, history))
    }

    useEffect(() => {
      if (loggedIn) {
        history.push('/')
      }
      return () => {
        dispatch({type:"CLEAR_ERRORS"})
      }
    }, [loggedIn, history, dispatch])
    return (
    <Container component="main" maxWidth="xs">
      <Errors />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={form.email}
              onChange={handleFormChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              value={form.first_name}
              onChange={handleFormChange}
              fullWidth
              name="first_name"
              label="First Name"
              type="text"
              id="name"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              value={form.last_name}
              onChange={handleFormChange}
              fullWidth
              name="last_name"
              label="Last Name"
              type="text"
              id="name"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              value={form.password}
              onChange={handleFormChange}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              value={form.password_confirmation}
              onChange={handleFormChange}
              fullWidth
              name="password_confirmation"
              label="Password confirmation"
              type="password"
              id="password_confirmation"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already Have an Account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    )
}

export default Signup
