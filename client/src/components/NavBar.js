import React, { Component } from 'react';
import styled from "styled-components";


const StyledNavBar = styled.div`
  height: 20px;
  display: flex;
  padding-bottom: 18px;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-family: "Codystar";
`;

const HeadLink = styled.a`
  text-decoration: none;
  font-family: 'Codystar',
  color: white;
  /* text-shadow: 2px 2px #72e0ff; */
  margin: 10px;
`;







class NavBar extends Component {
    render() {
        return <StyledNavBar>
            <div>
              <h4>
                <HeadLink href={"/"}>Sleuth</HeadLink>
              </h4>
            </div>
            <div>
              <HeadLink href="/crimes">All Crimes</HeadLink>
            </div>
            <div>
              
                <HeadLink href="/login">Login</HeadLink>
              
            </div>
          </StyledNavBar>;
    }
}

export default NavBar;