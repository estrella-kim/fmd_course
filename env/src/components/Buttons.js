import './Buttons.css';
import React from 'react';
import { Button } from 'antd';

export default class Buttons extends React.Component{
    render() {
        return (
            <div>
                <Button type="primary" shape="circle" loading>Loading</Button>
            </div>
        )
    }
}