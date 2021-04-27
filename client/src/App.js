import './App.css';
import { Router } from '@reach/router'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import Training from './views/Training'
import UserProfile from './views/UserProfile'
import Edit from './views/Edit'
import Availability from './views/Availability'

function App() {
  return (
    <div className="App">
      <Router>
        <UserRegister path="/register"/>
        <UserLogin path="/login"/>
        <Training path="/training/:id" />
        <UserProfile path="/profile" />
        <Edit path="/edit/:id" />
        <Availability path="/availability/:id" />
      </Router>
    </div>
  );
}

export default App;