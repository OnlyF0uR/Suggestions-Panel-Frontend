import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import Fallback from './views/Fallback';

import { Stats, Status, SuggestionsOverview, SuggestionsSettings } from './views/discordbots/Dashboard';

import withAuth, { DiscordAuth } from './managers/Auth';

function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            {/* Main router */}
            <Route exact path="/" component={Home} />

            {/* Discordbot routers*/}
            <Route exact path="/discordbots" component={DiscordAuth} />
            <Route exact path="/discordbots/stats" component={withAuth(Stats)} />
            <Route exact path="/discordbots/status" component={withAuth(Status)} />

            {/* Suggestions routers */}
            <Route exact path="/discordbots/suggestions" render={() => (<Redirect to="/discordbots/dashboard/suggestions/overview" />)} />}
            <Route exact path="/discordbots/suggestions/overview" component={withAuth(SuggestionsOverview)} />
            <Route exact path="/discordbots/suggestions/settings" component={withAuth(SuggestionsSettings)} />

            {/* Fallback router */}
            <Route component={Fallback} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
