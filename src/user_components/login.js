import React from 'react';
import './css/loginmodule.css';
import 'antd/dist/antd.css';
import { Input, Icon, Divider, Button, Checkbox, Form } from 'antd';


const inputUsernameOnchange = e => {
    console.log(e);
}
function tickRememberMeonChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function handleSubmitEvent(username, password) {
    const errors = [];

    if (username.length === 0) {
        errors.push("username can`t be empty!")
    } else if (password.length === 0) {
        errors.push("password can`t be empty!")
    }

    return errors;
}

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",

            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;

        const errors = handleSubmitEvent(username, password);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }

        // submit the data...
    }
    render() {
        const { errors } = this.state;
        return(
            <div id="Login">
                <Form onSubmit={this.handleSubmit} id="form_login">
                    {
                        errors.map(error => ())
                    }
                    <div className="field-layout">
                        <Input
                            value={this.state.name}
                            onChange={evt => this.setState({ name: evt.target.value })}
                            placeholder="Enter your username"
                            prefix={<Icon type="user" className="login-color" />}
                            rules = {[{required: true}]}
                            allowClear onChange={inputUsernameOnchange}
                        />
                    </div>
                    <div className="field-layout">
                        <Input.Password
                            value={this.state.name}
                            onChange={evt => this.setState({ name: evt.target.value })}
                            placeholder="input password"
                            prefix={<Icon type="lock" className="login-color" />}
                            rules={[{ required: true }]}
                        />
                    </div>    
                        
                    <div className="field-layout">
                        <Form layout="inline">
                            <Checkbox onChange={tickRememberMeonChange}>Remember me?</Checkbox>
                            <a className="login-form-forgot" href="">Forgot password</a>
                        </Form>
                    </div>
                    <div className="field-layout">
                        <Button type="primary">Login</Button>
                    </div>
                    <div className="field-layout">
                        <Divider>OR</Divider>
                        <Button type="primary">Sign me up</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Login;
