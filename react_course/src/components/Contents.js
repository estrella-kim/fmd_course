import React from 'react';
import './Contents.css'

class Contents extends React.Component{
    render() {
        console.log(this)
        return(

            <div>
                {this.props.children}
                { 1+ 6 }
                컨텐츠입니다.
            </div>
        )

    }
}
export default Contents;