import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session/signup_container';
import LoginFormContainer from './session/login_container';

const App = () => (
  <div>
    <header>
      <h1>Hello Jello</h1>
      <GreetingContainer/>
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;