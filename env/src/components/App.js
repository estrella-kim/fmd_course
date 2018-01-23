import './App.css';
import React from 'react';
import { Board } from './index';
import { Input } from 'antd';
export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            text : ''
        }
    }
    getTextLength (e) {
        const text = e.target.value;
        if(text.length > 15) return;
        this.setState({
            text : text
        })


    }
    render() {
        return (
            <div>
                hi, this is app
                <Board/>
                <div> { this.state.text.length }/ 15 </div>
                {/*{ this.state.text.length > 15 ? '더 이상 쓸 수 없습니다.' }*/}
                <Input onChange={(e) => this.getTextLength(e) } value={this.state.text}/>
            </div>
        );
    }
}

