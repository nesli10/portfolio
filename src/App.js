import "./App.css";
import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Deneyim from "./Deneyim";
import Proje from "./Proje";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/deneyim" element={<Deneyim />}></Route>
        <Route path="/proje" element={<Proje />}></Route>
      </Routes>
    </div>
  );
}

export default App;
