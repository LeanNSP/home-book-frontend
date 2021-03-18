import React, { Component } from "react";

import config from "../../config";

import style from "./MessageForm.module.css";

const INITIAL_STATE = { name: "", message: "" };

class MessageForm extends Component {
  state = { ...INITIAL_STATE };

  formInputsChangeHandler = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { onAddMessage } = this.props;

    if (this.isValid({ ...this.state })) {
      onAddMessage({ ...this.state });

      this.clearForm();
    }
  };

  isValid = ({ name, message }) => {
    const { MIN_NAME, MAX_NAME, MIN_MESSAGE, MAX_MESSAGE } = config;

    if (name < MIN_NAME || name > MAX_NAME) {
      alert("Enter a name from 2 to 20 characters");
      return false;
    }
    if (message < MIN_MESSAGE || message > MAX_MESSAGE) {
      alert("Enter a message from 3 to 450 characters");
      return false;
    }
    return true;
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, message } = this.state;

    return (
      <form className={style.form} onSubmit={this.submitHandler}>
        <label className={style.label}>
          Name*
          <input
            className={style.input}
            placeholder="Enter a name from 2 to 20 characters"
            type="text"
            name="name"
            required
            value={name}
            onChange={({ target }) => this.formInputsChangeHandler(target)}
          />
        </label>
        <label className={style.label}>
          Message*
          <input
            className={style.input}
            placeholder="Enter a message from 3 to 450 characters"
            type="text"
            name="message"
            required
            value={message}
            onChange={({ target }) => this.formInputsChangeHandler(target)}
          />
        </label>
        <div className={style.btn_wrapper}>
          <button className={style.btn} type="submit">
            Add message
          </button>
        </div>
      </form>
    );
  }
}

export default MessageForm;
