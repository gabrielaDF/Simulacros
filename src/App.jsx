import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/User/Navbar";
import Home from "../src/Components/User/Home";
import UserLogin from "./Components/User/Login";
import UserForm from "./Components/User/userform";
import SimulacrosResumen from "./Components/User/SimulacrosResumen";
import EnvironmentalCalculator from "./Components/Calculator/Calculator";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/summary" element={<SimulacrosResumen />} />
        <Route path="/calculator" element={<EnvironmentalCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
