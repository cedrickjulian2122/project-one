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
            path="/user/forgotPassword/Reset"
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
