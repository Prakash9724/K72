import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";
import Home from "./Pages/Home";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
