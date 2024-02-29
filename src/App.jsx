import { useState } from "react";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import { Region } from "./components/Region";
import { Countries } from "./components/Countries";
import RegionContext from "./context/RegionContext";
import { SinglePage } from "./components/SinglePage";

function App() {
  const [regionValue, setRegionValue] = useState("asia");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <RegionContext.Provider
        value={{ regionValue, setRegionValue, searchValue, setSearchValue }}
      >
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="countries" element={<Region />} />
          <Route path="countries/:id" element={<SinglePage />} />
        </Routes>
      </RegionContext.Provider>
    </div>
  );
}

export default App;
