import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomButton from "../../common/BottomButton";
import ErrorBar from "../../common/ErrorBar";
import Modal from "../../common/Modal";
import TextButton from "../../common/TextButton";
import UnderlineInput from "../../common/UnderlineInput";

import "./SignIn.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <Modal>
      <ErrorBar
        className="sign-in__error"
        message={errorMessage}
        icon="warning"
      />
      <UnderlineInput placeholder="이메일" type="email" />
      <UnderlineInput placeholder="비밀번호" type="password" />
      <div className="sign-in__left">
        <TextButton
          text="비밀번호 찾기"
          onClick={() => {
            navigate("/findPassword");
          }}
        />
      </div>
      <div className="sign-in__right">
        아직 회원이 아니신가요?
        <TextButton
          text="회원가입 하기"
          onClick={() => {
            navigate("/signUp");
          }}
        />
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
