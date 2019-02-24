import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/landing';
import Profile from './components/profile';
import Logout from './components/logout';
import Login from './components/login';
import Home from './components/home';
import Navbar from './components/navbar';
import Post from './components/postc';

class App extends Component {
  render() {
    return (
      <div>
         <Navbar />
         <Route path="/" component={LandingPage} exact />
         <Route path="/profile" component={Profile} exact />
         <Route path="/logout" render={Logout} exact />
         <Route path="/login" render={Login} exact />
         <Route path='/home' component={Home} exact />
      </div> 
    );
  }
}

export default App;
