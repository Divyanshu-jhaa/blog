import React from "react";
import settingIcon from "../assets/settings.png";

const AccountView = (prop) => {
  return (
    <div className="flex flex-grow justify-center items-center ">
      <div className="md:w-[50%] w-[90%] h-fit rounded bg-[white] shadow relative">
        <div
          className="absolute  top-0 right-0 m-2"
          onClick={() => {
            prop.editHandler();
          }}
        >
          <img src={settingIcon} className="w-[30px]" />
        </div>
        <div className="p-2 flex md:flex-row flex-col justify-center items-center">
          <div className=" rounded-full h-[240px] w-[240px] flex overflow-hidden">
            <img src={prop.userDetails.profile_photo} className="object-fill" />
          </div>
          <div className=" flex-grow h-[240px] w-[240px] flex flex-col overflow-hidden">
            <div className=" flex-auto h-[20%]"></div>
            <div className="flex-auto h-[80%] p-2">
              <div className=" font-[400] text-[2rem]">
                {prop.userDetails.name}
              </div>
              <div className=" font-[400] text-[1.3rem]">
                @{prop.userDetails.username}
              </div>
              <div className="font-[400] text-[1rem] italic">
                {prop.userDetails.profile_bio}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountView;
