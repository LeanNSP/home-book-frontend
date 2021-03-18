import React from "react";

import MessageList from "../MessageList/MessageList";

import style from "./Main.module.css";

const Main = () => {
  return (
    <main className={style.main}>
      <MessageList />
    </main>
  );
};

export default Main;
