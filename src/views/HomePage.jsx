import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>This is an web application to keep save your contacts</p>
        <p>
          Please, <Link to={"/register"}>register</Link> to start
        </p>
        <p>
          If you are already registered, <Link to={"/login"}>login</Link> to see
          and edit your contacts
        </p>
        <p>
          Youre already login lets <Link to={"/register"}>start</Link>
        </p>
      </div>
    );
  }
}

export default Home;
