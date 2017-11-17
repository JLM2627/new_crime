import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import styled from "styled-components";
import "./App.css";
import NavBar from "./components/NavBar";
import Crime from "./components/Crime";
import CrimesList from "./components/CrimesList";
import UserInfo from "./components/UserInfo"
import UserSignUp from "./components/UserSignUp"
import LogInPage from "./components/LogInPage";
import CommentPage from "./components/CommentPage"
import NewComment from './components/NewCommentToPost'
import ViewComment from "./components/comments/CommentView"
// import HomePage from "./components/HomePage"

const Neighborhood = styled.div`
height: 20px;
  display: flex;
  padding-top: 45px;
  padding-bottom: 18px;
  justify-content: space-around;
  align-items: center;

h1 {
  font-family: 'Codystar';
  font-size: 50px;
}


`





class App extends Component {
  render() {

    
    return(
    <MuiThemeProvider>
        <Router>
          <div className="App">
           <div> <NavBar /></div>
            <Neighborhood>
              <h1> Neighborhood Sleuth</h1>
              </Neighborhood>

              
            
            <div>
              <Switch>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route exact path="/" component={CrimesList} />
                <Route exact path="/crimes/:crimeId" component={Crime} />
                <Route exact path="/crimes/:crimeId/comments/create" component={NewComment} />
                <Route exact path="/crimes/:crimeId/comments/:commentId/view" component={ViewComment} />
                <Route exact path="/users/:userId/Info" component={UserInfo} />
                <Route exact path="/users/:userId/comments/view" component={CommentPage} />
                <Route exact path="/login" component={LogInPage} />
              </Switch>
          </div>
          </div>

        </Router>
       </MuiThemeProvider>
    )
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