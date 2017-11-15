import React, { Component } from 'react';
import axios from "axios";
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';


class NewCommentToPost extends Component {
    state = {
        comment: {
            title: "",
            description: ""
        },
        refresh: false
    }


    handleChange = async (event) => {
        const attribute = event.target.name
        const updateComment = { ...this.state.comment }
        updateComment[attribute] = event.target.value
        this.setState({ comment: updateComment })
    console.log(this.state.comment)    
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const crimeId = this.props.crimeId
            console.log(crimeId)
            const res = await axios.post(`/api/crimes/${crimeId}/comments`, {
                "comment": this.state.comment

            })
            console.log(res)
            // this.setState({refresh: true})
        } catch (error) {
            this.setState({ flashError: true })
            console.log(this.state.flashError)
        }
    }

    render() {
        if (this.state.refresh) {
            window.location.reload()
        }
        if (this.state.flashError) {
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
                            onChange={this.handleChange} name="title"
                            type="text" value={this.state.comment.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="description"></label>
                        <textarea 
                            placeholder="Comment Here"
                            onChange={this.handleChange} name="description"
                            type="text" value={this.state.comment.description}    
                        />    
                    </div>
                    <FlatButton label="submit" type="submit" />
                    <div id="flash" style={{ color: "red", display: "none" }}>Please fill out all fields</div>
                    </form>
                            
            </div>
        );
    }
}

export default NewCommentToPost;