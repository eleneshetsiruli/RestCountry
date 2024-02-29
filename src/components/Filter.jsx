import React, { useContext } from "react";
import RegionContext from "../context/RegionContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Filter = () => {
  const { regionValue, setRegionValue, setSearchValue } =
    useContext(RegionContext);
  const navigate = useNavigate();
  function handleRegionValue(ev) {
    setRegionValue(ev.target.value);
    navigate(`countries`);
  }

  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for  country"
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
      </form>

      <div className="region-filter">
        <select
          onChange={handleRegionValue}
          className="select"
          name="select"
          id="select"
        >
          <option value="Filter by region">Filter by region</option>
          <option onClick={() => changeRegionValue("africa")} value="Africa">
            Africa
          </option>
          <option value="America">america</option>
          <option value="Asia">asia</option>
          <option value="Europe">europe</option>
          <option value="Oceania">ceania</option>
        </select>
      </div>
    </section>
  );
};
