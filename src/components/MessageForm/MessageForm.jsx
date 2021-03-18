import React from "react";

import style from "./MessageForm.module.css";

const MessageForm = () => {
  return (
    <form className={style.form}>
      <label className={style.label}>
        Name*
        <input
          className={style.input}
          placeholder="Enter a name from 2 to 20 characters"
        />
      </label>
      <label className={style.label}>
        Message*
        <input
          className={style.input}
          placeholder="Enter a message from 3 to 450 characters"
        />
      </label>
      <div className={style.btn_wrapper}>
        <button className={style.btn}>Add message</button>
      </div>
    </form>
  );
};

export default MessageForm;
