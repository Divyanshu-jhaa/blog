import React from "react";
import "./index.css"
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import SingleView from "./pages/SingleView";
import './index.css';
const App = () => {
  let path = window.location.pathname;
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/singleview" element={<SingleView/>}></Route>
      </Routes>
      </>
  );
};

export default App;