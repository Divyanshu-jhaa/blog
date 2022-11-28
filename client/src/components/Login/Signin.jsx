import React from "react";

const Signin = (props) => {
  return (
    <div className="flex-auto w-[100%] m-1 flex flex-col justify-center text-center">
      <div className="font-[500] mt-1 mb-1">
        <input
          type="text"
          className="p-2 w-[75%] rounded-md bg-[#E1ECFD]"
          placeholder="username"
        />
      </div>
      <div className="font-[500] mt-1 mb-1">
        <input
          type="password"
          className="p-2 w-[75%] rounded-md bg-[#E1ECFD]"
          placeholder="password"
        />
      </div>
      <div className="font-[500] mt-2 mb-1">
        <button className="p-2 border border-black w-[75%] text-[white] rounded-md bg-[#08345B]">
          Log in
        </button>
      </div>
      <div className="font-[500] mt-2 mb-1"></div>
      <div className="text-[0.8rem] font-[500] mt-2 mb-1">
        <p>
          Don't have an account?
          <span
            className="text-[#08345B] font-[600] cursor-pointer"
            onClick={() => props.registerViewHandler()}
          >
            {" "}
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
