import React from "react";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";

const App = () => {

  return (
      <Routes>
        <Route path="/" exact element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
      </Routes>
  );
};

export default App;