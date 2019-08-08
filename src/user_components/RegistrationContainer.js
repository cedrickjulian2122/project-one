import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import './css/registrationmodule.css';
import RegistrationLoadStateFunctions from './functions/RegistrationLoadStateFunctions';
import RegistrationVerifLoadStateFunctions from './functions/RegistrationVerifLoadStateFunctions';
import RegistrationSuccessLoadStateFunctions from './functions/RegistrationSuccessLoadStateFunctions';
import { BrowserRouter as Router, Route } from "react-router-dom"

function _originalPage() { 
    return <RegistrationLoadStateFunctions />; 
}

function _nextPage() {
    return <RegistrationVerifLoadStateFunctions />;
}

function _lastPage() {
    return <RegistrationSuccessLoadStateFunctions />;
}

class RegistrationContainer extends React.Component {
    
    render() {
        return(
            <Router>
                <div>
                    <Route path="/user/registration" exact component={_originalPage} />
                    <Route path="/user/registrationform2" exact component={_nextPage} />
                    <Route path="/user/registration/successful" exact component={_lastPage} />
                </div>
            </Router> 
        );
    }
}

export default RegistrationContainer;
