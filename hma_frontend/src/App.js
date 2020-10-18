import React from 'react';
import './App.css';
import Login from './Auth/Login.js'
import SignUp from './Auth/SignUp.js'
import EditProfile from './Auth/EditProfile.js'
import MainPage from './MainPage/MainPage.js'
import CreateWishlist from './MainPage/CreateWishlist.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav className="Home-Nav-Bar">
          <ul className="Home-Nav-Bar-List">
              <Link className="Nav-Link"
                to="/">Main Page</Link>
              <Link className="Nav-Link"
              to="/signup">Sign Up</Link>
              <Link 
              className="Nav-Link"
              to="/login">Login</Link>
              <Link 
              className="Nav-Link"
              to="/profile">Profile</Link>
              <Link 
              className="Nav-Link"
              to="/createwishlist">Create Wishlist</Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile">
            <EditProfile />
          </Route>
          <Route path="/createwishlist">
            <CreateWishlist />
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
