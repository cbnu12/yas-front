import React from "react";
import ErrorBar from "./ErrorBar";

export default {
  component: ErrorBar,
  title: "00. Common / Error Bar",
};

const Template = (args: { message: string; icon: string }) => (
  <ErrorBar {...args} />
);

export const Warning = Template.bind({});
Warning.args = {
  message: "에러가 발생 했습니다.",
  icon: "warning",
};

export const Success = Template.bind({});
Success.args = {
  message: "성공적으로 완료 되었습니다.",
  icon: "success",
};
