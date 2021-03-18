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
    const messages = await fetchApi.get("/message");

    this.setState({ messages });
  }

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
