import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBlog from "./AddBlog";
import PreviewAdd from "./PreviewAdd";

const DashboardMain = () => {
  const [userDetails, setUserDetails] = useState({});
  const [addBlog, setAddBlog] = useState(false);
  const addBlogHandler = () => {
    setAddBlog((prevState) => {
      return !prevState;
    });
  };
  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("loginState"));
    const fetchData = async () => {
      let res = await axios.get(
        `http://localhost:8080/user/${localStorageData.user_id}`
      );
      setUserDetails(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-auto h-screen bg-[#ededed] flex-col lg:flex-row">
        <div className="border border-black flex-auto lg:w-[25%]"></div>
        <div className="border border-black flex-auto lg:w-[50%] flex flex-col">
          {addBlog ? (
            <AddBlog
              userDetails={userDetails}
              addBlogHandler={addBlogHandler}
            />
          ) : (
            <PreviewAdd
              userDetails={userDetails}
              addBlogHandler={addBlogHandler}
            />
          )}
        </div>
        <div className="flex-auto lg:w-[25%]"></div>
      </div>
    </>
  );
};

export default DashboardMain;
