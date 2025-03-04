import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FormView from "./components/FormView";
import ListView from "./components/ListView";
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormView />} />
        <Route path="/list" element={<ListView />} />
      </Routes>
    </Router>
  );
};

export default App;
