import { Meta } from "@storybook/react";
import List from "./List";
import { ListProps } from "./List/List";

export default {
  component: List,
  title: "00. Common / List",
  args: {
    labelList: ["번호", "제목", "작성자", "작성일"],
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
} as Meta<ListProps>;

const Template = (args: any) => <List {...args} />;

export const Default = Template.bind({});
