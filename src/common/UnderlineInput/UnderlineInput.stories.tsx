import React from "react";
import UnderlineInput from "./UnderlineInput";

export default {
  component: UnderlineInput,
  title: "00. Common / Underline Input",
};

const Template = (args: { placeholder: string; type: string }) => (
  <UnderlineInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
};

export const Email = Template.bind({});
Email.args = {
  placeholder: "이메일을 입력하세요.",
  type: "email",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "비밀번호를 입력하세요.",
  type: "password",
};
