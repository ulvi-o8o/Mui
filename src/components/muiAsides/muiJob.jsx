import React from "react";
import { RiHandbagFill } from "react-icons/ri";

const MuiJob = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <RiHandbagFill className="w-[50px] h-[50px] text-green-700 " />
          <span>Job</span>
        </div>
      </div>
    </div>
  );
};

export default MuiJob;
