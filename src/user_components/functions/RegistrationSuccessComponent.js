import React, { Component, Fragment } from 'react'
import '../css/registrationmodule.css';
import 'antd/dist/antd.css';
import { Divider, Steps, Result, Button } from 'antd';

const { Step } = Steps;

export default class RegistrationSuccessComponent extends Component {
    render() {
        let { currentStep } = this.props;
        return (
            <Fragment>
                <Divider>
                    <code>{"</>"}</code>
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
                        status="success"
                        title="Congratulations, you are now ready to go!"
                        subTitle="Proceed with the login to continue!"
                        extra={[
                            <Button type="primary" href="/user/login">go to login</Button>
                        ]}
                    />
                </div>
            </Fragment>
        )
    }
}
