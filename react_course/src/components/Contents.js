import React from 'react';
import './Contents.css'
import Counter from '../containers/Counter';

class Contents extends React.Component{
    render() {
        return(
            <div>
                {this.props.children}
                { 1+ 6 }
                컨텐츠입니다.
                <Counter />
            </div>
        )

    }
}
export default Contents;