import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components";
import CommentsList from './CommentsList'
import { FlatButton } from "material-ui/FlatButton";

class CommentPage extends Component {
  state = {
    user: {
      name: "",
      password: "",
      comments: []
    }
  };
  // /GET    /api/users/:id(.:format)                   api/users#show
  async componentWillMount() {
    const { userId } = this.props.match.params;
    const res = await axios.get(`/api/users/${userId}`);
    this.setState({ user: res.data });
  }

  // Create a Post for Comment
  // Create onClick that creates an empty Comment
  // POST   /api/users/:user_id/comments(.:format)     api/comments#create
  createNewComment = async () => {
    const { userId } = this.props.match.params;
    const res = await axios.post(`/api/users/${userId}/comments`);
    console.log(res.data);
    this.setState({ user: res.data });
  };
// DELETE /api/users/:user_id/comments/:id(.:format) api/comments#destroy
  deleteComment = async commentId => {
    const { userId } = this.props.match.params;
    const id = commentId;
    const res = await axios.delete(`/api/users/${userId}/comments/${id}`);
    this.setState({ user: res.data });
  };

  handleChange = (event, commentId) => {
    const attribute = event.target.name;
    const clonedUser = { ...this.state.user };
    const comment = clonedUser.comments.find(i => i.id === commentId);
    console.log(comment);
    comment[attribute] = event.target.value;
    this.setState({ user: clonedUser });
    console.log(this.state.user);
  };

  // PATCH  /api/users/:user_id/comments/:id(.:format) api/comments#update
  updateComment = async commentId => {
    const { userId } = this.props.match.params;
    const id = commentId;

    const clonedUser = { ...this.state.user };
    const comment = clonedUser.comments.find(i => i.id === commentId);

    const res = await axios.patch(`/api/users/${userId}/comments/${id}`, {
      comment: comment
    });
    this.setState({ user: res.data });
  };

  render() {
    return (
      <div>
        <h1>{this.state.user.name}'s comments</h1>
        <FlatButton onClick={this.createNewComment} />
        <CommentsList
          comments={this.state.user.comments}
          handleChange={this.handleChange}
          deleteIdea={this.deleteIdea}
          updateIdea={this.updateIdea}
        />
      </div>
    );
  }
}

export default CommentPage;