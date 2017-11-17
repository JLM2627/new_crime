import React, { Component } from "react";
import axios from "axios";

class CommentView extends Component {
  state = {
    comment: {},
    redirectToCrime: false
  };

  async componentWillMount() {
    try {
      const crimeId = this.props.match.params.crimeId;
      const commentId = this.props.match.params.commentId;
      console.log(commentId);
      const comment = await axios.get(
        `/api/crimes/${crimeId}/comments/${commentId}`
      );
      this.setState({ comment: comment.data });
      console.log(comment.data);
    } catch (error) {
      console.log(error);
    }
  }
  handleChange = event => {
    const attribute = event.target.name;
    const updatedComment = { ...this.state.comment };
    updatedComment[attribute] = event.target.value;
    this.setState({ comment: updatedComment });
  };
  deleteComment = async () => {
    const crimeId = this.props.match.params.crimeId;
    const commentId = this.props.match.params.commentId;
    const res = await axios.delete(
      `/api/crimes/${crimeId}/comments/${commentId}`
    );
    this.setState({ redirectToCrime: true });
  };
  editComment = async () => {
    const crimeId = this.props.match.params.crimeId;
    const commentId = this.props.match.params.commentId;
    const res = await axios.patch(
      `/api/crimes/${crimeId}/comments/${commentId}`
    );
  };
  render() {
    return (
      <div>
            <div><h1>Comment View</h1></div>
            <div>Title: <input onChange={this.handleChange} name="title" value={this.state.comment.title} /></div>
            <div>Description: <input onChange={this.handleChange} name="description" value={this.state.comment.description} /></div>
            <div><button onClick={this.editComment}>Edit</button><button onClick={this.deleteComment}>Delete</button></div>
            
      </div>
    );
  }
}

export default CommentView;
