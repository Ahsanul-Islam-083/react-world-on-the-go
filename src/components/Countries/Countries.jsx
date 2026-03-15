import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] =useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries =(country)=>{
        // console.log("handleVisitedCountries clicked",country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        // console.log(visitedCountries);
        // console.log(newVisitedCountries);
        
        
    }

    const handleVisitedFlags =(flag)=>{

        const newVisitedFlags = [...visitedFlags,flag]
        console.log("flag", flag);
        setVisitedFlags(newVisitedFlags);
        
    }

    return (
        <div>
            <h1>In The Countries: {countries.length}</h1>
            <h3>Total visited countries: {visitedCountries.length}</h3>
            <h3>Total visited Flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index)=><img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;