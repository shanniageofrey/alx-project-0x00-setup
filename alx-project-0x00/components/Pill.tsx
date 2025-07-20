import React from 'react';

interface PillProps {
    title:string;
}//we define title is a string type, so that we can pass it as a prop to the Pill component.

const Pill: React.FC<PillProps> = ({title}) => { 
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;