import React, { Component, Fragment } from 'react'
import { Menu, Icon, Avatar } from 'antd';
import "antd/dist/antd.css";
import './main.css';

const { SubMenu } = Menu;
export default class main extends Component {
    state = {
        current: 'proj',
    };
    render() {
        return (
            <Fragment>
                <div>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="home" className="main-icon-style">
                            <code>{"</>"}</code>
                        </Menu.Item>
                        <Menu.Item key="dash">DASHBOARD</Menu.Item>
                        <Menu.Item key="proj">PROJECT</Menu.Item>
                        <Menu.Item key="team">TEAM</Menu.Item>
                        <Menu.Item key="task">TASK</Menu.Item>
                        <Menu.Item className="user-badge-style">
                            <div>
                                <Avatar>USER</Avatar>
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
            </Fragment >

        )
    }
}
