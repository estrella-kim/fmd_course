import React from 'react';
import { Board } from './index';
export class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                hi, this is app
                <Board/>
            </div>
        );
    }
}

