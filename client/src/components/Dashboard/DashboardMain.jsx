import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../UI/LoadingAnimation";
import AddBlog from "./AddBlog";
import PostCard from "./PostCard";
import PreviewAdd from "./PreviewAdd";
import settingIcon from "../assets/settings.png";
import { useNavigate } from "react-router-dom";

const DashboardMain = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [helperState, setHelperState] = useState({
    addBlog: false,
    refresh: true,
  });
  const [isFetched, setIsFetched] = useState(false);
  const changeViewHandler = () => {
    setHelperState((prevState) => {
      return { ...prevState, addBlog: !prevState.addBlog };
    });
  };
  const changeViewSubmitHandler = () => {
    setHelperState((prevState) => {
      return { ...prevState, refresh: !prevState.refresh, addBlog: false };
    });
  };
  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("loginState"));
    const fetchData = async () => {
      let res = await axios.get(
        `http://localhost:8080/user/${localStorageData.user_id}`
      );
      let res2 = await axios.get(
        `http://localhost:8080/blog/${localStorageData.user_id}`
      );
      setUserDetails(res.data);
      setUserPosts(res2.data);
      setIsFetched(true);
      window.scrollTo(0, 0);
    };
    fetchData();
  }, [helperState.refresh]);

  if (isFetched)
    return (
      <>
        <div className="flex flex-auto h-fit bg-[#ededed] flex-col lg:flex-row">
          <div className="flex-auto lg:w-[15%]"></div>
          <div className="flex-auto lg:w-[20%]">
            <div className="m-2 h-fit rounded bg-[white] flex flex-col overflow-hidden shadow">
              <div className="flex justify-center items-center p-2 bg-[#adb5bd]">
                <div className="border-[2px] border-[white] rounded-full h-[70px] w-[70px] flex overflow-hidden">
                  <img
                    src={userDetails.profile_photo}
                    className="object-fill"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="text-center font-[500] text-[1.5rem]">
                  {userDetails.name}{" "}
                  <span className="italic font-[400] text-[1.2rem]">
                    @{userDetails.username}
                  </span>
                </div>
                <div className="text-center text-[0.8rem] italic p-0">
                  Your oneline bio would go here...
                </div>
              </div>
              <hr />
              <div className="p-2">
                <div className="font-[500] text-[0.8rem] m-1 flex justify-between">
                  <span>Blogs Published:</span>
                  <span className="font-[500] text-[1rem]">
                    {userPosts.length}
                  </span>
                </div>
                <div className="font-[500] text-[0.8rem] m-1 flex justify-between">
                  <span>Likes Received:</span>
                  <span className="font-[500] text-[1rem]">0</span>
                </div>
              </div>
              <hr />
              <div
                className="p-2 flex items-center hover:bg-[#f1f1f1] cursor-pointer"
                onClick={() => {
                  navigate(`/account/${userDetails.username}`);
                }}
              >
                <div className="font-[500] text-[0.8rem] m-1 flex flex-row item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  <span className="flex justify-center items-center">
                    Account Settings
                  </span>
                </div>
              </div>
            </div>

            <div className="m-2 h-[8rem] rounded bg-[white] flex flex-col overflow-hidden shadow"></div>
          </div>
          <div className="flex-auto lg:w-[50%] flex flex-col">
            {helperState.addBlog ? (
              <AddBlog
                userDetails={userDetails}
                changeViewHandler={changeViewHandler}
                changeViewSubmitHandler={changeViewSubmitHandler}
              />
            ) : (
              <PreviewAdd
                userDetails={userDetails}
                changeViewHandler={changeViewHandler}
                changeViewSubmitHandler={changeViewSubmitHandler}
              />
            )}
            <div className="px-2">Your Blog History</div>
            {userPosts.reverse().map((i) => (
              <PostCard data={i} />
            ))}
          </div>
          <div className="flex-auto lg:w-[15%]"></div>
        </div>
      </>
    );
  else {
    return (
      <div className="flex flex-auto h-screen justify-center items-center">
        <LoadingAnimation />
      </div>
    );
  }
};

export default DashboardMain;
