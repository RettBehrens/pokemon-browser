import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Pokedex from './Pokedex';
import Pokedetails from './Pokedetails';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/:id" component={Pokedetails} />
      </Switch>
    </div>
  </Router>
);

export default App;
