import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";


const H1 = styled.h1`
font-family: "Codystar";
font-size: 40px`;

const HeadLink = styled.a`
  text-decoration: none;
  font-family: 'Codystar',
  color: white;
  /* text-shadow: 2px 2px #72e0ff; */
  margin: 10px;
`;

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
    };
    render() {

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
                <div>
                    <h1>Crime Categories</h1>
                    {this.state.crimes.map(crime => (
                        <div key={crime.id}>
                            <Link to={`/crimes/${crime.id}`}> {crime.title}</Link>
                    </div>
                    
                ))}
            </div>
          
        )}
}

export default CrimesList;


// removed from link
// {`/crime/${crime.id}`} >{crime.title}