import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import NewCommentToPost from "./NewCommentToPost";
import CommentPage from "./CommentPage"
import FlatButton from "material-ui/FlatButton"
import styled from "styled-components";



const PageWrapper = styled.div `
	width: 100vw;
	height: auto;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: center;

	`
const Crimes = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
margin: 80px;
`

const CrimeTitle = styled.div `
h1 {
    position: relative;
    font-size: 30px;
    z-index: 1;
    overflow: hidden;
    text-align: center;
}
h1:before, h1:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 1px;
    content: '\a0';
    background-color: red;
}
h1:before {
    margin-left: -50%;
    text-align: right;
}
.color {
    background-color: #ccc;
}`

const CrimeDescription = styled.div`
background-size: cover;
text-align: center;
h2 {
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    padding: 1px;
    letter-spacing: 1px;
    margin: 8px;
    /* background-color: white; */
}`

const ReportCrimeLink = styled.div `
display: flex;
justify-content: space-around; 
font-family: 'Roboto Mono', monospace;
font-size: 12px;
color: black;
text-decoration: none;
margin: 11px;
letter-spacing: 7px;
text-align: center;
/* background-color: white; */
padding: 5px;
`

const CommentWrapper = styled.div`
 display: flex;
justify-content: space-around;
`

const Comments = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
 margin: 15px;

`

const CommentDisplay = styled.div`
background: rgba(255, 255, 255, 0.3);
background-size: cover;
/* opacity: .3; */
border: 5px double white;
margin: 50px;
padding: 20px;
text-align: center;
width: 250px;
height: 250px;
h1{
	text-align:left;
	font-family: monospace;
	text-decoration: underline;
	font-size: 20px;
}
`

const EditCommentButton = styled.div`
display: flex;
    justify-content: space-around;
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

    grabCrime = async(crimeId) => {
        try {
            const crimeId = this.props.match.params.crimeId
            const crimeResponse = await axios.get(`/api/crimes/${crimeId}`)
            console.log(crimeResponse.data)
            await this.setState({crime: crimeResponse.data.crime, comments: crimeResponse.data.comments});
        } catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

    render() {
        return (
				
					
			<PageWrapper>
				
					<Crimes>
                		<CrimeTitle>
							<h1>{this.state.crime.title}</h1>
						</CrimeTitle>
						<CrimeDescription>
							<h2>{this.state.crime.description}</h2>
						</CrimeDescription>
               			<ReportCrimeLink>
                    		<Link to={`/crimes/${this.props.match.params.crimeId}/comments/create`}>
                        	<FlatButton label="Report Suspicious Activity"/>{" "}
                    		</Link>
                		</ReportCrimeLink>
					</Crimes>

					<CommentWrapper>
						<Comments>
						{this.state.comments.map(comment =>
						<div>
						<div>
						 <CommentDisplay>
							 <div key={comment.id}>
               				 	<h1>{comment.title}</h1>
                			 	<h4>{comment.description}</h4>
							</div>
						</CommentDisplay>
						</div>
						<div>
						<EditCommentButton>
							<div>
						   	<Link to={`/crimes/${this.props.match.params.crimeId}/comments/${comment.id}/view`}>
                       	 	<FlatButton label="Edit"/>
							</Link>
							</div>
						</EditCommentButton>
						</div>
						</div>
						)}
						</Comments>
					</CommentWrapper>
			</PageWrapper>
		)
    }
}

export default Crime;
{/* <div><FlatButton onClick={this.editComment} label="Edit"/></div> */
}
