import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "antd/dist/antd.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FindPassword from "./pages/FindPassword";
import ConfirmEmail from "./pages/ConfirmEmail";

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/findPassword" element={<FindPassword />} />
      <Route path="/confirmEmail" element={<ConfirmEmail />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
