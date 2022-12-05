import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AccountMain = () => {
  let { username } = useParams();
  const [isFetched, setIsFetched] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("loginState"));
    const fetchData = async () => {
      let res = await axios.get(
        `http://localhost:8080/user/username/${username}`
      );
      setUserDetails(res.data);
      console.log(res.data);
      setIsFetched(true);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-grow justify-center items-center">
        <div className="w-[75%] h-[35rem] rounded bg-[white] shadow">
          <div className="border border-black">
            <div className="border-[2px] border-[white] rounded-full h-[140px] w-[140px] flex overflow-hidden">
              <img src={userDetails.profile_photo} className="object-fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountMain;
