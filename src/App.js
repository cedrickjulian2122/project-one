import React, { Component } from 'react';
// import Login from './user_components/LoginContainer';
import LoginLoadStateFunctions from './user_components/functions/LoginLoadStateFunctions';
import RegistrationLoadStateFunctions from './user_components/functions/RegistrationLoadStateFunctions';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
     return (
       <div className="App">
         <Router>
           <Switch>
             <Route path="/user/login" exact strict render={() => (<LoginLoadStateFunctions />)} />;
            <Route path="/user/registration" exact strict render={() => (<RegistrationLoadStateFunctions />)} />;
          </Switch>
         </Router>
      </div> 
      
    );
  }
}
  
export default App;
