import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="youremail@mailagent.com"
            id=""
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(authOperations.login(data)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
