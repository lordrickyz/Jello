import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
// import { mapDispatchToProps } from '../components/session/login_container'

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

// <AuthRoute path="" component={} />

const Auth = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? <Component {...props} /> : <Redirect to="/boards" />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />

);

const Boarded = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to="/boards" /> : <Component {...props} />
    )}
  />

);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const BoardedRoute = withRouter(connect(mapStateToProps)(Boarded));