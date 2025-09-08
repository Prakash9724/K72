import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";
import Home from "./Pages/Home";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const App = () => {

  const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current,{
      display:'block'
    })
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    })
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    })
    tl.to(stairParentRef.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%'
    })
  });

  return (
    <div>
      <div ref={stairParentRef} className="w-full h-screen fixed z-20 top-0">
        <div className="w-full h-full flex ">
          <div className="stair w-1/5 h-screen bg-black"></div>
          <div className="stair w-1/5 h-screen bg-black"></div>
          <div className="stair w-1/5 h-screen bg-black"></div>
          <div className="stair w-1/5 h-screen bg-black"></div>
          <div className="stair w-1/5 h-screen bg-black"></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
