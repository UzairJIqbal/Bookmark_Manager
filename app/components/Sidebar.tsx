/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SidebarCom } from "@/app/lib/utils";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden flex-col w-64 h-screen bg-white border border-gray-100 overflow-y-auto z-20 md:max-h-full lg:flex lg:w-[330px] xl:w-[315px] ">
        <section className="flex flex-col items-center mt-6 gap-6 md:h-[500px]">
          <div className="flex items-center gap-3 lg:gap-2 lg:-ml-9 ">
            <div className="h-7 w-7 bg-green-900 rounded flex items-center justify-center">
              <img
                src="assets/bookmark-white.png"
                className="h-4 w-4 lg:h-3.5 lg:w-3.5 invert"
                alt="logo"
              />
            </div>

            <span className="text-lg font-extrabold whitespace-nowrap lg:text-[15px] text-slate-800">
              BookMark Manager
            </span>
          </div>

          <div className="w-full flex flex-col items-center gap-3 lg:gap-1 px-4">
            <div className="flex items-center gap-3 h-[35px] w-full cursor-pointer rounded hover:bg-slate-100 px-3 lg:text-[13px] lg:gap-1 lg:text-center text-slate-700 font-medium">
              <img
                src="assets/home.png"
                className="h-5 w-5 lg:h-4 lg:w-4"
                alt="home"
              />
              Home
            </div>

            <div className="flex items-center gap-3 h-[35px] w-full cursor-pointer rounded hover:bg-slate-100 px-3 lg:text-[13px] lg:gap-1 lg:text-center text-slate-500">
              <img
                src="assets/archive.png"
                className="h-5 w-5 lg:h-4 lg:w-4 opacity-60"
                alt="archive"
              />
              Archived
            </div>
          </div>

          <div className="w-full text-left text-xs px-8 lg:-mt-3 lg:text-[10px] font-bold text-slate-400">
            TAGS
          </div>
        </section>

        <section className="px-5 w-full mt-1 mb-6 lg:mt-1">
          <div className="flex flex-col gap-0">
            {SidebarCom.map((sidebar, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 text-[13px] lg:p-1 cursor-pointer hover:bg-slate-50 rounded lg:mt-4"
              >
                <div className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="accent-green-900" />
                  {sidebar.Name}
                </div>

                <div className="h-5 min-w-5 px-1 bg-slate-100 rounded-md flex justify-center items-center text-xs text-slate-500">
                  {sidebar.Value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
