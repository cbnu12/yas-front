import { Meta, Story } from "@storybook/react";
import UnderlineInput from "./UnderlineInput";

export default {
  component: UnderlineInput,
  title: "00. Common / Underline Input",
} as Meta;

const Template: Story<{ placeholder: string; type: string }> = (args: {
  placeholder: string;
  type: string;
}) => <UnderlineInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
};

export const Email = Template.bind({});
Email.args = {
  placeholder: "이메일을 입력하세요.",
  type: "email",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "비밀번호를 입력하세요.",
  type: "password",
};
