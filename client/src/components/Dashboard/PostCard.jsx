import React from "react";

const PostCard = (prop) => {
  console.log(prop);
  return (
    <div className="h-fit bg-[white] m-2 rounded">
      <div className=" p-2 text-[1.2rem] font-[500] font-Inconsolata">
        {prop.data.title}
      </div>
      <div className="">
        <img src={prop.data.image} />
      </div>
      <div className=" p-2">{prop.data.content}</div>
    </div>
  );
};

export default PostCard;
