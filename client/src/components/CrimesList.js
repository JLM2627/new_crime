import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";







const CrimeHeader = styled.div`
padding: 100px 0 0 0;
text-align: center;
font-family: "Codystar";
font-size: 38px;
color: black;
 font-family: "Codystar";`

const CrimeLinks = styled.div`
text-decoration: none;
display: flex;
 padding-top: 50px;
 padding-bottom: 20px;
 justify-content: space-around;
 align-items: center;

 .CrimeLinks {
/* text-decoration: none */
font-family: 'Ubuntu Condensed';
  font-size: 20px;
  color: black;
  text-decoration: none;
}
 
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
            <CrimeHeader>Crimes List Page</CrimeHeader>
            {this.state.crimes.map(crime => 
                    <CrimeLinks> <div key={crime.id}>
                  <Link className="CrimeLinks"to={`/crimes/${crime.id}`}> {crime.title}</Link>
                </div></CrimeLinks>
                    )}
                    </div>
                    
        
    )
    }
}

export default CrimesList;


// removed from link
// {`/crime/${crime.id}`} >{crime.title}