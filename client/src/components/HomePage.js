import React, { Component } from 'react';
import styled from "styled-components";

const StyledHomePage = styled.div`

    /* font-family: "Fjalla One", sans-serif; */
    font-family: 'Codystar', sans-serif
  
`;

class HomePage extends Component {
    render() {
        return (
            <div><StyledHomePage>
                <div><h1></h1></div>
            </StyledHomePage></div>    
        );

        
    }
}

export default HomePage;