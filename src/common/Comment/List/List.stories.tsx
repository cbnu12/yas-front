import { Meta } from "@storybook/react";
import CommentList, { Props } from "./List";

export default {
  component: CommentList,
  title: "00. Common / Comment",
  args: {
    list: [
      {
        id: 1,
        writer: "작성자",
        date: "2022.12.20 23:59",
        content: "댓글 내용 입니다.",
      },
      {
        id: 2,
        writer: "작성자",
        date: "2022.12.20 23:59",
        content:
          "댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다.",
      },
      {
        id: 3,
        writer: "작성자",
        date: "2022.12.20 23:59",
        content:
          "댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다.",
      },
      {
        id: 4,
        writer: "작성자",
        date: "2022.12.20 23:59",
        content:
          "댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다.",
      },
    ],
  },
} as Meta<Props>;

const Template = (args: any) => <CommentList {...args} />;

export const Default = Template.bind({});
