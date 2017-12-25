// require('');
// const React = require('react');
//require는 es3에서 모듈 개념이 없을 때 노드가 만들어준 함수
import React from 'react';//es6에서 표준 문법으로 채택한 구문  //리액트 컴포넌트를 만들기 위해 반드시 해야할 것.
import './Header.css';
 //jsx (js안에서 xml형식의 문법을 사용할 수 있게 하는것)
//xml
function Header() {
    return (
      <header className="header">
          헤더입니다.
      </header>
    );
}
export default Header; //es6표준 문법

// module.exprots = Header;
/*
class Header {

}
// new Header() 리액트가 해준다. */
