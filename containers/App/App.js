import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../HomePage/Home';
import About from '../AboutPage/About';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
