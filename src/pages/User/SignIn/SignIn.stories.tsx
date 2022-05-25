import { Meta } from "@storybook/react";
import SignIn from "./SignIn";

export default {
  component: SignIn,
  title: "01. Pages / 로그인 화면",
} as Meta;

const Template = (args: any) => <SignIn {...args} />;

export const Default = Template.bind({});
