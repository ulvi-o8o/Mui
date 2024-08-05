import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Searchbar = () => {
  return (
    <div>
      <div className="w-full h-[100px]  flex justify-around items-center">
        <div className="w-[20%] h-[80px]  ">
          <div className="flex py-[8px] px-[4px] rounded-[12px] border-solid border-black  items-center">
            <div>
              <IoSearchOutline className="w-[30px] h-[30px] " />
            </div>
            <div>
              <input
                className="py-[16px] px-[8px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="w-[25%] h-[80px]  flex justiyf-center items-center gap-5 pl-[50px]">
          <div>
            <button className="flex  py-[8px] px-[16px] rounded-md gap-[5px] justify-center items-center ">
              <span className=" text-xl">Filter</span>
              <IoFilter className="w-[20px] h-[20px] " />
            </button>
          </div>
          <div>
            <button className="flex  py-[8px] px-[16px] rounded-md gap-[5px] justify-center items-center ">
              <span className=" text-xl">Sort by: Latest</span>
              <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
