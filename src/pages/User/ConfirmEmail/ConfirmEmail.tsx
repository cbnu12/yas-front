import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmEmail } from "../../../api/user";
import BottomButton from "../../../common/BottomButton";
import ErrorBar from "../../../common/ErrorBar";
import Modal from "../../../common/Modal";
import UnderlineInput from "../../../common/UnderlineInput";

import "./ConfirmEmail.scss";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [icon, setIcon] = useState<string>("");

  return (
    <Modal className="confirm-email">
      <ErrorBar
        className="confirm-email__error"
        icon={icon}
        message={errorMessage}
      />
      <UnderlineInput
        className="confirm-email__code"
        placeholder="이메일 인증 코드"
        type="email"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <p className="confirm-email__desc">이메일 수신까지 몇 분 소요 됩니다.</p>
      <BottomButton
        className="confirm-email__submit-button"
        text={"이메일 인증"}
        onClick={() => {
          confirmEmail({ code });
          navigate("/signIn");
        }}
      />
    </Modal>
  );
};

export default ConfirmEmail;
