import React from "react";
import "./index.css"
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";

const App = () => {

  return (
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
  );
};

export default App;