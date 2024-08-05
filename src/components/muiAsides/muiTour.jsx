import React from "react";
import { MdTour } from "react-icons/md";

const MuiTour = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <MdTour className="w-[50px] h-[50px] text-green-700 " />
          <span>Tour</span>
        </div>
      </div>
    </div>
  );
};

export default MuiTour;
