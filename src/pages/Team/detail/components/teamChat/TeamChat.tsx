import React, { useState } from "react";
import { chatList } from "../../../../Main/data/data";

import "./TeamChat.scss";

const TeamChat = () => {
  const user = "A";

  return (
    <div className="chat-container">
      {chatList.map((chat) => (
        <div
          className={`chat-container__wrapper ${
            user === chat.writer ? "right" : "left"
          }`}
        >
          <img
            className="chat-container__wrapper__profile"
            src={chat.imageSource}
            alt="profile"
          />
          <div className="chat-container__wrapper__content">
            <div className="chat-container__wrapper__content__message">
              {chat.message}
            </div>
            <div className="chat-container__wrapper__content__time">
              {chat.time}
            </div>
          </div>
        </div>
      ))}
      <input className="chat-container__input" />
    </div>
  );
};

export default TeamChat;
