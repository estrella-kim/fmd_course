import './App.css';
import React from 'react';
import { Board } from './index';
import { DatePicker } from 'antd';
export class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                hi, this is app
                <Board/>
                <DatePicker/>
            </div>
        );
    }
}

