import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import '../css/registrationmodule.css';
import { Input, Divider, Button, Checkbox, Form, Steps, Modal } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const onChange = e => {
    console.log(e);
};
const { Step } = Steps;
class RegistrationComponents extends React.Component {
  render() {
        let { showModal, handleOk, handleCancel, visible, currentStep } = this.props;
        
        return(
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
                <div className="registration-parent-div">
                    <Form className="registration-child-div">
                        <Input placeholder="Please input email address" allowClear onChange={onChange} className="input-fields" />
                        <Input placeholder="Verify email address" allowClear onChange={onChange} className="input-fields" />
                        <Input placeholder="Please input username" allowClear onChange={onChange} className="input-fields" />
                        <Input.Password placeholder="Please input password" allowClear onChange={onChange} className="input-fields" />
                        <Input.Password placeholder="Verify input password" allowClear onChange={onChange} className="input-fields" />
                        <Checkbox onChange={onChange} className="check-box-agreement">I agree to the license</Checkbox>
                        <a onClick={showModal}>terms and conditions</a>
                        <br></br>   
                        <Link to={{
                            pathname: "/user/registrationform2",
                            state: {
                                currentStep: 1, 
                                email: "example@gmail.com" 
                            } 
                            }}>
                            <Button type="primary" className="register-button">Next</Button>
                        </Link>                      
                    </Form> 
                </div>
                <Modal
                    title="Terms and Conditions"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>1. Sample content of terms and conditions</p>
                </Modal>
            </Fragment>
        );
    }
}

export default RegistrationComponents;