import React, { Component } from "react";
import history from "./functions/history";
import ForgotPasswordComponent from "./functions/ForgotPasswordComponent";
import ForgotPasswordChangeComponent from "./functions/ForgotPasswordChangeComponent";
import ForgotPasswordSuccessSentComponent from "./functions/ForgotPassswordSuccessSentComponent";
import { Router, Route } from "react-router-dom";

function renderFogotPassword() {
  return <ForgotPasswordComponent />;
}

function renderPasswordChange() {
  return <ForgotPasswordChangeComponent />;
}

function renderSuccessPage() {
  return <ForgotPasswordSuccessSentComponent />;
}

export default class ForgotPasswordContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            path="/user/forgotPassword"
            exact
            component={renderFogotPassword}
          />
          <Route
            path="/user/forgotPassword/forgotPasswordVerification"
            exact
            component={renderPasswordChange}
          />
          <Route
            path="/user/forgotPassword/emailSent"
            exact
            component={ForgotPasswordSuccessSentComponent}
          />
        </div>
      </Router>
    );
  }
}
