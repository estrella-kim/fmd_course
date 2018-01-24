import './App.css';
import React from 'react';
import { Buttons } from './index';
import { Input } from 'antd';
import 'antd/dist/antd.css';

export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            text : '',
            textLength : 0,
            list : []
        }

    }
    getTextLength (e) {
        const text = e.target.value;
        const textLength = text.length;
        if(textLength > 15) return;
        this.setState({text, textLength})
    }

    recordList(e) {
        e.preventDefault();//form 태그의 preventDefault 는 제출 후의 페이지 갱신을 막는다.
        this.setState( (state) => {
            return {
                list: [...state.list, state.text],
                text: ''
            }
        });
    }

    render() {

        return (
            <div>
                <Buttons/>
                <div> { this.state.textLength}/ 15 </div>
                { this.state.textLength == 15  && <div>15자 이상을 넘을 수 없습니다.</div>}
            <form onSubmit={(e)=>this.recordList(e)}>
                <Input onChange={(e) => this.getTextLength(e) } value={this.state.text}/>
            </form>
                <ul>
                    { this.state.list.map((v,i) => (<li key={i}>{v}</li>)) }
                </ul>
            </div>
        );
    }
}

