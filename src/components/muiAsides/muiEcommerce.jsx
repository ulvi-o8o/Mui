import React from "react";
import { BsHandbagFill } from "react-icons/bs";

const MuiEcommerce = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <BsHandbagFill className="w-[50px] h-[50px] text-green-700 " />
          <span>Ecommerce</span>
        </div>
      </div>
    </div>
  );
};

export default MuiEcommerce;
