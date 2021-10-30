import React, { useEffect} from 'react'
import { useForm } from '../../hooks/useForm'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/sessionAction';
import { useHistory } from 'react-router-dom';
import Errors from "../static/Errors"

const Login = () => {
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const [form, handleFormChange] = useForm({
        email:"",
        password:"",
    })
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
      if (loggedIn) {
        history.push('/')
      }
      return () => {
        dispatch({type:"CLEAR_ERRORS"})
      }
    }, [loggedIn, history, dispatch])

    const handleSubmit = e => {
        e.preventDefault()
        debugger
        dispatch(login(form))
    }

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
            Sign In
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
              value={form.password}
              onChange={handleFormChange}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't Have an Account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    )
}

export default Login
