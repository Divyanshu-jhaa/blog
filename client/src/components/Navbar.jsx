import React from "react";
import Logo from "./UI/Logo";

const Navbar = () => {
  return (
    <div className="border border-black h-[3rem] flex flex-row items-center justify-between">
      <div className="w-fit">
        <Logo className="ml-1" />
      </div>
      <div className="flex-auto w-[40%] flex justify-center">
        <div className="flex flex-row w-[70%] bg-[#777777] rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            className="flex-auto w-full focus:outline-none bg-[#777777] placeholder:text-[white]"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex flex-row flex-auto w-[45%] justify-end">
        <div className="ml-2 mr-2">Dashboard</div>
        <div className="ml-2 mr-2">Feed</div>
        <div className="ml-2 mr-2">Account</div>
      </div>
      <div className="flex-auto w-[15%] flex justify-center items-center">
        <button className="border rounded-sm border-black p-1 pl-3 pr-3">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
