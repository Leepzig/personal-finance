import Home from "./components/static/Home"
import Navbar from "./components/static/Navbar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./components/sessions/Login";
import Signup from "./components/sessions/Signup";
import { useEffect } from 'react'
import { getCurrentUser } from './actions/sessionAction'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from "./components/budgets/Dashboard";
import Errors from "./components/static/Errors";

function App() {

  const requesting = useSelector(state => state.requesting)
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('jwt')){
      dispatch(getCurrentUser())
    }
},[dispatch])

  // if (requesting) return <h1>Loading...</h1>

  return (
      <Router>
        <Navbar />
        <Switch >
          <Route exact path="/" component={ Home }/>
          <Route exact path="/budgets" component={ Dashboard }/>
          <Route exact path="/login" component={ Login }/>
          <Route exact path="/signup" component={ Signup }/>
          {/* TODO add fail safe route */}
        </Switch >
      </Router>
  );
}

export default App;
