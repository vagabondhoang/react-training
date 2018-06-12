import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../HomePage/index';
import About from '../AboutPage/About';
import Users from '../UsersPage/Users';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default App;
