import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountMain from "../components/Account/AccountMain";
import Navbar from "../components/Navbar";

const Account = () => {
  let { username } = useParams();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", user_id: "" });
  const [helperState, setHelperState] = useState(true);
  const helperStateHandler = () => {
    setHelperState((prevState) => {
      return !prevState;
    });
  };
  useEffect(() => {
    let localData = localStorage.getItem("loginState");
    if (localData === null) {
      navigate("/login", { replace: true });
    } else {
      setLoginData(JSON.parse(localData));
    }
  }, [helperState]);
  return (
    <>
      <div className="border border-black h-screen flex flex-col">
        <Navbar stateHandler={helperStateHandler} />
        <AccountMain />
      </div>
    </>
  );
};

export default Account;
