import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingAnimation from "../UI/LoadingAnimation";
import { useParams } from "react-router-dom";
import AccountView from "./AccountView";
import AccountEdit from "./AccountEdit";

const AccountMain = () => {
  let { username } = useParams();
  const [isFetched, setIsFetched] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [editState, setEditState] = useState({
    isChangeView: false,
    isUpdated: false,
  });

  const editSubmitHandler = () => {
    setEditState((prevState) => {
      return {
        ...prevState,
        isChangeView: !prevState.isChangeView,
        isUpdated: true,
      };
    });
  };
  const editHandler = () => {
    setEditState((prevState) => {
      return {
        ...prevState,
        isChangeView: !prevState.isChangeView,
        isUpdated: false,
      };
    });
  };

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
  }, [editState.isUpdated]);
  if (isFetched)
    return (
      <>
        {editState.isChangeView ? (
          <AccountEdit
            userDetails={userDetails}
            editHandler={editHandler}
            editSubmitHandler={editSubmitHandler}
          />
        ) : (
          <AccountView userDetails={userDetails} editHandler={editHandler} />
        )}
      </>
    );
  else {
    return (
      <div className="flex flex-grow justify-center items-center">
        <LoadingAnimation />
      </div>
    );
  }
};

export default AccountMain;
