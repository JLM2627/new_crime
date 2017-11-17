import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import NewCommentToPost from "./NewCommentToPost";
import CommentPage from "./CommentPage"

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
              <h2>Crime</h2>
              {this.state.crime.title}
              {this.state.crime.description}
              <Link to={`/crimes/${this.props.match.params.crimeId}/comments/create`}>
                <button>Add Comment</button>{" "}
              </Link>
              {this.state.comments.map(comment => <div key={comment.id}>
                  <h1>{comment.title}</h1>
                  <h4>{comment.description}</h4>
                  <div>
                    <Link to={`/crimes/${this.props.match.params.crimeId}/comments/${comment.id}/view`}>
                      <button>Edit</button>
                    </Link>
                  </div>
                </div>)}
            </div>
            <div>{/* <CommentPage /> */}</div>
          </div>;
    }
}

export default Crime;