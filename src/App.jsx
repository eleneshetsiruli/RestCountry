import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Region } from "./components/Region";
import { Countries } from "./components/Countries";
import RegionContext from "./context/RegionContext";

function App() {
  const [regionValue, setRegionValue] = useState("asia");
  return (
    <div>
      <RegionContext.Provider value={{ regionValue, setRegionValue }}>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="countries" element={<Region />} />
        </Routes>
      </RegionContext.Provider>
    </div>
  );
}

export default App;
