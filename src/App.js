import React, { Component } from 'react';
import LoginLoadStateFunctions from './user_components/functions/LoginLoadStateFunctions';
import RegistrationContainer from './user_components/RegistrationContainer';
import ForgotPasswordContainer from './user_components/ForgotPasswordContainer';
import MainForm from './main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Url } from '../src/user_components/router/AppSiteUrl';
import ProjectContainer from './main_components/container/ProjectContainer';

const loginUrl = Url.data.login_path;
const registrationUrl = Url.data.registration_path;
const forgotPasswordUrl = Url.data.forgotPassword_path;
const forgotPasswordResetUrl = Url.data.forgotPasswordReset_path;
class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={loginUrl} exact strict render={() => (<LoginLoadStateFunctions />)} />;
            <Route path={registrationUrl} exact strict render={() => (<RegistrationContainer />)} />;
            <Route path={forgotPasswordUrl} exact strict render={() => (<ForgotPasswordContainer />)} />;
            <Route path={forgotPasswordResetUrl} exact strict render={() => (<ForgotPasswordContainer />)} />;
            <Route path='/main' exact strict render={() => (<MainForm />)} />;
            <Route path='/main/project' exact strict render={() => (<ProjectContainer />)} />;
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
