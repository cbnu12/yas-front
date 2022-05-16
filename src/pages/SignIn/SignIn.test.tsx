import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import customRender from "../../utils/render";
import SignIn from "./SignIn";

describe("로그인 화면", () => {
  const setUp = () => {
    customRender(<SignIn />, { path: "/signIn" });

    const emailInput = screen.getByPlaceholderText(/이메일/);
    const passwordInput = screen.getByPlaceholderText(/비밀번호/);
    const submitButton = screen.getByRole("button", { name: /로그인/ });

    return { emailInput, passwordInput, submitButton };
  };

  it("이메일과 비밀번호가 모두 입력되면 버튼이 활성화 된다.", () => {});

  it("이메일가 비밀번호가 조건에 충족되지 않으면 버튼이 비활성화 된다.", () => {});

  it("이메일 오류 시에 에러 메세지를 출력한다.", () => {});

  it("비밀번호 오류 시에 에러 메세지를 출력한다.", () => {});

  it("5회 이상 실패일 경우 에러 메세지를 출력한다.", () => {});

  it("정지된 계정일 경우 에러 메세지를 출력한다.", () => {});
});
