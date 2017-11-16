import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Crime from "./components/Crime";
import CrimesList from "./components/CrimesList";
import UserInfo from "./components/UserInfo"
import UserSignUp from "./components/UserSignUp"
import LogInPage from "./components/LogInPage";
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import CommentPage from "./components/CommentPage"





class App extends Component {
  render() {

    
    return <MuiThemeProvider>
        <Router>
          <div className="App">
            <NavBar />
            <div>
              <h1>Neighborhood Sleuth</h1>
              <div>
                <div>
          
                </div>
              </div>
            </div>
            <div>
              <Switch>
                <Route exact path="/" component={CrimesList} />
                <Route exact path="/crime/:crimeId" component={Crime} />
                <Route exact path="/users/:userId/Info" component={UserInfo} />
              <Route exact path="/login" component={LogInPage} />
              <Route exact path="/comment/UserId" component={CommentPage}/>
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>;
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