import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import UserSignUp from "./UserSignUp"

class LogInPage extends Component {
  state = {
    users: []
  };

  componentWillMount() {
    this.getAllUsers();
  }
  getAllUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      this.setState({ users: res.data });
      
    } catch (err) {
      console.log(err);
    }
  };

  render() {
      return <div>
          <h1>Log-In</h1>
          <h3>Please Select an Existing User</h3>
        {this.state.users.map((user, index) => {
          return <div>
            <Link key={user._id} to={`/users/${user.id}/Info`}>{user.name}</Link>
            </div>;    
    })}
          <UserSignUp />
        </div>;
  }
}

export default LogInPage;