import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
