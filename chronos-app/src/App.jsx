import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import SchedulePage from './pages/SchedulePage'
import Modal from './components/Modal';


function App() {
  
  return (
    <>
        <Modal />
        <Router>
          <Switch> 
              <Route exact path="/" component={LandingPage} />
              <Route path="/schedule" component={SchedulePage} />            
          </Switch>
        </Router>

        
    </>
  )
}

export default App
