import React from "react";

import MessageForm from "../MessageForm/MessageForm";

import style from "./Footer.module.css";

const Footer = ({ onAddMessage }) => {
  return (
    <footer className={style.footer}>
      <MessageForm onAddMessage={onAddMessage} />
    </footer>
  );
};

export default Footer;
