import { Meta, Story } from "@storybook/react";
import Search, { Props } from "./Search";

export default {
  component: Search,
  title: "00. Common / Search",
} as Meta;

const Template: Story<Props> = (args) => <Search {...args} />;

export const Default = Template.bind({});
