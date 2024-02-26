import React from "react";

export const Filter = () => {
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
        <select className="select" name="select" id="select">
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
