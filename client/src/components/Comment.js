import React, { Component } from 'react';
import styled from 'styled-components';
import { FlatButton } from 'material-ui/FlatButton';






const Comment = (props) => {
   

    const deleteComment = () => {
        props.deleteComment(props.id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props.id)
    }
 
    const updateComment = () => {
        props.updateComment(props.id)
    }

    return <div>
        <input onBlur={updateComment} onChange={handleChange} name="title" value={props.title} />
        <textarea onBlur={updateComment} onChange={handleChange} name="description" value={props.description} />
        <FlatButton onClick={deleteComment}>Delete t</FlatButton>
      </div>;
}

export default Comment;