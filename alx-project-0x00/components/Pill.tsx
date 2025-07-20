import React from 'react';
import { ButtonProps } from "@/interfaces";

const Pill: React.FC<ButtonProps> = ({title}) => { 
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;