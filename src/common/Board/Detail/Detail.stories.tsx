import { Meta } from "@storybook/react";
import Detail from "./Detail";

export default {
  component: Detail,
  title: "00. Common / Board / Detail",
  args: {
    title: "제목입니다.",
    content:
      "내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.",
    name: "작성자",
    date: "2022.01.01 23:99",
  },
} as Meta;

const Template = (args: any) => <Detail {...args} />;

export const Default = Template.bind({});
