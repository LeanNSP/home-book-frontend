import React from "react";

import MessageListItem from "./MessageListItem";

import style from "./MessageList.module.css";

const MessageList = ({ messages }) => {
  return (
    <ul className={style.list}>
      {messages.map((message) => (
        <MessageListItem key={message._id} {...message} />
      ))}
    </ul>
  );
};

export default MessageList;
