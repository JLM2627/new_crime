import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import NewCommentToPost from "./NewCommentToPost";
import CommentPage from "./CommentPage"
import FlatButton from "material-ui/FlatButton"
import styled from "styled-components";


const Title = styled.div`
height: 20px;
  display: flex;
  padding-bottom: 18px;
  justify-content: space-around;
  align-items: center;
  font-family: 'Ubuntu Condensed';
  font-size: 20px;
  flex-direction: column;
  margin-top: 50px;

  .span{
    align-items: center;
  }
`

class Crime extends Component {
    constructor() {
        super();
        this.state = {
            crime: {},
            comments: []
        }
    }

    componentWillMount() {
        console.log('mounting')
        const crimeId = this.props.match.params.id;
        this.grabCrime(crimeId)
    }

    grabCrime = async (crimeId) => {
        try {
            const crimeId = this.props.match.params.crimeId
            const crimeResponse = await axios.get(`/api/crimes/${crimeId}`)
            console.log(crimeResponse.data)
            await this.setState({
                crime: crimeResponse.data.crime,
                comments: crimeResponse.data.comments
            });
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

    
    render() {
        return <div>
            <div>
              <p><h2>Find out about crime near you</h2></p>
              
                <Title><div> {this.state.crime.title}</div>
                    
               <div>{this.state.crime.description}</div></Title>



              <Link to={`/crimes/${this.props.match.params.crimeId}/comments/create`}>
                <FlatButton label="Add Comment"/>{" "}
              </Link>
              {this.state.comments.map(comment => <div key={comment.id}>
                  <h1>{comment.title}</h1>
                  <h4>{comment.description}</h4>
                  <div>
                    <Link to={`/crimes/${this.props.match.params.crimeId}/comments/${comment.id}/view`}>
                      <FlatButton label="Edit"/>
                    </Link>
                  </div>
                </div>)}
            </div>
           
          </div>;
    }
}

export default Crime;
{/* <div><FlatButton onClick={this.editComment} label="Edit"/></div> */}
