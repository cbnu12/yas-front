import React from "react";
import SignIn from "./SignIn";

export default {
  component: SignIn,
  title: "02. 로그인 화면",
};

const Template = (args: any) => <SignIn {...args} />;

export const Default = Template.bind({});
