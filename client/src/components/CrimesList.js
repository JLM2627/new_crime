import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class CrimesList extends Component {
    constructor() {
        super();
        this.state = {
            crimes: []
        }
    }

    componentWillMount() {
        this.grabCrimes();
    }

    grabCrimes = async () => {
        try {
            const res = await axios.get('/api/crimes');
            await this.setState({ crimes: res.data })
            return res.data
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    }
    render() {

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>Crime Categories</h1>
                {this.state.crimes.map(crime => (
                    <div key={crime.id}>
                        <Link to={`/crime/$crime.id}`} >{crime.title}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default CrimesList;