import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'

// Routes
import HomePage from './views/HomePage/'
import LoginPage from './views/LoginPage'


export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={HomePage} />
      <Route path="home" name="Home" component={HomePage} />
      <Route path="login" name="Login" component={LoginPage} />
    </Route>
  </Router>
);
