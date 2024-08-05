import React from "react";
import { SlBasketLoaded } from "react-icons/sl";

const MuiOrder = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <SlBasketLoaded className="w-[50px] h-[50px] text-green-700 " />
          <span>Order</span>
        </div>
      </div>
    </div>
  );
};

export default MuiOrder;
