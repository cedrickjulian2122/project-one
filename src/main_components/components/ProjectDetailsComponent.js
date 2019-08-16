import React, { Component } from 'react'
import { Descriptions, Badge, PageHeader, Divider } from 'antd';
import "antd/dist/antd.css";
import '../MainComponentModule.css';



export default class ProjectDetailsComponent extends Component {

    render() {
        return (
            <div>
                <Divider orientation="left" className="divider-layout">
                    <PageHeader title="General Information" subTitle="Information About the Project" />
                </Divider>
                <Descriptions size={"small"} className="description-size">
                    <Descriptions.Item label="Project name">Project XYZ</Descriptions.Item>
                    <Descriptions.Item label="Client">Confidential</Descriptions.Item>
                    <Descriptions.Item label="Project Manager">Pedro Penduko</Descriptions.Item>
                    <Descriptions.Item label="Target production date">07/08/2019</Descriptions.Item>
                    <Descriptions.Item label="Current Phase">Development Phase</Descriptions.Item>
                    <Descriptions.Item label="Status"><Badge status="success" text="On time" /></Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}
