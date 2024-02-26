import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Filter } from "./Filter";
export const Countries = () => {
  const url = " https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    };
    fetchCountryData();
  }, []);

  return (
    <>
      <Header />
      <Filter />
      <section className="grid">
        {countries.map((country) => {
          const {
            numericCode,
            name,
            population,

            region,
            capital,
            flags,
          } = country;
          return (
            <article key={numericCode}>
              <div>
                <img src={flags.png} alt={name.common} />
              </div>
              <div className="details">
                <h3>{name.common}</h3>
                <h4>
                  <span>population:</span>
                  {population}
                </h4>
                <h4>
                  <span>region:</span>
                  {region}
                </h4>

                <h4>
                  <span>capital:</span>
                  {capital}
                </h4>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
