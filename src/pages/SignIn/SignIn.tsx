import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/user";
import BottomButton from "../../common/BottomButton";
import ErrorBar from "../../common/ErrorBar";
import Modal from "../../common/Modal";
import TextButton from "../../common/TextButton";
import UnderlineInput from "../../common/UnderlineInput";

import "./SignIn.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <Modal>
      <ErrorBar
        className="sign-in__error"
        message={errorMessage}
        icon="warning"
      />
      <UnderlineInput
        placeholder="이메일"
        type="email"
        value={form.email}
        onChange={onChange}
        name="email"
      />
      <UnderlineInput
        placeholder="비밀번호"
        type="password"
        value={form.password}
        onChange={onChange}
        name="password"
      />
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
          signIn(form);
        }}
      />
    </Modal>
  );
};

export default SignIn;
