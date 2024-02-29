import React, { useContext, useEffect, useState } from "react";
import { Header } from "./Header";
import { Filter } from "./Filter";

import RegionContext from "../context/RegionContext";
import { Link } from "react-router-dom";
export const Countries = () => {
  const { searchValue, setSearchValue } = useContext(RegionContext);
  const url = " https://restcountries.com/v3.1/all";
  const nameUrl = `https://restcountries.com/v3.1/name/${searchValue}`;

  const [countries, setCountries] = useState([]);
  console.log(searchValue);
  useEffect(() => {
    const fetchNameData = async () => {
      const response = await fetch(searchValue ? nameUrl : url);
      const data = await response.json();
      setCountries(data);
    };
    fetchNameData();
  }, [searchValue]);

  return (
    <>
      <Header />
      <Filter />
      <section className="grid">
        {countries.map((country, i) => {
          return <Card key={i} data={country} />;
        })}
      </section>
    </>
  );
};

export function Card({ data }) {
  const {
    numericCode,
    name,
    population,

    region,
    capital,
    flags,
  } = data;

  return (
    <Link
      to={`countries/${name.common}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
    </Link>
  );
}
