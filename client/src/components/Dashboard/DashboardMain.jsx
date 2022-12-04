import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../UI/LoadingAnimation";
import AddBlog from "./AddBlog";
import PostCard from "./PostCard";
import PreviewAdd from "./PreviewAdd";

const DashboardMain = () => {
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
          <div className="flex-auto lg:w-[25%]"></div>
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
          <div className="flex-auto lg:w-[25%]"></div>
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
