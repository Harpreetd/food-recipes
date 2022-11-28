/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleMeal from "./Pages/SingleMeal";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meals/:id" element={<SingleMeal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
