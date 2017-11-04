import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from "./Calculator";
import store from "./redux/store/config";
import {getResult} from "./redux/actions/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Calculator result= {this.props.value.result} onSubmit={(a,b,op) => store.dispatch(getResult(a,b,op))}/>
      </div>
    );
  }
}

export default App;
