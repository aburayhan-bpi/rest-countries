import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  //   const passWithParams = () => handleVisitedCountry(country);

  console.log(handleVisitedCountry);
  return (
    <div className={`countryBox ${visited ? "visited" : "non-visited"}`}>
      <h3>Name: {name.common}</h3>
      <img className="imageSized" src={flags.png} alt={flags.alt} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as Visited
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Go"}</button>
      {visited ? "I have visited" : "I want to visit there"}
    </div>
  );
};

export default Country;
