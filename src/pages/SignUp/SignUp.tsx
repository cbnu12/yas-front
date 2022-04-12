import { Card, Tag, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomButton from "../../common/BottomButton";
import ErrorBar from "../../common/ErrorBar";
import Modal from "../../common/Modal";
import TextButton from "../../common/TextButton";
import UnderlineInput from "../../common/UnderlineInput";
import { data } from "./data";

import "./SignUp.scss";

interface SignUpInfoType {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  birthYear: number;
  optionBirthYear: boolean;
  career: number;
  optionCareer: boolean;
  jobGroup: { color: string; hashtag: string }[];
}

const initialValue: SignUpInfoType = {
  email: "",
  nickname: "",
  password: "",
  confirmPassword: "",
  birthYear: 0,
  optionBirthYear: false,
  career: 0,
  optionCareer: false,
  jobGroup: [],
};

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  const [signUpInfo, setSignUpInfo] = useState<SignUpInfoType>(initialValue);

  return (
    <Modal className="sign-up">
      <TextButton
        className="left text sign-up__login-button"
        text="< 로그인 하기"
        onClick={() => {
          navigate("/signIn");
        }}
      />
      {step === 0 && (
        <>
          <ErrorBar
            className="sign-up__error"
            icon={icon}
            message={errorMessage}
          />
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
          <p className="sign-up__title">직종</p>
          <div className="sign-up__job-group">
            {signUpInfo.jobGroup.map((item) => (
              <Tag key={item.color} color={`#${item.color}`}>
                <Typography.Text strong>#{item.hashtag}</Typography.Text>
              </Tag>
            ))}
          </div>
          <div className="sign-up__job-group-box">
            {data.map((item) => (
              <Tag
                key={item.color}
                color={`#${item.color}`}
                onClick={() => {
                  setSignUpInfo({
                    ...signUpInfo,
                    jobGroup: [...signUpInfo.jobGroup, item],
                  });
                }}
              >
                <Typography.Text strong>#{item.hashtag}</Typography.Text>
              </Tag>
            ))}
          </div>
          <BottomButton
            className="sign-up__prev-button"
            text={"이전 단계"}
            onClick={() => {
              setStep(0);
            }}
          />
          <BottomButton
            className="sign-up__submit-button"
            text={"회원가입"}
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
