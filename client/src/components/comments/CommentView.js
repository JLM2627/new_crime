import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import styled from 'styled-components';





const CommentPageWrapper = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
margin: 100px;
`























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
            `/api/crimes/${crimeId}/comments/${commentId}`, {comment: this.state.comment}
        );
        this.setState({ redirectToCrime: true});    
  };
    render() {
        if (this.state.redirectToCrime) {
          return <Redirect to={`/crimes/${this.props.match.params.crimeId}`} />
      }
    return (
		<CommentPageWrapper>

       	 <div><h1>Update Comment Below</h1></div>
        
            <div>Title: <TextField 
			onChange={this.handleChange} name="title" 
			value={this.state.comment.title} /></div>


            <div>Description: <TextField 
			onChange={this.handleChange} name="description" 
			value={this.state.comment.description} /></div>
			
        <div><FlatButton onClick={this.editComment} label="Submit"/></div>
        <div><FlatButton onClick={this.deleteComment} label="delete"/></div>
            
    
	  </CommentPageWrapper>
    );
  }
}

export default CommentView;
