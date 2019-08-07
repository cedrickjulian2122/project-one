import React, { Component } from 'react'
import RegistrationSuccessComponent from './RegistrationSuccessComponent';

export default class RegistrationSuccessLoadStateFunctions extends Component {
    state = {
        currentStep: 2
    }
    render() {
         return (
            <div>
                <RegistrationSuccessComponent
                    currentStep={this.state.currentStep}
                />
            </div>
        )
    }
}
