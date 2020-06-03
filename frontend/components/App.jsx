import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import NavbarContainer from "./navbar/navbar_container";
import SplashContainer from "./splash/splash_container"
import SignupFormContainer from './session/signup_container';
import LoginFormContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
//Add ProtectedRoute for dashboard main

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={NavbarContainer} />
    </Switch>

    <Route exact path="/" component={SplashContainer} />
  </div>
);

export default App;