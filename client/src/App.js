import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Crime from "./components/Crime";
import CrimesList from "./components/CrimesList";


class App extends Component {
  render() {

    
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <div>
            <h1>Sleuth</h1>
            <div>
              <div><Link to="/">All Crimes</Link></div>
            </div>
          </div>
          <div>
          <Route exact path="/" component={CrimesList} />
          <Route path="/crime/:id" component={Crime} />
          {/* <Route exact path="/" render={HomePageComponent} />  */}
       
             </div> 
        </div>     
          
  
      </Router>

    );
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