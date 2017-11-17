import React, { Component } from 'react';
import CrimesList from "./CrimesList"

class HomePage extends Component {
    render() {
        return (
            <div>
                <CrimesList>
                </CrimesList>      
            </div>
        );
    }
}

export default HomePage;