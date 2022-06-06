import { Meta } from "@storybook/react";
import GalleryList from "./List";

export default {
  component: GalleryList,
  title: "00. Common / Gallery",
  args: {
    list: [
      {
        index: 1,
        src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
        likeCount: 10,
      },
      {
        index: 2,
        src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
        commentCount: 10,
      },
      {
        index: 3,
        src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
        likeCount: 10,
        commentCount: 10,
      },
      {
        index: 4,
        src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      },
    ],
  },
} as Meta;

const Template = (args: any) => <GalleryList {...args} />;

export const Default = Template.bind({});
