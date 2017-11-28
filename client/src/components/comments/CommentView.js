import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import styled from 'styled-components';





const CommentPageWrapper = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-content: center;
/* margin: auto;
   width: 50%;
   margin-top: 100px;
   flex-direction: row;
   text-align: center; */
/* width: auto;
height: auto;
display: flex;
flex-direction: column;
margin: 100px; */
`

const Form = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
margin-top: 150px;
`

const FormDisplay = styled.div`
background-size: cover;
 background-color: white;
rgba: (0, 0, 0, 0);
text-align: center;
width: 325px;
height: 325px;
h3 {`





















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

       	 
			<Form>
			<div><h1>Update Comment Below</h1></div>
         <FormDisplay>
            <div> Update Title: <TextField 
			style={{ }}
			onChange={this.handleChange} 
			name="title" 
			type="text"
			value={this.state.comment.title} />
			</div>


            <div>Update Description: <TextField 
			rows={10}
            multiLine={true}
			
			onChange={this.handleChange} 
			// name="description" 
			value={this.state.comment.description} />
			<label htmlFor="description" />
			</div>

        	<div>
			<FlatButton
			onClick={this.editComment} 
			label="Submit"/>
			</div>
        	<div>
			<FlatButton 
			onClick={this.deleteComment} 
			label="delete"/>
			</div>
			 </FormDisplay>
			</Form>
           
    
	  </CommentPageWrapper>
    );
  }
}

export default CommentView;
