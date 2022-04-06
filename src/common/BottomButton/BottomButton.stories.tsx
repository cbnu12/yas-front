import React from "react";
import BottomButton from "./BottomButton";

export default {
  component: BottomButton,
  title: "00. Common / Bottom Button",
};

const Template = (args: { text: string; onClick: () => void }) => (
  <BottomButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "버튼",
  onClick: () => {
    alert("클릭");
  },
};
