import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import RegistrationContainer from '../RegistrationContainer';


class RegistrationLoadStateFunctions extends React.Component {
    render() {
        let {sample} = this.props;
        return (
            <div>
               <RegistrationContainer 
                sample={sample}
               />
            </div>
        );
    }
}

export default RegistrationLoadStateFunctions;
