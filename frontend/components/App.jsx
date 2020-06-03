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
    <Route path="/" component={NavbarContainer} />
    <Route exact path="/" component={SplashContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;