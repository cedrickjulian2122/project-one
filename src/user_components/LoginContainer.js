import React, { Fragment } from 'react';
import './css/loginmodule.css';
import 'antd/dist/antd.css';
import { Input, Icon, Divider, Button, Checkbox, Form } from 'antd';
import { tickRememberMeonChange, validate } from './functions/LoginFunctions';


class LoginContainer extends React.Component {
    render() {
        let { handleBlur, handlePasswordChange, handleSubmit, handleUsernameChange } = this.props;
        let {
            errors,
            isDisabled,
            username,
            password,
            touched } = this.props;

        console.log('user, pass', username, password);    
        errors = validate(username, password);
        isDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = field => {
            const hasError = errors[field];
            const shouldShow = touched[field];

            return hasError ? shouldShow : false;
        };

        
        return(
            <Fragment> 
            <div>
                <Divider><code>{"</>"}</code></Divider>
            </div>    
            <div id="Login">
                <Form onSubmit={handleSubmit} id="form_login">
                    <div className="field-layout">
                        <Input
                            className={shouldMarkError("username") ? "error" : ""}
                            onBlur={handleBlur}
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                            prefix={<Icon type="user" className="login-color" />}
                            rules = {[{required: true}]}
                        />
                    </div>
                    <div className="field-layout">
                        <Input.Password
                            className={shouldMarkError("password") ? "error" : ""}
                            onBlur={handleBlur}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="input password"
                            prefix={<Icon type="lock" className="login-color" />}
                            rules={[{ required: true, message: 'please input password' }]}
                        />
                    </div>     
                    <div className="field-layout inline">
                        <Checkbox onChange={tickRememberMeonChange}>Remember me?</Checkbox>
                        <a className="login-form-forgot" href="/">Forgot password</a>            
                    </div>
                    <div className="field-layout">
                        <Button disabled={isDisabled} type="primary">Login</Button>
                    </div>
                    <div className="field-layout">
                        <Divider>OR</Divider>
                        <Button type="primary" href="/user/registration">Sign me up</Button>
                    </div>
                </Form>
            </div>
            </Fragment>  
        );
    }
}

export default LoginContainer;
