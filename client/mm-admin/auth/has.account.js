import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Validator from './auth.validator';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Validator.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute
