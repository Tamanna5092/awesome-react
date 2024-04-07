import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
 const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
     const {name, region, cca3, flags, population, area}= country;

     const [visited, setVisited]= useState(false)
     
     const handleVisited =()=>{
        setVisited(!visited);
     }

    return (
        <div className="country">
            <h4>Name: {name?.common}</h4>
            <h5>Region: {region}</h5>
            <p><small>Code: {cca3}</small></p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <img src={flags.png} alt="" />
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add visited Flags</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {visited?'I have visited this country.': 'I want to visited.'}

            <hr />
            <CountryDetails
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;