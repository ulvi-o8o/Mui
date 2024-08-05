import React from "react";
import { SiBlogger } from "react-icons/si";

const MuiBlog = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <SiBlogger className="w-[50px] h-[50px] text-green-700 " />
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
};

export default MuiBlog;
