import React, { Component } from 'react';
import axios from "axios"

class CommentView extends Component {
    state = {
        comment:{}
    }



  async componentWillMount() {
        try {
            const crimeId = this.props.match.params.crimeId
            const commentId = this.props.match.params.commentId
            console.log(commentId)
            const comment = await axios.get(`/api/crimes/${crimeId}/comments/${commentId}`)
            this.setState({ comment: comment.data })
            console.log(comment.data)
        
        } catch (error) {
            console.log(error)
            
    }
    }
    render() {
        return (
            <div>
                <h1>Comment View</h1>
            </div>
        );
    }
}

export default CommentView;