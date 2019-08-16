import React, { Component } from 'react'
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import '../MainComponentModule.css';
import ProjectListComponent from '../components/ProjectListComponent';
import ProjectDetailsComponent from '../components/ProjectDetailsComponent';
import ProjectActivity from '../components/ProjectActivity';

export default class ProjectContainer extends Component {
    render() {
        return (
            <div className="gutter-example gutter-div-position">
                <Row gutter={16}>
                    <Col className="gutter-row" span={7}>
                        <ProjectListComponent />
                    </Col>
                    <Col className="gutter-row" span={17}>
                        <div className="gutter-box">
                            <ProjectDetailsComponent />
                        </div>
                        <div className="gutter-example div-gutter-margin">
                            <Row gutter={16}>
                                <Col className="gutter-row" span={13}>
                                    <div className="gutter-box">
                                        <ProjectActivity />
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={11}>
                                    <div className="gutter-box"></div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
