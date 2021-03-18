import React, { Component } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import fetchApi from "../services/fetchApi";

class App extends Component {
  state = {
    messages: [],
  };

  async componentDidMount() {
    let messages;

    try {
      messages = await fetchApi.get("/message");
    } catch (error) {
      alert(error);
    }

    this.setState({ messages });
  }

  addMessage = async (newMessage) => {
    let message;

    try {
      message = await fetchApi.post("/message", newMessage);
    } catch (error) {
      alert(error);
    }

    this.setState(({ messages }) => {
      return {
        messages: [...messages, message],
      };
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main messages={this.state.messages} />
        <Footer onAddMessage={this.addMessage} />
      </>
    );
  }
}

export default App;
