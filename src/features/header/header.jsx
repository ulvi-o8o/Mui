import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { LuArrowLeftSquare } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <nav class="mx-auto w-full h-[70px] top-0 bg-gray-800 fixed">
        <div class="mx-auto w-full px-2 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="w-[50%] h-[70px] flex items-center gap-5">
            <LuArrowLeftSquare className="w-10 h-20 text-white " />
            <img
              className="w-[40px] h-[30px]"
              src="https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png"
              alt=""
            />
            <span className="text-white font-semibold text-2xl">Store</span>
          </div>
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div className="flex gap-3">
                  <button className="py-[10px] px-[50px] font-bold rounded-md text-white bg-blue-500">
                    Buy now
                  </button>
                  <button className="py-[10px] px-[30px] font-bold rounded-md text-blue-500 flex items-center gap-3">
                    Remove frame
                    <CiSquareRemove />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:hidden" id="mobile-menu"></div>
      </nav>
    </>
  );
};

export default Header;
