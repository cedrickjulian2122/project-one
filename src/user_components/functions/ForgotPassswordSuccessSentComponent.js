import React, { Component } from 'react'
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"



export default class ForgotPassswordSuccessSentComponent extends Component {
    state = {
        email: "example@gmail.com",
        subTitle: "",
        title: "Successful, Please check your email address",
    }

    
    // componentWillMount() {
    //     fetch(this.props.location.state);
    // }

    // componentDidMount(_email, _subTitle, _title) {
    //     this.setState({
    //         email: _email,
    //         subTitle: _subTitle,
    //         title: _title
    //     })
    // }

    // function populateStateValue() {

    // }
    render() {
        const state = this.props.location.state.email;
        console.log(state);
        const newEmail = state.email;
        const newSubTitle = state.subTitle;
        const newTitle = state.title;

        this.setState({
            email: newEmail,
            subTitle: newSubTitle,
            title: newTitle
        })

        return (
            <div>
                <Result
                    status="success"
                    title={this.state.title}
                    subTitle={this.state.subTitle}
                    extra={[
                        <Button type="primary" key="console" href="/user/login">
                            Back to login page
                        </Button>
                    ]}
                />
            </div>
        )
    }
}
