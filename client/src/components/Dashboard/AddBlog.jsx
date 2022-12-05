import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import topImage from "../assets/top.png";

const AddBlog = (props) => {
  const [data, setData] = useState({
    category_id: "",
    content: "",
    title: "",
    image_id: "",
    image_data: "",
    user_id: props.userDetails.user_id,
    date: "",
  });

  const [previewImage, setPreviewImage] = useState({
    link: "",
    isAdded: false,
  });

  // const [imageData, setImageData] = useState("");

  const postSubmitHandler = async () => {
    // let imageId = "";
    // if (data.image_data !== "") {
    //   imageId = uuidv4();
    // }
    if (data.category_id !== "" && data.content.length && data.title.length) {
      let res = await axios.post(`http://localhost:8080/blog/add`, {
        ...data,
        date: new Date().toJSON().slice(0, 10),
        image_id: uuidv4(),
      });
      // if (imageId !== "") {
      //   let res2 = await axios.post(
      //     `http://localhost:8080/image/${imageId}`,
      //     imageData
      //   );
      // }
      if (res.status === 200) {
        console.log("successful");
        props.changeViewSubmitHandler();
      } else {
        console.log("server error");
      }
    } else {
      console.log("not valid");
    }
  };
  return (
    <div className="h-fit m-2 bg-[white] rounded pb-1 relative">
      <div
        className="absolute top-0 right-0 m-2"
        onClick={() => {
          props.changeViewHandler();
        }}
      >
        <img src={topImage} className="w-[40px]" />
      </div>
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
          className=" p-1 pl-2 text-ellipsis w-full text-[2rem] font-Inconsolata font-[600] placeholder:text-[#696969] focus:outline-none"
          placeholder="Title"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />
      </div>
      {previewImage.isAdded ? (
        <div className="">
          <img src={previewImage.link} />
        </div>
      ) : null}

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
        <div className=" overflow-hidden flex-auto rounded flex justify-center items-center w-[70%]">
          <input
            type="file"
            className="flex-auto file:bg-[#08345B] file:text-[#ffffff] file:font-[400] file:border-none file:p-1 file:px-4 rounded border border-[#08345B]"
            onChange={(e) => {
              // const imageData = new FormData();
              // imageData.append("image", e.target.files[0]);
              // setImageData(imageData);
              let imageReader = new FileReader();
              imageReader.onload = () => {
                setData((prevState) => {
                  return { ...prevState, image_data: imageReader.result };
                }); //base64encoded string
              };
              imageReader.readAsDataURL(e.target.files[0]);
              setPreviewImage((prevState) => {
                return {
                  ...prevState,
                  link: URL.createObjectURL(e.target.files[0]),
                  isAdded: true,
                };
              });
            }}
          />
        </div>
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
