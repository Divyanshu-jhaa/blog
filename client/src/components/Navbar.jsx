import React from "react";
import Logo from "./UI/Logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let path = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div className="bg-[white] h-[4rem] flex flex-row items-center justify-between shadow-md sticky top-0">
      <div className="w-fit">
        <Logo className="ml-1" />
      </div>
      <div className="flex flex-row flex-auto w-full justify-end items-center font-[1.5rem]">
        <div
          className={`ml-2 mr-2 cursor-pointer ${
            path === "/dashboard" ? "font-[500]" : ""
          }`}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </div>
        <div
          className={`ml-2 mr-2 cursor-pointer ${
            path === "/feed" ? "font-[500]" : ""
          }`}
          onClick={() => {
            navigate("/feed");
          }}
        >
          Feed
        </div>
        <div
          className={`ml-2 mr-2 cursor-pointer ${
            path === "/account" ? "font-[500]" : ""
          }`}
          onClick={() => {
            navigate("/account");
          }}
        >
          Account
        </div>
        <div className="border rounded-sm cursor-pointer border-black ml-6 mr-3 p-1 pl-3 pr-3">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
