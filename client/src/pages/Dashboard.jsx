import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardMain from "../components/Dashboard/DashboardMain";
import Navbar from "../components/Navbar";

const Dashboard = () => {
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
      <Navbar stateHandler={helperStateHandler} />
      <DashboardMain localData={loginData} />
    </>
  );
};

export default Dashboard;
