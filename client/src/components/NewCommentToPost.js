import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import styled from 'styled-components';

const PageWrapper = styled.div`
margin: auto;
   width: 50%;
   margin-top: 100px;
/* margin: auto;
    width: 50%; */
	/* text-align: center; */
 /* display: flex;

position: relative; */
  
` 

const Form = styled.div`
position: 'relative';
marginLeft: '50%';

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

    return (
		<PageWrapper>
      <div>
        <h1>Post Crime Tip Below</h1>
	

<Form>

        <form onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor="title">Title:
			</label>
            <TextField
			
      
			style={{ alignSelf: 'flex-start', position: 'relative'}}
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
			
	style={{}}
              placeholder="Type Comment Here"
              onChange={this.handleChange}
              name="description"
              type="text"
              value={this.state.comment.description}
            />
          </div>
          <FlatButton
		  style={{}}
		   label="submit" type="submit" />
          <div id="flash" >
          </div>
        </form>
		</Form>



      </div>
	  </PageWrapper>
    );
  }
}

export default NewCommentToPost;
