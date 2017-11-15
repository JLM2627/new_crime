import React, { Component } from 'react';
import axios from "axios";
import NewCommentToPost from "./NewCommentToPost";

class Crime extends Component {
    constructor() {
        super();
        this.state = {
            crime: {},
            comments: []
        }
    }

    componentWillMount() {
        const crimeId = this.props.match.params.id;
        this.grabCrime(crimeId)
    }

    grabCrime = async (crimeId) => {
        try {
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

        // try {
        //     const crimeId = this.props.match.params.cityId
        // }
    
    render() {
        return (
            <div>
            <div>
                <h2>Crime</h2>
                {this.state.crime.title}
                {this.state.crime.description}
                {this.state.comments.map(comment => (
                    <div key={comment.id}>
                        <h1>{comment.title}</h1>
                        <h4>{comment.description}</h4>    
                        
                    </div>
                ))}

            </div>
            <div>
                    <NewCommentToPost crimeId={this.props.match.params.id}/>
        </div>
        </div>
        );
    }
}

export default Crime;