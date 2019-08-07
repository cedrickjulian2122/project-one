import React from 'react';
import RegistrationVerifComponents from './RegistrationVerifComponents';

class RegistrationContainer extends React.Component {

    state = {
        currentStep: 1,
        email: "exampleuser@email.com"
    };
    render() {
        return(
            <div>
                <RegistrationVerifComponents 
                    currentStep={this.state.currentStep}
                    email={this.state.email}
                />
            </div>
        );
    }
}

export default RegistrationContainer;