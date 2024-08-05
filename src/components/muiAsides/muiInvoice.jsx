import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const MuiInvoice = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ml-[4px]">
        <div className="w-[80px] h-[80px]  flex flex-col justify-center items-center">
          <FaFileInvoiceDollar className="w-[50px] h-[50px] text-green-700 " />
          <span>Invoice</span>
        </div>
      </div>
    </div>
  );
};

export default MuiInvoice;
