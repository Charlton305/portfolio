import { Routes, Route } from "react-router-dom";
import React from "react";
import Portfolio from "./Portfolio";
import CV from "./CV";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </>
  );
};

export default App;
