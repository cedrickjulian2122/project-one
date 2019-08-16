import React, { Component } from 'react'
import "antd/dist/antd.css";
import '../MainComponentModule.css';
import { Descriptions, Badge, PageHeader, Divider, Timeline } from 'antd';

export default class ProjectActivity extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left" className="divider-layout">
                    <PageHeader title="Recent Activtiy" subTitle="whats happening?" />
                </Divider>
                <Timeline className="timeline-margin">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
        )
    }
}
