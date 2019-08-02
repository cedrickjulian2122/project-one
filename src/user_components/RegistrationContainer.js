import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import './css/registrationmodule.css';
import { Input, Icon, Divider, Button, Checkbox, Form, Steps, Modal } from 'antd';


const onChange = e => {
    console.log(e);
};

const { Step } = Steps;
class RegistrationContainer extends React.Component {

    render() {
        let { showModal, handleOk, handleCancel, visible, currentStep } = this.props;
        return (
            <div>
                <Fragment>
                    <div>
                        <Divider><code>{"</>"}</code></Divider>
                    </div>
                    <div className="div-steps">
                        <Steps size="small" current={currentStep}>
                            <Step title="Account Creation" />
                            <Step title="Verification" />
                            <Step title="Login" />
                        </Steps>
                    </div>
                    <div className="registration-parent-div">
                            <div>
                                <Form className="registration-child-div">
                                    <Input placeholder="Please input email address" allowClear onChange={onChange} className="input-fields"/>
                                    <Input placeholder="Verify email address" allowClear onChange={onChange} className="input-fields"/>
                                    <Input placeholder="Please input username" allowClear onChange={onChange} className="input-fields"/>
                                    <Input.Password placeholder="Please input password" allowClear onChange={onChange} className="input-fields"/>
                                    <Input.Password placeholder="Verify input password" allowClear onChange={onChange} className="input-fields"/>
                                    <Checkbox onChange={onChange} className="check-box-agreement">
                                    I agree to the license 
                                    </Checkbox>
                                    <a onClick={showModal}>terms and conditions</a>
                                    <br></br>
                                    <Button type="primary" className="register-button">Register</Button>
                                </Form>
                            </div>
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
            </div>
        );
    }
}

export default RegistrationContainer;
