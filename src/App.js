import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegistrationPage from 'pages/Register';
import ResetPasswordPage from 'pages/ResetPassword';
import Dashboard from 'pages/Dashboard';
import './custom.scss';
import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/resetPassword" component={ResetPasswordPage} />
          <Route path="/admin" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
