import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Fallback from './routes/Fallback';

import withAuth from './managers/withAuth';

function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/dashboard" component={withAuth(Dashboard)} />
            <Route component={Fallback} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
