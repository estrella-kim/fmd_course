import React from 'react';
import './Counter.css'

class Counter extends React.Component{
    constructor() {
        super();
        this.state = {
            number : 0,
            string : 1
        }
    }
    increase () {
        this.setState({
            number: this.state.number + 1,
            string: 0
        }) //리액트야, 뷰를 갱신해라. 프로토타입을 타고올라가 setState를 실행해.객체나 함수를 받을 수 있옹
        console.log(this.state.string)
        // this.state.number ++;
        // return this.state.number;
    }
    decrease() {
        this.setState((state) => {
                if(state.number <= 0) return;

                return {
                        number: state.number -1
                }


            })
    }
    isDisable() {
        if(this.state.number > 0 ) {
            return true;
        }
        // this.props.children <div >0미만으로는 내려갈수없어요.</div>

        return false;
    }
    render() {
        return (
            <div className="counter">
                { /*최상위는 div하나만 존재하고*/ }
                <div>{ this.state.number }</div>
                <button onClick={() => this.increase()}>증가</button> {/*리액트 문법상 onClick*/}
                <button disabled={!this.state.number} onClick={() => this.decrease()}>감소</button>
                <div > { this.state.number <= 0 &&  '- 0미만으로는 내려갈수없어요.'}</div>
                {/*{this.state.number <= 0 && <div>0 미만으로는 내려갈 수 없습니다.</div>  /*어떤 조건일 때에만 이걸 해라라는 걸 할때는 && 혹은 ||}}*/}
            </div>
        )
    }
}

export default Counter;
// => arrow function 이라고 한다. == return this.increase();
//중괄호 안으로 주석처리