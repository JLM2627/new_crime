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







class NavBar extends Component {
    render() {
        return (
        <StyledNavBar>
          <div>
            <h4>Sleuth</h4>
          </div>
        </StyledNavBar>   
        )
    }
}

export default NavBar;