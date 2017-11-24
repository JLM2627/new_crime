import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
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
import HomePage from "./components/HomePage"


class App extends Component {
  render() {

    return (
      <MuiThemeProvider>
        <Router>
          <div>
            {/* <div className="App"> */}
            <div>
              <NavBar/></div>

            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
				<Route exact path="/crimes" component={CrimesList}/>
                {/* <Route exact path="/" component={CrimesList}/> */}
                <Route exact path="/crimes/:crimeId" component={Crime}/>
                <Route exact path="/crimes/:crimeId/comments/create" component={NewComment}/>
                <Route exact path="/crimes/:crimeId/comments/:commentId/view"component={ViewComment}/>
                <Route exact path="/users/:userId/Info" component={UserInfo}/>
                <Route exact path="/users/:userId/comments/view" component={CommentPage}/>
                <Route exact path="/login" component={LogInPage}/>
				 {/* <Route exact path="/" component={CrimesList} />
                <Route exact path="/crimes/:crimeId" component={Crime} />
                <Route exact path="/crimes/:crimeId/comments/create" component={NewComment} />
                <Route exact path="/crimes/:crimeId/comments/:commentId/view" component={ViewComment} />
                <Route exact path="/users/:userId/Info" component={UserInfo} />
                <Route exact path="/users/:userId/comments/view" component={CommentPage} />
                <Route exact path="/login" component={LogInPage} /> */}
              </Switch>
            </div>
            {/* </div> */}
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }

}

export default App;

