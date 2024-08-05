import React from "react";
import { GiLoincloth } from "react-icons/gi";

const MuiProduct = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <GiLoincloth className="w-[50px] h-[50px] text-green-700 " />
          <span>Product</span>
        </div>
      </div>
    </div>
  );
};

export default MuiProduct;
