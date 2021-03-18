import React from "react";

import style from "./MessageList.module.css";

const MessageListItem = ({ name, message }) => {
  return (
    <li className={style.item}>
      <p className={style.item__name}>{name}</p>
      <p className={style.item__message}>{message}</p>
    </li>
  );
};

export default MessageListItem;
