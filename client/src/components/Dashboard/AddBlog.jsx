import axios from "axios";
import React, { useState } from "react";

const AddBlog = (props) => {
  const [data, setData] = useState({
    category_id: "",
    content: "",
    image: "",
    title: "",
    user_id: props.userDetails.user_id,
  });
  const postSubmitHandler = async () => {
    if (data.category_id !== "" && data.content.length && data.title.length) {
      let res = await axios.post(`http://localhost:8080/blog/add`, {
        ...data,
        date: new Date().toJSON().slice(0, 10),
      });
      if (res.status === 200) {
        console.log("successful");
        props.addBlogHandler();
      } else {
        console.log("server error");
      }
    } else {
      console.log("not valid");
    }
  };
  return (
    <div className="h-fit m-2 bg-[white] rounded pb-1">
      <div className=" flex flex-row p-2 items-center">
        <div className="border border-black rounded-full overflow-hidden w-[40px] h-[40px] flex">
          <img src={props.userDetails.profile_photo} className="object-fill" />
        </div>
        <div className="font-[500] text-[1rem] flex flex-col  ml-1">
          <div>{props.userDetails.name}</div>
          <div className="text-[0.8rem]">@{props.userDetails.username}</div>
        </div>
      </div>
      <div className="">
        <input
          type="text"
          className=" p-1 pl-2 w-full text-[2rem] font-Inconsolata font-[600] placeholder:text-[#696969] focus:outline-none"
          placeholder="Title"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />
      </div>
      <div className="">
        <textarea
          type="text"
          rows={"14"}
          className="p-1 pl-2 w-full text-[1rem] font-Inconsolata font-[600] placeholder:text-[#696969] resize-none focus:outline-none"
          placeholder="What's on your mind..."
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, content: e.target.value };
            });
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="ml-1 font-Inconsolata text-[1.2rem] font-[500]">
          Select Category
        </div>
        <div className=" flex flex-row flex-wrap justify-center">
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 1
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 1 };
              });
            }}
          >
            Technology
          </div>
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 2
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 2 };
              });
            }}
          >
            Food
          </div>
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 3
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 3 };
              });
            }}
          >
            Health and Fitness
          </div>
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 4
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 4 };
              });
            }}
          >
            Lifestyle
          </div>
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 5
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 5 };
              });
            }}
          >
            Photography
          </div>
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 6
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 6 };
              });
            }}
          >
            Business
          </div>
          <div
            className={`rounded w-fit p-1 px-2 font-[500] font-Inconsolata m-1 cursor-pointer ${
              data.category_id === 7
                ? "bg-[#08345B] text-[white]"
                : "bg-[#E1ECFF]"
            } `}
            onClick={() => {
              setData((prevState) => {
                return { ...prevState, category_id: 7 };
              });
            }}
          >
            Sport
          </div>
        </div>
      </div>
      <div className=" flex flex-row p-1">
        <div className="border border-black flex-auto w-[70%]"></div>
        <div className="flex-auto w-[30%] ml-2 flex justify-center items-center">
          <button
            className="border border-black w-[100%] rounded-2xl p-1 bg-[black] text-[white]"
            onClick={postSubmitHandler}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
