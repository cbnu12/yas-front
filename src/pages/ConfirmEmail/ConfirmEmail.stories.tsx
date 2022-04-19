import { Meta } from "@storybook/react";
import ConfirmEmail from "./ConfirmEmail";

export default {
  component: ConfirmEmail,
  title: "01. Pages / 이메일 인증코드 화면",
} as Meta;

const Template = (args: any) => <ConfirmEmail {...args} />;

export const Default = Template.bind({});
