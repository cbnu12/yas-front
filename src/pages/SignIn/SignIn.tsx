import React, { useState } from "react";
import Modal from "../../common/Modal";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <Modal
      buttonText="로그인"
      onClick={() => {
        alert("로그인");
      }}
      errorIcon="warning"
      errorMessage={errorMessage}
    >
      <input placeholder="이메일" />
      <input placeholder="비밀번호" />
      <div className="left">
        <button
          className="text"
          onClick={() => {
            alert("비밀번호 찾기");
          }}
        >
          비밀번호 찾기
        </button>
      </div>
      <div className="right">
        아직 회원이 아니신가요?
        <button
          className="text"
          onClick={() => {
            alert("회원가입 하기");
          }}
        >
          회원가입 하기
        </button>
      </div>
    </Modal>
  );
};

export default SignIn;
