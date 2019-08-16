import React, { Component, Fragment } from 'react'
import { List, Avatar, Button, Skeleton, Row, Col, Divider, Form, Input, Icon, Modal, PageHeader, Typography } from 'antd';
import "antd/dist/antd.css";
import '../MainComponentModule.css';
import reqwest from 'reqwest';
import ButtonGroup from 'antd/lib/button/button-group';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
export default class ProjectListComponent extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }
    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        const { initLoading, loading, list, visible, confirmLoading, ModalText } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'right',
                        marginTop: '2%',
                        height: '90%',
                        lineHeight: '32px',
                        marginBottom: '2%',
                        marginRight: '2%',
                        fontSize: '13px'
                    }}
                >
                    <Button
                        className="btn-project-div"
                        onClick={this.onLoadMore}>load more</Button>
                </div>
            ) : null;
        return (
            <div className="gutter-box">
                <div className="main-div-projects">
                    <List
                        className="demo-loadmore-list main-list"
                        header={
                            <div>
                                <Button className="search-bar-btn" type="primary" icon="search" onClick={this.showModal}>
                                    Toogle search
                                            </Button>
                                <Modal
                                    title="Title"
                                    visible={visible}
                                    onOk={this.handleOk}
                                    confirmLoading={confirmLoading}
                                    onCancel={this.handleCancel}
                                >
                                    <p>{ModalText}</p>
                                </Modal>
                            </div>
                        }
                        bordered
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={item => (
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    className="list-item-position"
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                                <Divider
                                    orientation="right"
                                    className="divider-space">
                                    Options
                                            </Divider>
                                <List.Item
                                    className="action-option-space"
                                    actions={[
                                        <ButtonGroup>
                                            <Button key="list-loadmore-view" className="action-option-btn" type="primary" size={"small"}>View</Button>,
                                                        <Button key="list-loadmore-manage" className="action-option-btn" type="primary" size={"small"}>Manage</Button>
                                        </ButtonGroup>
                                    ]}
                                >
                                </List.Item>
                            </Skeleton>
                        )}
                    />
                </div>
            </div>
        )
    }
}
