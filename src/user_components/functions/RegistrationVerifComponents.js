import React, { Component, Fragment } from 'react'
import '../css/registrationmodule.css';
import 'antd/dist/antd.css';
import { Divider, Button,  Input, Steps, Result } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const { Step } = Steps;

export default class RegistrationVerifComponents extends Component {
    render() {
        let { currentStep, email } = this.props;
        return (
            <Fragment>
                <Divider>
                    <code>
                        {"</>"}
                    </code>
                </Divider>
                <div className="div-steps">
                    <Steps current={currentStep}>
                        <Step title="Fill up form" description="Be legit" />
                        <Step title="Verification" description="It`s just verification!" />
                        <Step title="Login" description="You`re good to go!" />
                    </Steps>
                </div>
                <div>
                    <Result
                        status="info"
                        title="Successfully Sent Verification Code!"
                        subTitle={`Please input verification sent to this email address ${email}`}
                        extra={[
                            <Input className="verification-code-input" size="large" placeholder="Verfication code"/>,
                            <br></br>,
                            <Link to = {{
                                pathname: "/user/registration"
                            }}>
                                <Button>
                                    Previous
                                </Button>
                            </Link>,
                            <Link to = {{
                                pathname: "/user/registration/successful"
                            }}>
                            <Button type="primary">Verify</Button>
                            </Link>
                        ]}
                    />
                </div>
            </Fragment>
        )
    }
}
