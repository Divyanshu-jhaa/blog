import React, { useRef, useState } from "react";
import axios from "axios";
import settingIcon from "../assets/settings.png";

const AccountEdit = (prop) => {
  const [updateData, setUpdateData] = useState({
    user_id: prop.userDetails.user_id,
    name: prop.userDetails.name,
    email: prop.userDetails.email,
    password: prop.userDetails.password,
    profile_photo: prop.userDetails.profile_photo,
    username: prop.userDetails.username,
    profile_bio: prop.userDetails.profile_bio,
  });
  const [previewImage, setPreviewImage] = useState({
    link: prop.userDetails.profile_photo,
    isAdded: false,
  });
  const inputRef = useRef(null);

  const submitHandler = async () => {
    console.log(updateData);
    try {
      let res = await axios.put(
        `http://localhost:8080/user/${prop.userDetails.user_id}`,
        updateData
      );
      if (res.status === 200) {
        console.log("successful");
        prop.editSubmitHandler();
      }
    } catch {
      console.log("server error");
    }
  };
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="md:w-[50%] w-[90%] h-fit rounded bg-[white] shadow">
        <input
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={(e) => {
            let imageReader = new FileReader();
            imageReader.onload = () => {
              setUpdateData((prevState) => {
                return { ...prevState, profile_photo: imageReader.result };
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
        <div className="p-2 flex md:flex-row flex-col justify-center items-center relative">
          <div
            className="absolute  top-0 right-0 m-2"
            onClick={() => {
              prop.editHandler();
            }}
          >
            <img src={settingIcon} className="w-[30px]" />
          </div>
          <div
            className=" rounded-full h-[240px] w-[240px] flex overflow-hidden hover:brightness-75 hover:drop-shadow-sm"
            onClick={() => {
              inputRef.current.click();
            }}
          >
            <img src={previewImage.link} className="object-fill " />
          </div>
          <div className=" flex-grow  h-[240px] w-[240px] flex flex-col overflow-hidden">
            <div className=" flex-auto h-[20%]"></div>
            <div className="flex-auto h-[80%] p-2 flex flex-col">
              <input
                type="text"
                className=" font-[400] text-[2rem] focus:outline-none"
                placeholder={`${prop.userDetails.name}`}
                value={updateData.name}
                onChange={(e) => {
                  setUpdateData((prevState) => {
                    return { ...prevState, name: e.target.value };
                  });
                }}
              />

              <input
                type="text"
                className=" font-[400] text-[1.3rem] focus:outline-none"
                placeholder={`${prop.userDetails.username}`}
                value={updateData.username}
                onChange={(e) => {
                  setUpdateData((prevState) => {
                    return { ...prevState, username: e.target.value };
                  });
                }}
              />
              <input
                type="text"
                className=" font-[400] text-[1rem] italic focus:outline-none"
                placeholder={`${prop.userDetails.profile_bio}`}
                value={updateData.profile_bio}
                onChange={(e) => {
                  setUpdateData((prevState) => {
                    return { ...prevState, profile_bio: e.target.value };
                  });
                }}
              />
            </div>
            <div className="flex flex-row justify-end items-center focus:outline-none">
              <button
                className="border border-black rounded mx-3 p-2 px-4"
                onClick={() => submitHandler()}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountEdit;
