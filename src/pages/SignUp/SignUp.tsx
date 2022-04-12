import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomButton from "../../common/BottomButton";
import ErrorBar from "../../common/ErrorBar";
import Modal from "../../common/Modal";
import TextButton from "../../common/TextButton";
import UnderlineInput from "../../common/UnderlineInput";

import "./SignUp.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  return (
    <Modal className="sign-up">
      <TextButton
        className="left text"
        text="로그인 하기"
        onClick={() => {
          navigate("/signIn");
        }}
      />
      <ErrorBar className="sign-up__error" icon={icon} message={errorMessage} />
      {step === 0 && (
        <>
          <UnderlineInput placeholder="이메일" type="email" />
          <UnderlineInput placeholder="닉네임" />
          <UnderlineInput placeholder="비밀번호" type="password" />
          <UnderlineInput placeholder="비밀번호 확인" type="password" />
          <UnderlineInput placeholder="생년" type="number" />
          <UnderlineInput placeholder="경력" type="number" />

          <BottomButton
            className="sign-up__next-button"
            text={"다음 단계"}
            onClick={() => {
              setStep(1);
            }}
          />
        </>
      )}
      {step === 1 && (
        <>
          직종
          <div></div>
          <div></div>
          <BottomButton
            className="sign-up__next-button"
            text={"이전 단계"}
            onClick={() => {
              setStep(0);
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default SignUp;
