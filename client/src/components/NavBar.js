import React, { Component } from 'react';
import styled from "styled-components";


const StyledNavBar = styled.div`
  height: 20px;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-family: "Codystar";

`;

const HeadLink = styled.a`
 padding: 50px 0;
  text-decoration: none;
  font-family: 'Codystar',
  color: white;
  /* margin-top: 50px; */
  vertical-align: bottom;
  /* text-shadow: 2px 2px #72e0ff; */
  /* margin-top: 10px; */
`;







class NavBar extends Component {
    render() {
        return <StyledNavBar>
            <div>
           
                <HeadLink href={"/"}>Sleuth</HeadLink>
            
            </div>
            <div>
              <HeadLink href="/crimes">All Crimes</HeadLink>
            </div>
            {/* <div>
              
                <HeadLink href="/login">Login</HeadLink>
              
            </div> */}
          </StyledNavBar>;
    }
}

export default NavBar;