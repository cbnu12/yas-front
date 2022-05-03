import { Meta } from "@storybook/react";
import Main from "./Main";

export default {
  component: Main,
  title: "01. Pages / 메인 화면",
} as Meta;

const Template = (args: any) => <Main {...args} />;

export const Default = Template.bind({});
