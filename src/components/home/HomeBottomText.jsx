import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] mb-1  text-white flex items-center justify-center gap-2">
     
     <div className="border-3 border-white rounded-full flex items-center px-14 h-32 hover:text-[#D3FD54] hover:border-[#D3FD54]">
      <Link to='/projects' className="text-[6vw] uppercase ">
        Projects
      </Link>
     </div>

     <div className="border-3 border-white rounded-full flex items-center px-14 h-32 hover:text-[#D3FD50] hover:border-[#D3FD50]">
      <Link to='/agence' className="text-[6vw] uppercase ">
        Agence
      </Link>
     </div>
    </div>
  );
};

export default HomeBottomText;
