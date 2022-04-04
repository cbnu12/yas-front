import React, { useState } from "react";
import Modal from "../../common/Modal";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string>("에러요");

  return (
    <Modal
      buttonText="로그인"
      onClick={() => {
        alert("로그인");
      }}
      errorMessage={errorMessage}
    >
      <input placeholder="이메일" />
      <input placeholder="비밀번호" />
      <button
        onClick={() => {
          alert("비밀번호 찾기");
        }}
      >
        비밀번호 찾기
      </button>
      아직 회원이 아니신가요?
      <button
        onClick={() => {
          alert("회원가입 하기");
        }}
      >
        회원가입 하기
      </button>
    </Modal>
  );
};

export default SignIn;
