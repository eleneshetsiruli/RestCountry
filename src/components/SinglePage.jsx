import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Card } from "./Countries";

export const SinglePage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const params = useParams();
  const nameUrl = `https://restcountries.com/v3.1/name/${params.id}`;
  console.log(filteredData);
  async function fetchSingleData() {
    const response = await fetch(nameUrl);
    const data = await response.json();
    setFilteredData(data);
  }

  useEffect(() => {
    fetchSingleData();
  }, [params]);

  return (
    <div className="grid">
      {filteredData?.map((el, i) => {
        return (
          <>
            <SingleCard key={i} data={el} />
          </>
        );
      })}
    </div>
  );
};
function SingleCard({ data }) {
  const {
    name,
    area,
    population,
    borders,
    flags,
    languages,
    region,
    status,
    car,
    maps,
    timezones,
  } = data;
  return (
    <div key={data.timezones} className="singleCard">
      <img src={flags.png} alt="" />
      <h1>{name.common}</h1>
      <h3>
        <span>population:</span> {population}
      </h3>
      <h3>
        <span>languages:</span> {languages.ell}
      </h3>
      <h3>
        <span>region:</span> {region}
      </h3>
      <h3>
        <span>status:</span> {status}
      </h3>
      <h3>
        <span>car side:</span> {car.side}
      </h3>
      <h3>
        <span>borders:</span>{" "}
        {borders?.map((el) => (
          <li>{el}</li>
        ))}
      </h3>
      <h3>
        <span>area:</span> {area}
      </h3>
      <h3 style={{ display: "flex", gap: 15 }}>
        <span>Map:</span>
        <a target="_blank" href={maps.googleMaps}>
          {maps.googleMaps}{" "}
        </a>
      </h3>
      <h3>
        <span>timezones:</span> {timezones}
      </h3>
    </div>
  );
}
