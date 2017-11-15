import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
        users: []
      
    };
  }
// componentWillMount() {
//     const userId = this.props.match.params.id;
//     this.grabUser(userId)
//   }

    
 componentWillMount() {
        this.grabUser();
    }

  grabUser = async () => {
      try {
        console.log("test")
        const res = await axios.get('/api/users');
      console.log(res.data)  
        await this.setState({ users: res.data })
      return res.data  
         
    }
    catch (err) {
      console.log(err);
      await this.setState({ error: err.message });
      return err.message;
    }
  }

    render() {
      if (this.state.error) {
            return <div>{this.state.error}</div>
      }
        return (
        <div>
          <h1>All Users</h1>
        
          {this.state.users.map(user => (
                    <div key={user.id}>{user.name} 
                        
              </div>          
          ))}
          
            </div>
        )    
  }
}

export default UserInfo;