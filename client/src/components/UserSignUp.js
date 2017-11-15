import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom'

class UserSignUp extends Component {
    state = {
        newUser: {
            name: '',
            email: '',
            password: ''

        },
        redirectToUserInfo: false,
        newUserId: ''
    }



    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.newUser }
        
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        this.setState({
          redirectToUserInfo: true,
          newUserId: res.data.id
        });

    }
    render() {
        if (this.state.redirectToUserInfo) {
            return <Redirect to={`/user/${this.state.newUserId}`} />
           
        }
        return (
         <div>
            <h1>Sign-Up</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">User Name</label>
                <input onChange={this.handleChange} name="name" type="text" value={this.state.newUser.name} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} name="email" type="text" value={this.state.newUser.email} />
              </div>

             <div> <button>Sign Up</button></div>
            </form>
                </div>
        )


    }
}

export default UserSignUp;
