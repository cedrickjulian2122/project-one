import React from 'react';
import LoginContainer from '../LoginContainer';
import { validate } from './LoginFunctions'

class LoginLoadStateFunctions extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",

            touched: {
                username: false,
                password: false
            }
        };
    }

    handleUsernameChange = evt => {
        this.setState({ username: evt.target.value });
    };

    handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
    };

    handleBlur = field => evt => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };


    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        const { username, password } = this.state;
        alert(`Signed up with username: ${username} password: ${password}`);
    };

    canBeSubmitted() {
        const errors = validate(this.state.username, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }
    render() {
        let { handleBlur, handleSubmit, errors, isDisabled } = this.props;
        return (
            <div>
                <LoginContainer
                    handleBlur={handleBlur}
                    handlePasswordChange={this.handlePasswordChange.bind(this)}
                    handleSubmit={handleSubmit}
                    handleUsernameChange={this.handleUsernameChange.bind(this)}
                    errors={errors}
                    isDisabled={isDisabled}
                    touched={this.state.touched}
                    username={this.state.username}
                    password={this.state.password}
                />
            </div>
        );
    }
}

export default LoginLoadStateFunctions;

