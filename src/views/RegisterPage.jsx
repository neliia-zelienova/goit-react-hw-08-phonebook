import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.state", this.state);
    this.props.onSubmit(this.state);
    this.setState({ name: "", email: "", password: "", confirmPassword: "" });
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Youre name"
            id=""
            onChange={this.handleInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="youremail@mailagent.com"
            id=""
            onChange={this.handleInput}
          />
          <label htmlFor="password">Create password</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={this.handleInput}
          />
          <label htmlFor="confirmPassword">Repeat password</label>
          <input
            type="password"
            name="confirmPassword"
            id=""
            onChange={this.handleInput}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
