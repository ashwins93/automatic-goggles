import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <div>App Page</div>} />
        <Route exact path="/dog" render={() => <div>Dog Page</div>} />
      </Switch>
    </div>
  </Router>
);

export default App;
