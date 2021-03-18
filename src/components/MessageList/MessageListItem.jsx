import React from "react";

const MessageListItem = ({ name, message }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{message}</p>
    </li>
  );
};

export default MessageListItem;
