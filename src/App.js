// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Home from "./vies/Home";
import Project from "./vies/Project";

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>

      {/* <Project/> */}
    </div>
  );
};

export default App;
