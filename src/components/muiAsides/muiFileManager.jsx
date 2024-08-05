import React from "react";
import { FaFileInvoice } from "react-icons/fa";

const MuiFileManager = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <FaFileInvoice className="w-[50px] h-[50px] text-green-700 " />
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default MuiFileManager;
