import React from "react";

import MessageListItem from "./MessageListItem";

import style from "./MessageList.module.css";

const MessageList = () => {
  const messages = [
    { id: 1, name: "Emma", message: "Hello, my name's Emma" },
    { id: 2, name: "Bob", message: "Hi, I'm Bob" },
    { id: 3, name: "Jack", message: "Hello! How are you?" },
  ];
  return (
    <ul className={style.list}>
      {messages.map((message) => (
        <MessageListItem key={message.id} {...message} />
      ))}
    </ul>
  );
};

export default MessageList;
