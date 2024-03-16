import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from './pages/signupPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/loginPage';
import SchedulePage from './pages/SchedulePage'
import TestPage from './pages/TestPage';
import './pages/loginPage'

function App() {

  return (
    <>
        <Router>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginPage}/>
              <Route path="/signup" component={SignupPage} />
              <Route path="/schedule" component={SchedulePage} />
              <Route path="/test" component={TestPage} />              
          </Switch>
        </Router>
    </>
  )
}

export default App
