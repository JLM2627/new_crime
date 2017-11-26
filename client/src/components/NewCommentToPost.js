import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class NewCommentToPost extends Component {
  state = {
    comment: {
      title: "",
      description: ""
    },
    // refresh: false,
    redirectToCrimePage: false,
	flashError: false
  };

  handleChange = async event => {
    const attribute = event.target.name;
    const updateComment = { ...this.state.comment };
    updateComment[attribute] = event.target.value;
    this.setState({ comment: updateComment });

  };

  handleSubmit = async event => {
    event.preventDefault();
    try {

      const res = await axios.post(
        `/api/crimes/${this.props.match.params.crimeId}/comments`,
        {
          comment: this.state.comment
        }
      );
      this.setState({ redirectToCrimePage: true})
      console.log(res);
      // this.setState({refresh: true})
    } catch (error) {
    this.setState({ flashError: true });
      console.log(this.state.comment);
	  console.log(this.state.flashError);
    }
  };

  render() {
    if (this.state.redirectToCrimePage) {
      return <Redirect to={`/crimes/${this.props.match.params.crimeId}`} />
    }

	 if(this.state.flashError){
            let div = document.getElementById("flash")
            div.style.display = "block"
        }
    return (
      <div style={{ margin: "10px" }}>
        <h1>New Comment</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Comment Title: </label>
            <TextField
              onChange={this.handleChange}
              name="title"
              type="text"
              value={this.state.comment.title}
            />
          </div>
          <div>
            <label htmlFor="description" />
            <textarea
              placeholder="Comment Here"
              onChange={this.handleChange}
              name="description"
              type="text"
              value={this.state.comment.description}
            />
          </div>
          <FlatButton label="submit" type="submit" />
          <div id="flash" style={{ color: "red", display: "none" }}>
            Please fill out all fields
          </div>
        </form>
      </div>
    );
  }
}

export default NewCommentToPost;
