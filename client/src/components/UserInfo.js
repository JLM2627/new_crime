import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
 import NewCommentToPost from "./NewCommentToPost"

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
        user: {}
      
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

        const userId = this.props.match.params.userId
        console.log(userId)
        const res = await axios.get(`/api/users/${userId}`);
      console.log(res.data)  
        await this.setState({ user: res.data })
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
        return <div>
            <h1>All Users</h1>
          
          <div>{this.state.user.name}</div>
          <div><Link to={`/users/${this.props.match.params.userId}/comments`}>User comments</Link></div>
      </div>;    
      // <NewCommentToPost/>
  }
}

export default UserInfo;