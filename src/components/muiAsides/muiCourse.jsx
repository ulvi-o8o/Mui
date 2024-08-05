import React from "react";
import { PiTelevisionBold } from "react-icons/pi";

const MuiCourse = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <PiTelevisionBold className="w-[50px] h-[50px] text-green-700 " />
          <span>Course</span>
        </div>
      </div>
    </div>
  );
};

export default MuiCourse;
