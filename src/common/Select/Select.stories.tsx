import { Meta, Story } from "@storybook/react";
import Select, { Props } from "./Select";

export default {
  component: Select,
  title: "00. Common / Select",
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "1",
  options: [
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
  ],
};
