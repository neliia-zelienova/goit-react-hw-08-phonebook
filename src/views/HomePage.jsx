import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authSelectors } from "../redux/auth";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {!this.props.isAuthoraized ? (
          <>
            <p>This is an web application to keep save your contacts</p>
            <p>
              Please, <Link to={"/register"}>register</Link> to start
            </p>
            <p>
              If you are already registered, <Link to={"/login"}>login</Link> to
              see and edit your contacts
            </p>
          </>
        ) : (
          <p>
            Youre already login lets <Link to={"/contacts"}>start</Link>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthoraized: authSelectors.getIsAuthorized(state),
});

export default connect(mapStateToProps)(Home);
