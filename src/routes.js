import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import MainPage from './components/mainpage';

export default (
  <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={MainPage} />
  </Switch>
);
