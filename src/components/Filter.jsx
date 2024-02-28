import React, { useContext } from "react";
import RegionContext from "../context/RegionContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Countries } from "./Countries";

export const Filter = () => {
  const { regionValue, setRegionValue } = useContext(RegionContext);
  const navigate = useNavigate();
  function changeRegionValue(ev) {
    setRegionValue(ev.target.value);
    navigate("/countries");
  }
  console.log(regionValue);

  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for  country"
        />
      </form>

      <div className="region-filter">
        <select
          onChange={changeRegionValue}
          className="select"
          name="select"
          id="select"
        >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">america</option>
          <option value="Asia">asia</option>
          <option value="Europe">europe</option>
          <option value="Oceania">oceania</option>
        </select>
      </div>
    </section>
  );
};
