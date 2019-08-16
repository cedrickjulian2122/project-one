import React, { Component, Fragment } from "react";
import { Input, Button, Steps, Divider, Result } from "antd";
import "antd/dist/antd.css";
import "../css/registrationmodule.css";
import { Link } from "react-router-dom";

const onChange = e => {
  console.log(e);
};

const { Step } = Steps;
export default class ForgotPasswordComponent extends Component {
  state = {
    email: "example@email.com",
    subTitle: `email was sent to this email address example@email.com`,
    title: "Successful, Please check your email address"
  };

  render() {
    return (
      <Fragment>
        <Divider>
          <code>{"</>"}</code>
        </Divider>
        <div>
          <div className="div-steps inline">
            <Result status="info" />
            <Steps direction="vertical" current={0}>
              <Step
                title="Verification"
                description="Please input your email."
              />
              <Step title="Reset" description="Kindly reset your password" />
            </Steps>
          </div>
          <div className="inline">
            <Divider type="vertical" className="divider" />
          </div>
          <div className="inline">
            <Fragment>
              <div className="inline-form">
                <h2 className="result-title-text">
                  Please follow steps below to retrieve your account!
                </h2>
              </div>
              <div className="inline-form">
                <Input
                  placeholder="Please input your email address"
                  allowClear
                  onChange={onChange}
                  className="fogot-password-inputs"
                />
                <br />
                <Link
                  to={{
                    pathname: "/user/forgotPassword/emailSent",
                    state: {
                      email: this.state.email,
                      subTitle: this.state.subTitle,
                      title: this.state.title
                    }
                  }}
                >
                  <Button type="primary" className="send-button">
                    Send
                  </Button>
                </Link>
              </div>
            </Fragment>
          </div>
        </div>
      </Fragment>
    );
  }
}
