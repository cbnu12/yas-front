import { Meta } from "@storybook/react";
import FindPassword from "./FindPassword";

export default {
  component: FindPassword,
  title: "01. Pages / 비밀번호 찾기 화면",
} as Meta;

const Template = (args: any) => <FindPassword {...args} />;

export const Default = Template.bind({});
