import React from "react";
import Main from "./Main";

export default {
  component: Main,
  title: "01. 메인 화면",
};

const Template = (args: any) => <Main {...args} />;

export const Default = Template.bind({});
