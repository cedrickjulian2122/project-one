import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationLoadStateFunctions from './LoginLoadStateFunctions';


const routes = [
    {
        path: 'user/registration',
        exact: true,
        renderContent: () => <RegistrationLoadStateFunctions />
    }
]



class RegistrationLoadSiteRouter extends React.Component {
    render() {
        return(
            <div>
            </div>    
        );
    }
}

export default RegistrationLoadSiteRouter;