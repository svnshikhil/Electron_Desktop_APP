import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'

// Routes
import MainFrame from './views/MainFrame/'


export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={MainFrame} />
      <Route path="home" name="MainFrame" component={MainFrame} />
    </Route>
  </Router>
);
