import React from 'react';
import './index.css';
import { Home } from './components/Home/Home';
import { Event } from './components/Event/Event';
import { Artist } from './components/Artist/Artist';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/artist/:id" component={Artist} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default App;
