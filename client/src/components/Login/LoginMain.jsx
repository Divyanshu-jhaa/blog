import React, { useState } from "react";
import imageLogin from "../assets/8401.jpg";
import Logo from "../UI/Logo";
import Signin from "./Signin";
import Signup from "./Signup";

const LoginMain = () => {
  const [registerView, setRegisterView] = useState(false);
  const registerViewHandler = () => {
    setRegisterView((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#ededed]">
        <div className="w-[60rem] h-[35rem] rounded-md bg-[white] shadow-lg overflow-hidden flex flex-row">
          <div className="relative flex flex-auto w-[60%]  justify-center items-end">
            <div className="absolute flex flex-col top-0 left-0 p-3 w-full">
              <Logo />
              {/* <p className="text-[1rem] self-center">
                Put Your Thoughts into words
              </p> */}
            </div>
            <img src={imageLogin} className="object-cover h-[25rem]" />
          </div>
          <div className="flex flex-auto w-[40%]">
            {registerView ? (
              <Signup registerViewHandler={registerViewHandler} />
            ) : (
              <Signin registerViewHandler={registerViewHandler} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMain;
