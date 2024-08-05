import React from "react";
import { PiSpeedometerDuotone } from "react-icons/pi";

const MuiApp = () => {
  return (
    <div className="flex justify-center items-center  ml-[4px]">
      <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
        <PiSpeedometerDuotone className="w-[50px] h-[50px] text-green-700 " />
        <span>App</span>
      </div>
    </div>
  );
};

export default MuiApp;
