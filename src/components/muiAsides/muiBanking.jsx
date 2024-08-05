import React from "react";
import { RiBankFill } from "react-icons/ri";

const MuiBanking = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <RiBankFill className="w-[50px] h-[50px] text-green-700 " />
          <span>Banking</span>
        </div>
      </div>
    </div>
  );
};

export default MuiBanking;
