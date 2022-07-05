import React from "react";
import GalleryList from "../../../../../common/Gallery/List";

import "./TeamPhoto.scss";

const TeamPhoto = () => {
  const list = [
    {
      index: "1",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      likeCount: 10,
    },
    {
      index: "2",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      commentCount: 10,
    },
    {
      index: "3",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      likeCount: 10,
      commentCount: 10,
    },
    {
      index: "4",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
    },
    {
      index: "5",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      likeCount: 10,
    },
    {
      index: "6",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      commentCount: 10,
    },
    {
      index: "7",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
      likeCount: 10,
      commentCount: 10,
    },
    {
      index: "8",
      src: "http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg",
    },
  ];

  return (
    <div className="team-photo">
      <GalleryList list={list} />
    </div>
  );
};

export default TeamPhoto;
