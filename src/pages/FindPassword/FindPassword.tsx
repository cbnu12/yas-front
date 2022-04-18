import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomButton from "../../common/BottomButton";
import ErrorBar from "../../common/ErrorBar";
import Modal from "../../common/Modal";
import TextButton from "../../common/TextButton";
import UnderlineInput from "../../common/UnderlineInput";

import "./FindPassword.scss";

const FindPassword = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [icon, setIcon] = useState<string>("");

  return (
    <Modal className="find-password">
      <TextButton
        className="left find-password__login-button"
        text="< 로그인 하기"
        onClick={() => {
          navigate("/signIn");
        }}
      />
      <ErrorBar
        className="find-password__error"
        icon={icon}
        message={errorMessage}
      />
      <UnderlineInput
        className="find-password__email"
        placeholder="이메일"
        type="email"
      />
      <BottomButton
        className="find-password__submit-button"
        text={"비밀번호 찾기"}
        onClick={() => {
          alert("비밀번호 찾기");
          setIcon("success");
          setErrorMessage("이메일을 확인하세요.");
        }}
      />
    </Modal>
  );
};

export default FindPassword;
