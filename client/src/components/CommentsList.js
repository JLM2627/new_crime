import React, { Component } from 'react';
import Comment from './Comment'

const CommentsList = (props) => {
    return (
        props.comments.map((comment) => {
            return (
                <Comment key={comment.id} id={comment.id}
                    handleChange={props.handleChange}
                    updateComment={props.updateComment} deleteComment={props.deleteComment}
                title={comment.title} description={comment.description}/>
                
            )
        })
    )
}

export default CommentsList;