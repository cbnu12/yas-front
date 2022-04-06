import React from "react";
import SignUp from "./SignUp";

export default {
  component: SignUp,
  title: "03. 회원가입 화면",
};

const Template = (args: any) => <SignUp {...args} />;

export const Default = Template.bind({});
