import React, { useState } from "react";
import BottomButton from "../../common/BottomButton";
import ErrorBar from "../../common/ErrorBar";
import Modal from "../../common/Modal";

import "./SignIn.scss";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <Modal>
      <ErrorBar
        className="sign-in__error"
        message={errorMessage}
        icon="warning"
      />
      <input placeholder="이메일" />
      <input placeholder="비밀번호" />
      <div className="sign-in__left">
        <button
          className="sign-in__text"
          onClick={() => {
            alert("비밀번호 찾기");
          }}
        >
          비밀번호 찾기
        </button>
      </div>
      <div className="sign-in__right">
        아직 회원이 아니신가요?
        <button
          className="sign-in__text"
          onClick={() => {
            alert("회원가입 하기");
          }}
        >
          회원가입 하기
        </button>
      </div>
      <BottomButton
        className="sign-in__submit"
        text="로그인"
        onClick={() => {
          alert("로그인");
        }}
      />
    </Modal>
  );
};

export default SignIn;
