import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import "antd/dist/antd.css";
import SignIn from "./pages/User/SignIn";
import SignUp from "./pages/User/SignUp";
import FindPassword from "./pages/User/FindPassword";
import ConfirmEmail from "./pages/User/ConfirmEmail";
import TeamDetail from "./pages/Team/detail";

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/findPassword" element={<FindPassword />} />
      <Route path="/confirmEmail" element={<ConfirmEmail />} />

      <Route path="/team/:id" element={<TeamDetail />} />

      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
