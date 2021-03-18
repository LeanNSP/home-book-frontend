import React from "react";

import MessageForm from "../MessageForm/MessageForm";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <MessageForm />
    </footer>
  );
};

export default Footer;
