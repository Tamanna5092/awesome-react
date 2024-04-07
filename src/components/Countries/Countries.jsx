import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './Country/Countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([]);
    const [visitedCountries, setVisitedCountries]= useState([]);
    const [visitedFlags, setVisitedFlags]= useState([]);
    
    
        useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        },[])

    const handleVisitedCountry = country =>{
        console.log('Add this visited countries')
        // console.log(country)
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = flag =>{
        console.log('add the flag')
        const newVisitedFlags = [... visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
           <div>
           <h3>Visited Country: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx)=><img key={idx} src={flag}></img>)
                }
            </div>
           </div>
           {/* display country */}
            <div className="countries-container">
            {
                countries.map(country=><Country key={country.cca2}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;