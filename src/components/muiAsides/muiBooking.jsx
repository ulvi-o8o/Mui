import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const MuiBooking = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <FaPlaneDeparture className="w-[50px] h-[50px] text-green-700 " />
          <span>Booking</span>
        </div>
      </div>
    </div>
  );
};

export default MuiBooking;
