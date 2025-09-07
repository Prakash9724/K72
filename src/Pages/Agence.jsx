import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";



const Agence = () => {

gsap.registerPlugin(ScrollTrigger);
 const imageDivRef =  useRef(null);
 const imageRef = useRef(null);

//  const imageArray = [
//   'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
//   'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
// ]


const imageArray = [
  
  '/images/Carl_480x640-480x640.jpg',
  '/images/Olivier_480x640-480x640.jpg',
  '/images/Lawrence_480x640-480x640.jpg',
  '/images/HugoJoseph_480x640-480x640.jpg',
  '/images/HugoJoseph_480x640-480x640.jpg',
  '/images/MyleneS_480x640-480x640.jpg',
  '/images/SophieA_480x640-480x640.jpg',
  '/images/Claire_480x640-480x640.jpg',
  '/images/Michele_480X640-480x640.jpg',
  '/images/MEL_480X640-480x640.jpg',
  '/images/CAMILLE_480X640_2-480x640.jpg',
  '/images/MAXIME_480X640_2-480x640.jpg',
  '/images/MEGGIE_480X640_2-480x640.jpg',
  '/images/joel_480X640_3-480x640.jpg'
]




 useGSAP(()=>{
  gsap.to(imageDivRef.current,{
    scrollTrigger:{
      trigger:imageDivRef.current,
      markers:true,
      start:'top 39%',
      end:"top -70%",
      scrub:true,
      pin:true,
      onUpdate:(e)=>{
     
        let imageIndex 
        
        if(e.progress < 1){
         imageIndex = Math.round(e.progress * imageArray.length)
        }else{
          imageIndex = imageArray.length - 1
        }
        
        imageRef.current.src = imageArray[imageIndex]
      }
    }
  })
 })


  return (
   <div>
     <div className="section1">
      <div ref={imageDivRef} className="h-[18vw] w-[15vw] overflow-hidden rounded-4xl  absolute top-96 left-[30vw]">
        <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>

      <div className="font-[font2] relative">
        <div className=" mt-[55vh]">
          <h1 className="text-[19vw] leading-[18vw] uppercase text-center">
            Soixan7e <br /> Douze
          </h1>
        </div>

        <div className="pl-[50%] mt-20">
          <p className="text-5xl ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité
            nourrit notre créativité. On reste humbles et on dit non aux gros
            egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une
            personnalité, une histoire. Si on oublie ça, on peut faire de bons
            chiffres à court terme, mais on la tue à long terme. C’est pour ça
            qu’on s’engage à donner de la perspective, pour bâtir des marques
            influentes.
          </p>
        </div>
      </div>
    </div>

    <div className="section2 h-screen"></div>
   </div>
  );
};

export default Agence;
