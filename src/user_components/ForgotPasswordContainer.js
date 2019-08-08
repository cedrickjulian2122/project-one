import React, { Component } from 'react'
import ForgotPasswordComponent from './functions/ForgotPasswordComponent';
import ForgotPasswordChangeComponent from './functions/ForgotPasswordChangeComponent';
import ForgotPasswordSuccessSentComponent from './functions/ForgotPassswordSuccessSentComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

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
            <Router>
                <div>
                    <Route path="/user/forgotPassword" exact component={renderFogotPassword} />
                    <Route path="/user/forgotPassword/forgotPasswordVerification" exact component={renderPasswordChange} />                   
                    <Route path="/user/forgotPassword/emailSent" exact component={renderSuccessPage} />
                </div>
            </Router> 
        )
    }
}
