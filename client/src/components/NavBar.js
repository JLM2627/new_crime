import React, { Component } from 'react';
import styled from "styled-components";


const StyledNavBar = styled.div`
  height: 20px;
  display: flex;
  justify-content: center; /* align horizontal */
align-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-family: "Codystar";


`;

const HeadLink = styled.a`
padding: 10px;
 text-decoration: none;
  display: inline;
  line-height: normal;
  font-family: 'Codystar',
  color: white;
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
            <div>
              
                {/* <HeadLink href="/login">Login</HeadLink> */}
              
            </div>
          </StyledNavBar>;
    }
}

export default NavBar;