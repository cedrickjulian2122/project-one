import React, { Component } from 'react';
// import Login from './user_components/LoginContainer';
import LoginLoadStateFunctions from './user_components/functions/LoginLoadStateFunctions';
import RegistrationContainer from './user_components/RegistrationContainer';
import ForgotPasswordContainer from './user_components/ForgotPasswordContainer';
import ForgotPasswordChangeComponent from '../src/user_components/functions/ForgotPasswordChangeComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
     return (
       <div className="App">
         <Router>
           <Switch>
              <Route path="/user/login" exact strict render={() => (<LoginLoadStateFunctions />)} />;
              <Route path="/user/registration" exact strict render={() => (<RegistrationContainer />)} />;
              <Route path="/user/forgotPassword" exact strict render={() => (<ForgotPasswordContainer />)} />;
              <Route path="/user/forgotPasswordChangeTest" exact strict render={() => (<ForgotPasswordChangeComponent />)} />;
          </Switch>
         </Router>
      </div> 
      
    );
  }
}
  
export default App;
