import React from "react";
import { IoAnalyticsSharp } from "react-icons/io5";

const MuiAnalytics = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center  ml-[4px]">
          <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
            <IoAnalyticsSharp className="w-[50px] h-[50px] text-green-700 " />
            <span>Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuiAnalytics;
