import React from "react";

import MessageListItem from "./MessageListItem";

const MessageList = () => {
  const messages = [
    { id: 1, name: "Emma", message: "Hello, my name's Emma" },
    { id: 2, name: "Bob", message: "Hi, I'm Bob" },
    { id: 3, name: "Jack", message: "Hello! How are you?" },
  ];
  return messages.map((message) => (
    <MessageListItem key={message.id} {...message} />
  ));
};

export default MessageList;
