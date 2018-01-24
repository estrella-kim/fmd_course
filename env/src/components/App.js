import './App.css';
import React from 'react';
import { Board } from './index';
import { Input } from 'antd';
export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            text : '',
            textLength : 0
        }
    }
    getTextLength (e) {
        const text = e.target.value;
        const textLength = text.length;
        if(textLength > 15) return;
        this.setState({text, textLength})
    }
    render() {

        return (
            <div>
                hi, this is app
                <Board/>
                <div> { this.state.textLength}/ 15 </div>
                { this.state.textLength == 15  && <div>15자 이상을 넘을 수 없습니다.</div>}
                <Input onChange={(e) => this.getTextLength(e) } value={this.state.text}/>
            </div>
        );
    }
}

