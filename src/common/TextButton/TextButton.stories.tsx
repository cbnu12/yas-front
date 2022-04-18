import React from "react";
import TextButton from "./TextButton";

export default {
  component: TextButton,
  title: "00. Common / Text Button",
};

const Template = (args: { text: string; onClick: () => void }) => (
  <TextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "버튼",
  onClick: () => {
    alert("클릭");
  },
};
