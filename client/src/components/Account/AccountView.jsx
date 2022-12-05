import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import settingIcon from "../assets/settings.png";
import PostCard from "../Dashboard/PostCard";

const AccountView = (prop) => {
  console.log(prop.userPosts);
  const { username } = useParams();
  let incomingUsername = JSON.parse(
    localStorage.getItem("loginState")
  ).username;

  return (
    <div className="flex flex-grow justify-center items-center flex-col ">
      <div className="md:w-[50%] w-[90%] h-fit rounded bg-[white] shadow relative my-4">
        {username === incomingUsername ? (
          <>
            <div
              className="absolute  top-0 right-0 m-2"
              onClick={() => {
                prop.editHandler();
              }}
            >
              <img src={settingIcon} className="w-[30px]" />
            </div>
          </>
        ) : null}

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
            <div></div>
          </div>
        </div>
      </div>
      {username !== incomingUsername ? (
        <>
          <div className="md:w-[50%] w-[90%] h-fit flex flex-col font-[500]">
            {prop.userDetails.name}'s Blog History
          </div>
          <div className="md:w-[50%] w-[90%] h-fit flex flex-col ">
            {prop.userPosts.reverse().map((i) => (
              <PostCard data={i} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AccountView;
