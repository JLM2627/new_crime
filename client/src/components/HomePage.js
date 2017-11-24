import React, {Component} from 'react';
import styled from 'styled-components';

// import CrimesList from "./CrimesList"

const HomePageWrapper = styled.div `
	width: 100vw;
	height: auto;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: center;
	/* height: 20px;
  display: flex;
  padding-top: 45px;
  padding-bottom: 18px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column; */
`

const HomePageDisplay = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
margin: 100px;
`
const HomePageTitle = styled.div `
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
	/* /* width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	margin: 100px; */

const HomePageDescription = styled.div`
background-size: cover;
text-align: center;
width: 325px;
height: 325px;
h2 {
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    padding: 1px;
    letter-spacing: 1px;
    margin: 8px;
    background-color: white;
}
/* p {
    font-family: 'Roboto Mono', monospace;
    font-size: 17px;
    font-weight: bold;
    color: black;
} */
`
// const ProjectLinks = styled.div `
// display: flex;
// justify-content: space-around;
// a {
//     font-family: 'Roboto Mono', monospace;
//     font-size: 12px;
//     color: black;
//     text-decoration: none;
//     margin: 11px;
//     letter-spacing: 7px;
//     text-align: center;
//     padding: 5px;
//     background-color: white;
//     /* box-shadow: -2px 2px 0px red; */
// }






	

class HomePage extends Component {
				render() {
						return (
						<div>
							<HomePageWrapper>
												
							<div>
								<HomePageDisplay>
									
								<HomePageTitle>
									<h1>Neighborhood Sleuth</h1>
								</HomePageTitle>
								<HomePageDescription>
									<h2>If you see something, say something</h2>												
								</HomePageDescription>
								</HomePageDisplay>
												</div>
							</HomePageWrapper>	
							{/* <CrimesList />				 */}
						</div>


						)
				}
				
				
}

export default HomePage