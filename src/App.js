import Home from "./components/static/Home"
import Navbar from "./components/static/Navbar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./components/sessions/Login";
import Signup from "./components/sessions/Signup";

function App() {
  return (
      <Router>
        <Navbar />
        <Switch >
          <Route exact path="/" component={ Home }/>
          <Route exact path="/login" component={ Login }/>
          <Route exact path="/signup" component={ Signup }/>
        </Switch >
      </Router>
  );
}

export default App;
