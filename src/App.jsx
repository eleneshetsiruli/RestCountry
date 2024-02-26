import { useState } from "react";
import "./App.css";
import { Countries } from "./components/Countries";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
