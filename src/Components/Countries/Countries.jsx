import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Countries</h2>
      <h5>Countries: {countries.length}</h5>
      {
      countries.map((country) => (
        <Country key={country.cca2} country={country}></Country>
      ))
      }
    </div>
  );
};

export default Countries;
