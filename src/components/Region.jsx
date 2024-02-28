import React, { useContext, useEffect, useState } from "react";
import RegionContext from "../context/RegionContext";
import { Card } from "./Countries";

export const Region = () => {
  const { regionValue } = useContext(RegionContext);
  const url = `https://restcountries.com/v3.1/region/${regionValue}`;
  const [region, setRegion] = useState([]);

  async function getRegionData() {
    const response = await fetch(url);
    const data = await response.json();
    setRegion(data);
  }
  console.log(region);
  useEffect(() => {
    getRegionData();
  }, [regionValue]);
  console.log(region);
  return (
    <div className="grid">
      {region.map((el) => {
        return <Card data={el} />;
      })}
    </div>
  );
};
