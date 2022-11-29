import React from "react";

const PreviewAdd = (props) => {
  return (
    <div
      className="h-fit m-2 bg-[white] rounded"
      onClick={() => {
        props.addBlogHandler();
      }}
    >
      <div className=" flex flex-row p-2 items-center">
        <div className="border border-black rounded-full overflow-hidden w-[40px] h-[40px] flex">
          <img src={props.userDetails.profile_photo} className="object-fill" />
        </div>
        <div className="font-[500] text-[1rem] flex flex-col  ml-1">
          <div>{props.userDetails.name}</div>
          <div className="text-[0.8rem]">@{props.userDetails.username}</div>
        </div>

        <div className="flex-1 ml-2">
          <input
            type="text"
            className="border border-black p-1 pl-2 w-full rounded-2xl text-[1.2rem] font-Inconsolata font-[600] placeholder:text-[#696969]"
            placeholder="What's on your mind..."
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewAdd;
