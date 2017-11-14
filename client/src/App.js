import React, { Component } from 'react';
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
    return <div>
        <div>
          <NavBar />
        </div>
        <div>
          <HomePage />
        </div>
      </div>;
  }
}

export default App;




// import logo from './logo.svg';
// import './App.css';
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>