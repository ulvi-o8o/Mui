import React from "react";
import { CgArrowsV } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import MuiMain from "../../components/muiAsides/MuiMain";
import Searchbar from "../../components/searchbar/searchbar";
import Cards from "../../components/card/cards";

const Layout = () => {
  return (
    <div className="w-full h-[1550px] my-[70px]  flex flex-col ">
      <div className="w-[106px] h-full fixed  flex overflow-x-scroll">
        <MuiMain />
      </div>
      <div className="w-full h-[1550px] flex flex-col ">
        <div className="w-[1330px] h-[72px] bg-slate-100 flex  ml-[110px] fixed">
          <div className="w-[50%] ml-[50px]  flex items-center">
            <img
              className="w-[50px] h-[50px]"
              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-1.webp"
              alt=""
            />
            <span>Team 1</span>
            <CgArrowsV />
          </div>
          <div className=" w-[30%] h-[70px] flex items-center justify-center  ml-[20%] ">
            <ul className="flex items-center gap-5">
              <li>
                <div className="w-[40px] h-[40px]">
                  <IoSearchSharp className="w-[25px] h-[25px]" />
                </div>
              </li>
              <li>
                <img
                  className="w-[50px] h-[40px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s"
                  alt=""
                />
              </li>
              <li>
                <div className="flex flex-col mt-[-15px]">
                  <IoMdNotifications className="w-[30px] h-[30px]" />
                  <div className="w-[20px] h-[20px] flex items-center justify-center mt-[-40px] ml-[20px] rounded-[50%] bg-orange-700 ">
                    4
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <MdSupervisorAccount className="w-[30px] h-[30px]" />
                </div>
              </li>
              <li>
                <div>
                  <IoSettings className="w-[30px] h-[30px] translate rotate-360" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1340px] my-[75px] flex  ">
          <div className="w-[1150px] h-[75px] ml-[150px] flex flex-col">
            <div>
              <h1 className="text-3xl font-semibold">List</h1>
            </div>
            <div>
              <ul className="flex flex-row my-[10px] gap-5">
                <li>Dashboard</li>
                <li>Job</li>
                <li>List</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className=" text-white px-[20px] py-[10px] rounded-md text-xl">
              + New Job
            </button>
          </div>
        </div>
        <div>
          <Searchbar />
        </div>
        <div className="w-[1200px] h-[800px] ml-[110px] gap-[30px] flex flex-wrap ">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Layout;
