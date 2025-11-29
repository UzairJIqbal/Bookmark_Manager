/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 bg-white border border-gray-200 flex items-center px-6 sm:px-10 z-30 
      lg:flex lg:justify-between lg:items-center lg:ml-[255px] lg:w-[calc(100%-255px)]
      xl:flex xl:justify-between xl:items-center xl:ml-[255px] xl:w-[calc(100%-255px)]"
    >
      <section className="flex sm:ml-0.5 -ml-3.5 absolute lg:hidden">
        <div className="flex items-start sm:-ml-3.5">
          <button className="p-2 border border-slate-200 rounded-[7px] sm:rounded-xl bg-white hover:bg-slate-50">
            <img
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="No img found"
              className="h-[22px] w-[22px] opacity-70"
            />
          </button>
        </div>
      </section>

      <div className="flex items-center ml-10 w-full max-w-[150px] sm:max-w-[380px] md:max-w-[420px] relative md:ml-16 xl:ml-2 lg:ml-0">
        <img
          src="https://img.icons8.com/ios-glyphs/30/94a3b8/search--v1.png"
          alt="search icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:-ml-4 opacity-50"
        />

        <input
          type="text"
          placeholder="Search by title..."
          className="w-[150px] text-[12px] h-[38px] pl-9 sm:pl-12 md:pl-12 xl:pl-12 2xl:pl-12 pr-4 py-2 border border-slate-300 rounded-lg hover:border-slate-200 focus:outline-none md:w-[300px] sm:max-w-[350px] md:-ml-5 md:h-10 transition-all placeholder:text-slate-400"
        />
      </div>

      <div className="w-full flex items-center justify-end px-0 -mr-2.5 xl:-mr-[15px] lg:-mr-5 md:-mr-[25px] ml-auto">
        <div className="flex items-center ml-auto gap-2 sm:gap-2 md:gap-1 lg:ml-auto xl:mr-0 2xl:ml-[350px] lg:w-max ">
          <button className="bg-green-900 text-white p-1.5 rounded-md h-[38px] flex items-center justify-center gap-2 sm:w-[150px] w-10 lg:shrink-0 lg:w-max lg-flex-row xl:w-max md:w-[150px] hover:bg-green-800 transition-colors shadow-sm">
            <img
              src="/assets/plus.png"
              alt=""
              className="h-4 w-4 md:h-3.5 md:w-3.5 invert"
            />

            <span className="hidden sm:block text-sm xl:flex xl:items-center xl:justify-center md:text-[12px]">
              Add Bookmark
            </span>
          </button>

          <img
            src="assets/ProfilePic"
            alt="profile"
            className="w-10 h-10 sm:w-8 sm:h-8 md:w-[35px] md:h-[35px] rounded-full lg:h-10 lg:w-10 border border-slate-200"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
