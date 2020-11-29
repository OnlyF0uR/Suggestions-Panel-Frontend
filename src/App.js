import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Login from './routes/Login';
import { Stats, Status, SuggestionsOverview, SuggestionsSettings } from './routes/Dashboard';
import Fallback from './routes/Fallback';

import withAuth from './managers/withAuth';

function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />

            {/* Dashboard routes*/}
            <Route exact path="/dashboard" render={() => (<Redirect to="/dashboard/stats" />)} />}
            <Route exact path="/dashboard/stats" component={withAuth(Stats)} />
            <Route exact path="/dashboard/status" component={withAuth(Status)} />
            <Route exact path="/dashboard/suggestions" render={() => (<Redirect to="/dashboard/suggestions/overview" />)} />}
            <Route exact path="/dashboard/suggestions/overview" component={withAuth(SuggestionsOverview)} />
            <Route exact path="/dashboard/suggestions/settings" component={withAuth(SuggestionsSettings)} />

            <Route component={Fallback} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
