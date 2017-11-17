import React, { Component } from 'react';
import axios from "axios";
import CommentsList from "./CommentsList"
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class CommentPage extends Component {
  state = {
    crime: {
      title: "",
      description: "",
      comments: []
    },
    comment: {}
  };
  //creating a comment

  //
  async componentWillMount() {
    try {
      const crimeId = this.props.match.params.crimeId;
      const res = await axios.get(`/api/crime/${crimeId}`);
      this.setState({ crime: res.data });
      console.log(crimeId);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  createNewComment = async () => {
    const { crimeId } = this.props.match.params;
    const res = await axios.post(`/api/crimes/${crimeId}/comments`);
    console.log(res.data);
    this.setState({ crime: res.data });
  };

  deleteComment = async commentId => {
    const { crimeId } = this.props.match.params;
    const id = commentId;
    const res = await axios.delete(`/api/crimes/${crimeId}/comments/${id}`);
    this.setState({ crime: res.data });
  };

  // handleChange = (event, commentId) => {
  //   const attribute = event.target.name;
  //   const clonedCrime = { ...this.state.crime };
  //   const comment = clonedCrime.comments.find(i => i.id === commentId);
  //   console.log(comment);
  //   comment[attribute] = event.target.value;
  //   this.setState({ crime: clonedCrime });
  // };
  


  // updateComment = async commentId => {
  //   const { crimeId } = this.props.match.params;
  //   const id = commentId;

  //   const clonedCrime = { ...this.state.crime };
  //   const comment = clonedCrime.comments.find(i => i.id === commentId);

  //   const res = await axios.patch(`/api/crimes/${crimeId}/comments/${id}`, {
  //     comment: comment
  //   });
  //   this.setState({ crime: res.data });
  // };

      render() {

        return (
          <div>
            <div> <h1>{this.state.crime.title}</h1> </div>
            {/* <button onClick={this.createNewComment}>New Crime Comment</button> */}
            <CommentsList
              comments={this.state.crime.comments}
              handleChange={this.handleChange}
              deleteComment={this.deleteComment}
              updateComment={this.updateComment}
            />
            
           
            </div>
            );
    
        
      }   

}            

export default CommentPage;