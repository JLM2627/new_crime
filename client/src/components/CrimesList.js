import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";


const CrimeHeader = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
/* margin-right: 500px;
margin-left: 500px; */
align-items: center;

h1 {
    position: relative;
    font-size: 30px;
    z-index: 1;
    /* overflow: hidden; */
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
}
 h1 {
    position: relative;
	margin-top: 150px;
    font-size: 30px;
    text-align: center;
} 
h2{
	font-family: 'Roboto Mono', monospace;
	text-align: center;
    font-size: 25px;
    padding: 1px;
    letter-spacing: 1px;
    margin-bottom: 8px;

}
`

const PageWrapper = styled.div `
background-image: url(https://i.imgur.com/8f6j1Va.png);
img.resize {
    width: 100%;
	height: auto;
} 
border: 2px solid black;
position: relative;
margin: 100px;
padding: 75px;
font-weight: bold;
display: flex;
justify-content: space-around;

`


const CrimeWrapper = styled.div`
display: flex;
justify-content: space-around;
`

const Crimes = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
 /* margin: 15px; */
`


const CrimeDisplay = styled.div`
background-size: auto auto;/
margin-bottom: 0;
text-align: center;
width: 300px;
height: 300px;
border: 5px black;
`

const CrimeLinks = styled.div`
background-size: 50px;
text-decoration: none;
display: flex;
 padding-top: 100px;
 padding-bottom: 20px;
 justify-content: space-around;
 align-items: center;
 .CrimeLinks {
	font-weight: bold;
	font-family: 'Ubuntu Condensed';
  	font-size: 40px;
  	text-decoration: none;
  	color: black;
  	font-weight: 700;
}`;


 
class CrimesList extends Component {
    constructor() {
        super();
        this.state = {
            crimes: []
        }
    }

    componentWillMount() {
        this.grabCrimes();
    }

    grabCrimes = async () => {
        try {
            const res = await axios.get('/api/crimes');
            await this.setState({ crimes: res.data })
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    };
    render() {

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
			<div>
		<div> 
			<CrimeHeader>
				<h1>Choose Crime Category Below</h1>
				<h2>View and Comment on Crimes</h2>
			</CrimeHeader>
			</div>
			<div>
			<PageWrapper>
			<CrimeWrapper>
         
				<Crimes>
            			{this.state.crimes.map(crime => 
						<div>
						<div>
						<CrimeDisplay>
						<div key={crime.id}>
						</div>
						<div>
						 <CrimeLinks>
						 <div>
                  			<Link className="CrimeLinks"to={`/crimes/${crime.id}`}>{crime.title}
							</Link>
                		</div>
						</CrimeLinks>
						</div>
							</CrimeDisplay>
						
						</div>
						</div>

						)}
				</Crimes>
			 </CrimeWrapper>
			 </PageWrapper>
			 </div>
                    
        </div>
    )
    }
}

export default CrimesList;