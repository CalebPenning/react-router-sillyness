import './App.css'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/login">Login</NavLink>
      <NavLink exact to="/signup">Signup</NavLink>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
