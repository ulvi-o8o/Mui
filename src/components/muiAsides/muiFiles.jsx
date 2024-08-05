import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const MuiFiles = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <FaRegFileAlt className="w-[50px] h-[50px] text-green-700 " />
          <span>File</span>
        </div>
      </div>
    </div>
  );
};

export default MuiFiles;
