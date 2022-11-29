import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import Login from "./containers/login";
import GoogleLogin from "./containers/google-login"
import CreateAccount from "./containers/create-account"

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/google-login" component={GoogleLogin} />
        <Route exact path="/create-account" component={CreateAccount} />
      </Switch>
    </Router>
  );
}

export default Routes;