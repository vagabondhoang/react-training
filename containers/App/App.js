import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../HomePage/Home';
import About from '../AboutPage/About';
<<<<<<< HEAD:containers/App/App.js
import Users from '../UsersPage/Users';
=======
>>>>>>> using reselect with redux:containers/App/App.js

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
