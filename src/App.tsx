import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "antd/dist/antd.css";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
