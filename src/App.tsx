/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleMeal from "./Pages/SingleMeal";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import About from "./Pages/About";
import { Container, Stack } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="xl">
      <Stack spacing={2}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meals/:id" element={<SingleMeal />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Stack>
    </Container>
  );
};

export default App;
