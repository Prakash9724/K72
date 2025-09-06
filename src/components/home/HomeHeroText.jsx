import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center pt-5 text-white">
      <div className="text-[9vw] uppercase leading-[8vw] flex items-center justify-center">L'étincelle</div>
      <div className="text-[9vw] flex items-center justify-center  uppercase leading-[8vw]">
        qui
        <div className=" h-[7vw] w-[15vw] -mt-3 rounded-full overflow-hidden  ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9vw]  flex items-center justify-center uppercase leading-[8vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
