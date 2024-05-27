import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Navbar />
        <Route path="/" element={Home} />
      </Routes>
    </div>
  );
}

export default App;
