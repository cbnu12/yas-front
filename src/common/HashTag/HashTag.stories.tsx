import { Meta, Story } from "@storybook/react";
import HashTag, { Props } from "./HashTag";

export default {
  component: HashTag,
  title: "00. Common / HashTag",
} as Meta;

const Template: Story<Props> = (args) => <HashTag {...args} />;

export const NoIcon = Template.bind({});
NoIcon.args = {
  hashtag: "아이콘 없음",
  color: "#4797e7",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  hashtag: "아이콘 있음",
  color: "#e7d56c",
  icon: "delete",
  onClickIcon: () => {
    alert("아이콘 삭제");
  },
};
