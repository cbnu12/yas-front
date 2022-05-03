import { Meta, Story } from "@storybook/react";
import TextButton from "./TextButton";

export default {
  component: TextButton,
  title: "00. Common / Text Button",
} as Meta;

const Template: Story<{ text: string; onClick: () => void }> = (args: {
  text: string;
  onClick: () => void;
}) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "버튼",
  onClick: () => {
    alert("클릭");
  },
};
