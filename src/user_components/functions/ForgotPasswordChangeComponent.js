import React, { Component, Fragment } from 'react'
import { Input, Button, Steps, Divider, Result } from 'antd';
import 'antd/dist/antd.css';
import '../css/registrationmodule.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const { Step } = Steps;
const onChange = {

}
export default class ForgotPasswordChangeComponent extends Component {
    state = {
        email: "example@email.com",
        subTitle: `email was sent to this email address example@email.com`,
        title: "Successful, Please check your email address for"
    };
    render() {
        return (
            <Fragment>
                <Divider>
                    <code>
                        {"</>"}
                    </code>
                </Divider>
                <div>
                    <div className="div-steps inline">
                        <Result
                            status="info"
                        />
                        <Steps direction="vertical" current={1}>
                            <Step title="Verification" description="Please input your email." />
                            <Step title="Reset" description="Kindly reset your password" />
                        </Steps>
                    </div>
                    <div className="inline">
                        <Divider type="vertical" className="divider"></Divider>
                    </div>
                    <div className="inline">
                        <Fragment>
                            <div className="inline-form">
                                <h2 className="result-title-text">
                                    Please follow steps below to retrieve your account!
                                    </h2>
                            </div>
                            <div className="inline-form">
                                <Input.Password placeholder="Please input your new password" allowClear onChange={onChange} className="fogot-password-inputs" />
                                <Input.Password placeholder="Re-enter password" allowClear onChange={onChange} className="fogot-password-inputs" />
                                <br></br>
                                <Link
                                    to={{
                                        pathname: "/user/forgotPassword/emailSent",
                                        state: {
                                            email: this.state.email,
                                            title: this.state.title,
                                            subTitle: this.state.subTitle
                                        }
                                    }}>
                                    <Button type="primary" className="send-button">Send</Button>
                                </Link>
                            </div>
                        </Fragment>
                    </div>
                </div>
            </Fragment>
        )
    }
}
