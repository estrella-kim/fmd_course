import React, { Component } from 'react';
//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contents from "./components/Contents";
import Counter from "./containers/Counter"; //intellij에서 import되지않은 class import 단축키 (alt + enter)


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Contents>
              <Counter/>
              <div>
                  컨텐츠 상위
              </div>
          </Contents>

          <Footer/>
      </div>
    );
  }
}

export default App;
