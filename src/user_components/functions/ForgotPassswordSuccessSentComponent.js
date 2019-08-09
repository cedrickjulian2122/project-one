import React, { Component } from "react";
import { Result, Button } from "antd";
import "antd/dist/antd.css";

export default class ForgotPassswordSuccessSentComponent extends Component {
  render() {
    const { email, subTitle, title } = this.props.history.location.state;

    return (
      <div>
        <Result
          status="success"
          title={title}
          subTitle={subTitle}
          extra={[
            <Button type="primary" key="console" href="/user/login">
              Back to login page
            </Button>
          ]}
        />
      </div>
    );
  }
}
