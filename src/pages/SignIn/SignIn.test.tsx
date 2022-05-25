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

  it("이메일과 비밀번호가 모두 입력되면 버튼이 활성화 된다.", () => {
    const { emailInput, passwordInput, submitButton } = setUp();

    userEvent.type(emailInput, "abc@naver.com");
    userEvent.type(passwordInput, "1234");
    expect(submitButton).toBeEnabled();
  });

  it("이메일과 비밀번호가 조건에 충족되지 않으면 버튼이 비활성화 된다.", () => {
    const { emailInput, passwordInput, submitButton } = setUp();

    userEvent.type(emailInput, "abc");
    userEvent.type(passwordInput, "");
    expect(submitButton).toNotBeEnabled();
  });

  it("이메일 오류 시에 에러 메세지를 출력한다.", () => {
    const { emailInput, passwordInput, submitButton } = setUp();

    userEvent.type(emailInput, "abc@naver.com");
    userEvent.type(passwordInput, "1234");
    userEvent.click(submitButton);

    expect(screen.getByText(/이메일을 확인하세요./)).toBeInTheDocument();
  });

  it("비밀번호 오류 시에 에러 메세지를 출력한다.", () => {
    const { emailInput, passwordInput, submitButton } = setUp();

    userEvent.type(emailInput, "abc@naver.com");
    userEvent.type(passwordInput, "1234");
    userEvent.click(submitButton);

    expect(screen.getByText(/비밀번호를 확인하세요./)).toBeInTheDocument();
  });

  it("5회 이상 실패일 경우 에러 메세지를 출력한다.", () => {
    const { emailInput, passwordInput, submitButton } = setUp();

    userEvent.type(emailInput, "abc@naver.com");
    userEvent.type(passwordInput, "1234");
    userEvent.click(submitButton);

    expect(
      screen.getByText(/비밀번호를 5회 이상 잘못 입력하셨습니다./)
    ).toBeInTheDocument();
  });

  it("정지된 계정일 경우 에러 메세지를 출력한다.", () => {
    const { emailInput, passwordInput, submitButton } = setUp();

    userEvent.type(emailInput, "abc@naver.com");
    userEvent.type(passwordInput, "1234");
    userEvent.click(submitButton);

    expect(screen.getByText(/정지된 계정입니다./)).toBeInTheDocument();
  });
});
