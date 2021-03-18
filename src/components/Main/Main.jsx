import React from "react";

import MessageList from "../MessageList/MessageList";

import style from "./Main.module.css";

const Main = ({ messages }) => {
  return (
    <main className={style.main}>
      <MessageList messages={messages} />
    </main>
  );
};

export default Main;
