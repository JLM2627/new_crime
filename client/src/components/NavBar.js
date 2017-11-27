import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const StyledNavBar = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
 
   font-family: 'Josefin Slab';
   background: rgba(255, 255, 255, 0.7);
/width: 100%;
  /* height: 20px;
  display: flex; */
  justify-content: center; /* align horizontal */
align-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-family: "Codystar"; */ */


`;

const LinkDescription = styled.a`
padding: 10px;
box-shadow: none;
 text-decoration: none;
  display: inline;
  line-height: normal;
  font-family: 'Codystar',
  color: white;
  .a{
	text-decoration: none !important;
  }
`;







class NavBar extends Component {
    render() {
        return <StyledNavBar>
            <div>
           
                <LinkDescription><Link to={"/"} style={{ textDecoration: 'none' }}><a>Sleuth</a></Link></LinkDescription>
              <LinkDescription><Link to="/crimes"style={{ textDecoration: 'none' }}>All Crimes</Link></LinkDescription>
            </div>
           
              
                {/* <HeadLink href="/login">Login</HeadLink> */}
           
          </StyledNavBar>;
    }
}

export default NavBar;