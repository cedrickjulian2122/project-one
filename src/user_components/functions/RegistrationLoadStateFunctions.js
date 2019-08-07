import React from 'react';
import 'antd/dist/antd.css';
import RegistrationComponents from './RegistrationComponents';

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
                <RegistrationComponents
                    showModal={this.showModal.bind(this)}
                    handleOk={this.handleOk.bind(this)}
                    handleCancel={this.handleCancel.bind(this)}
                    visible={this.state.visible}
                    currentStep={this.currentStep}
               />
            </div>
        );
    }
}

export default RegistrationLoadStateFunctions;
