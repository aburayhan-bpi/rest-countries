import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
            {
                visitedCountries.map((country)=> <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>

      <div className="countryContainer">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
