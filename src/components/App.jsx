import React from "react";

const App = () => {
  return (
    <>
      <header>
        <h1>Home Book</h1>
      </header>
      <main>
        <p>No list</p>
        <ul>
          <li>
            <p>Emma</p>
            <p>Hello, my name's Emma</p>
          </li>
          <li>
            <p>Bob</p>
            <p>Hi, I'm Bob</p>
          </li>
          <li>
            <p>Jack</p>
            <p>Hello! How are you?</p>
          </li>
        </ul>
      </main>
      <footer>
        <form>
          <label>
            Name*
            <input placeholder="Enter a name from 2 to 20 characters" />
          </label>
          <label>
            Message*
            <input placeholder="Enter a message from 3 to 450 characters" />
          </label>
          <button>Add message</button>
        </form>
      </footer>
    </>
  );
};

export default App;
