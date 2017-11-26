import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";


const PageWrapper = styled.div `
font-weight: bold;
background-image: url(https://i.imgur.com/8f6j1Va.png);
img.resize {
    width: 100%;
	height: auto;
} 
	background-color: (255 ,255, 255, .5);
	width: 100vw;
	height: auto;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: center;
	/* opacity: 0.3;
filter: alpha(opacity=30); */
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
 margin: 15px;
`
const CrimeHeader = styled.div`
`

const CrimeDisplay = styled.div`
/* background-color: transparent; */
/* background-image: url(https://i.imgur.com/8f6j1Va.png);
img.resize {
    width: 100%;
	height: auto;
}  */
background-size: auto auto;
/* background: rgba(255, 255, 255, 0.3); */
/* background-size: cover; */
/* opacity: .3; */
/* border: 50px black; */
margin: 50px;
margin-bottom: 0;
padding: 20px;
text-align: center;
width: 300px;
height: 300px;
border: 50px black;
`

const CrimeLinks = styled.div`
background-size: 50px;
text-decoration: none;
display: flex;
 padding-top: 50px;
 padding-bottom: 20px;
 justify-content: space-around;
 align-items: center;
 .CrimeLinks {
	   font-weight: bold;
/* text-decoration: none */
font-family: 'Ubuntu Condensed';
  font-size: 40px;
  text-decoration: none;
  font-weight: 700;
  color: black;
  font-weight: 700;
}
 
 `;


 
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
                    
        
    )
    }
}

export default CrimesList;