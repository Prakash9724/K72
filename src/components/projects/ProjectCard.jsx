import React from 'react'

const ProjectCard = (props) => {

    console.log(props);
    
  return (
    <>
    <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full'>
        <img className='h-full w-full object-cover' src={props.image1} alt="image1" />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/15'>
            <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full'>See Project</h2>
        </div>
    </div>
    
    <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full'>
        <img className='h-full w-full object-cover' src={props.image2} alt="image1" />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/15'>
            <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full'>See Project</h2>
        </div>
    </div>
    
    </>
  )
}

export default ProjectCard