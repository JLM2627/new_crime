import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import styled from 'styled-components';

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
margin: auto;
  top: 200px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 500px;
  height: 500px;
  align-items: center; 
` 

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
		<PageWrapper>
      <div>
        <h1>Post Crime Tip Below</h1>
	



        <form onSubmit={this.handleSubmit} style = {{width: 100}}>
          <div>
            <label htmlFor="title">Title:
			</label>
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
			 rows={10}
            multiLine={true}
			fullWidth={true}
              placeholder="Type Comment Here"
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
	  </PageWrapper>
    );
  }
}

export default NewCommentToPost;
