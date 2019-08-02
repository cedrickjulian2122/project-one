import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import RegistrationContainer from '../RegistrationContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// const routes = [
//     {
//         path: "/user/registration",
//         exact: true,
//         main: () => <>
//     }
// ]





class RegistrationLoadStateFunctions extends React.Component {
    state = { 
        visible: false,
        currentStep: 0
    };

    showModal = () => {
        this.setState({ visible: true });
        console.log('test');
    };

    handleOk = e => {
        this.setState({ visible: false });
    };

    handleCancel = e => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
               <RegistrationContainer 
                    showModal={this.showModal.bind(this)}
                    handleOk={this.handleOk.bind(this)}
                    handleCancel={this.handleCancel.bind(this)}
                    visible={this.state.visible}
                    currentStep={this.state.currentStep}
               />
            </div>
        );
    }
}

export default RegistrationLoadStateFunctions;
