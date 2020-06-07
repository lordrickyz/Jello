import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavbarContainer from "./navbar/navbar_container";
import ConnectedSplash from './splash/splash_container';
import SignupFormContainer from './session/signup_container';
import LoginFormContainer from './session/login_container';
import { AuthRoute } from '../util/route_utils';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={NavbarContainer} />
    </Switch>

    <Route exact path="/" component={ConnectedSplash} />
  </div>
);

export default App;