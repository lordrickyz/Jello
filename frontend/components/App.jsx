import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavbarContainer from "./navbar/navbar_container";
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_container';
import LoginFormContainer from './session/login_container';
import BoardIndexContainer from './boards/board_index_container'
import BoardShowContainer from './boards/board_show_container'
import { AuthRoute, ProtectedRoute, BoardedRoute } from '../util/route_utils';
import Modal from './modals/modal';


const App = () => (
  <div>
   <Modal />

    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <AuthRoute path="/" component={NavbarContainer} /> */}
      <ProtectedRoute path="/boards/:id" component={BoardShowContainer} />
    </Switch>
  </div>
);

export default App;