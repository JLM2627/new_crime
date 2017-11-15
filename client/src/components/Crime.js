import React, { Component } from 'react';
import axios from "axios";

class Crime extends Component {
    constructor() {
        super();
        this.state = {
            crime: {}
            // comments: 
        }
    }

    componentWillMount() {
        const crimeId = this.props.match.params.id;
        this.grabCrime(crimeId)
    }

    grabCrime = async (crimeId) => {
        try {
            const crimeResponse = await axios.get(`api/crimes/${crimeId}`)
            await this.setState({
                crime: crimeResponse.data
            });
        }
        catch (error) {
            console.log(error)
            await this.setState({error: error.message})
        }
    }

        // try {
        //     const crimeId = this.props.match.params.cityId
        // }
    
    render() {
        return (
            <div>
                <h2>Crime</h2>
                {this.state.crime.title}
            </div>
        );
    }
}

export default Crime;