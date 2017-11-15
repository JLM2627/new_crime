import React, { Component } from 'react';
import styled from "styled-components";


const StyledNavBar = styled.div`
  height: 20px;
  display: flex;
  padding-bottom: 18px;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
`;

const HeadLink = styled.a`
  text-decoration: none;
  font-family: 'Raleway Dots',
  color: white;
  /* text-shadow: 2px 2px #72e0ff; */
  margin: 10px;
`;







class NavBar extends Component {
    render() {
        return (
        <StyledNavBar>
          <div>
              <h4><HeadLink href={'/'}>Sleuth</HeadLink></h4>
          </div>
        </StyledNavBar>   
        )
    }
}

export default NavBar;