import { Meta } from "@storybook/react";
import List from "./List";
import { Props } from "./List/List";

export default {
  component: List,
  title: "00. Common / List",
  args: {
    list: [
      {
        index: 1,
        title: "제목",
        writer: "작성자",
        createdDate: "2022.12.20",
        commentCount: 10,
      },
      {
        index: 2,
        title: "제목",
        writer: "작성자",
        createdDate: "2022.12.20",
      },
      {
        index: 3,
        title: "제목",
        writer: "작성자",
        createdDate: "2022.12.20",
        commentCount: 10,
      },
    ],
  },
} as Meta<Props>;

const Template = (args: any) => <List {...args} />;

export const Default = Template.bind({});
