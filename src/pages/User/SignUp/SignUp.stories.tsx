import { Meta } from "@storybook/react";
import SignUp from "./SignUp";

export default {
  component: SignUp,
  title: "01. Pages / 회원가입 화면",
} as Meta;

const Template = (args: any) => <SignUp {...args} />;

export const Default = Template.bind({});
